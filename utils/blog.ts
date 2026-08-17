import { Asset } from 'expo-asset';

import post1 from '../blog/1.md';
import post2 from '../blog/2.md';
import post3 from '../blog/3.md';

const blogSources = [
    { slug: '1', source: post1 },
    { slug: '2', source: post2 },
    { slug: '3', source: post3 }
] as const;

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
        .replace(/^#+\s+/gm, '')
        .replace(/[*_>`[\]()-]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    const excerptText = plainText.slice(title.length).trim().slice(0, 180).trim();

    return {
        slug,
        title,
        excerpt: `${excerptText}…`,
        readingMinutes: Math.max(1, Math.ceil(plainText.split(/\s+/).length / 220)),
        markdown
    };
}

async function loadMarkdown(source: number): Promise<string> {
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
