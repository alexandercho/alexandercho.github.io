import { Asset } from 'expo-asset';

type MarkdownSource = number | string;
type MarkdownModule = MarkdownSource | { default: MarkdownSource };
type MarkdownContext = {
    (path: string): MarkdownModule;
    keys(): string[];
};

const markdownContext = (
    require as typeof require & {
        context(
            directory: string,
            useSubdirectories: boolean,
            pattern: RegExp
        ): MarkdownContext;
    }
).context('../blog', false, /\.md$/);

const blogSources = markdownContext
    .keys()
    .map((path) => {
        const markdownModule = markdownContext(path);

        return {
            slug: path.replace(/^\.\//, '').replace(/\.md$/, ''),
            source: typeof markdownModule === 'number' ||
                typeof markdownModule === 'string'
                ? markdownModule
                : markdownModule.default
        };
    })
    .sort((a, b) => a.slug.localeCompare(b.slug, undefined, {
        numeric: true,
        sensitivity: 'base'
    }));

export const BLOG_POST_SLUGS = blogSources.map(({ slug }) => slug);

export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    readingMinutes: number;
    markdown: string;
};

function createBlogPost(slug: string, markdown: string): BlogPost {
    const title = markdown.match(/^#\s+(.+)$/m)?.[1].trim() ?? `Post ${slug}`;
    const plainText = markdown
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/^\|?[\s:|-]+\|?$/gm, ' ')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/^#+\s+/gm, '')
        .replace(/[*_>`|[\]()-]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    const excerptText = plainText
        .slice(title.length)
        .trim()
        .slice(0, 180)
        .trim()
        .replace(/[.,;:!?-]*$/, '');

    return {
        slug,
        title,
        excerpt: excerptText ? `${excerptText}…` : '',
        readingMinutes: Math.max(1, Math.ceil(plainText.split(/\s+/).length / 220)),
        markdown
    };
}

async function loadMarkdown(source: MarkdownSource): Promise<string> {
    const asset = Asset.fromModule(source);
    await asset.downloadAsync();
    const response = await fetch(asset.localUri ?? asset.uri);

    if (!response.ok) {
        throw new Error(`Unable to load Markdown asset: ${response.status}`);
    }

    return response.text();
}

export async function loadBlogPosts(): Promise<BlogPost[]> {
    return Promise.all(blogSources.map(async ({ slug, source }) => (
        createBlogPost(slug, await loadMarkdown(source))
    )));
}

export async function loadBlogPost(slug: string): Promise<BlogPost | null> {
    const post = blogSources.find((item) => item.slug === slug);
    return post ? createBlogPost(post.slug, await loadMarkdown(post.source)) : null;
}
