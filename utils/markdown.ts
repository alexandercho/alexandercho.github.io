export type MarkdownInline =
    | { type: 'text'; text: string }
    | { type: 'bold'; text: string }
    | { type: 'italic'; text: string }
    | { type: 'link'; text: string; href: string };

export type MarkdownBlock =
    | { type: 'title'; text: string }
    | { type: 'heading'; text: string }
    | { type: 'paragraph'; content: MarkdownInline[] }
    | { type: 'quote'; content: MarkdownInline[] }
    | { type: 'list'; items: MarkdownInline[][] };

export function parseMarkdownInline(text: string): MarkdownInline[] {
    const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;

    return text.split(pattern).filter(Boolean).map((part) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

        if (link) {
            return { type: 'link', text: link[1], href: link[2] };
        }

        if (part.startsWith('**') && part.endsWith('**')) {
            return { type: 'bold', text: part.slice(2, -2) };
        }

        if (part.startsWith('*') && part.endsWith('*')) {
            return { type: 'italic', text: part.slice(1, -1) };
        }

        return { type: 'text', text: part };
    });
}

export function parseMarkdown(markdown: string): MarkdownBlock[] {
    return markdown.trim().split(/\n\s*\n/).map((block) => {
        if (block.startsWith('# ')) {
            return { type: 'title', text: block.slice(2) };
        }

        if (block.startsWith('## ')) {
            return { type: 'heading', text: block.slice(3) };
        }

        if (block.split('\n').every((line) => line.startsWith('- '))) {
            return {
                type: 'list',
                items: block.split('\n').map((line) => parseMarkdownInline(line.slice(2)))
            };
        }

        if (block.startsWith('> ')) {
            return {
                type: 'quote',
                content: parseMarkdownInline(block.replace(/^>\s?/gm, '').replace(/\n/g, ' '))
            };
        }

        return {
            type: 'paragraph',
            content: parseMarkdownInline(block.replace(/\n/g, ' '))
        };
    });
}
