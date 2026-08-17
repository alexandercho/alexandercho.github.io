export type MarkdownInline =
    | { type: 'text'; text: string }
    | { type: 'bold'; text: string }
    | { type: 'italic'; text: string }
    | { type: 'code'; text: string }
    | { type: 'link'; text: string; href: string };

export type MarkdownBlock =
    | { type: 'heading'; level: number; text: string }
    | { type: 'paragraph'; content: MarkdownInline[] }
    | { type: 'quote'; content: MarkdownInline[] }
    | { type: 'list'; ordered: boolean; start: number; items: MarkdownInline[][] }
    | { type: 'code'; language?: string; text: string }
    | { type: 'divider' }
    | {
        type: 'table';
        header: MarkdownInline[][];
        rows: MarkdownInline[][][];
        alignments: ('left' | 'center' | 'right')[];
    };

const headingPattern = /^(#{1,6})\s+(.+)$/;
const unorderedListPattern = /^\s*[-*+]\s+(.+)$/;
const orderedListPattern = /^\s*(\d+)\.\s+(.+)$/;
const dividerPattern = /^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/;
const tableDividerCellPattern = /^:?-{3,}:?$/;

export function parseMarkdownInline(text: string): MarkdownInline[] {
    const pattern = /(\[[^\]]+\]\([^)]+\)|`[^`]+`|\*\*[^*]+\*\*|__[^_]+__|\*[^*\n]+\*|_[^_\n]+_)/g;

    return text.split(pattern).filter(Boolean).map((part) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

        if (link) {
            return { type: 'link', text: link[1], href: link[2] };
        }

        if (part.startsWith('`') && part.endsWith('`')) {
            return { type: 'code', text: part.slice(1, -1) };
        }

        if (
            (part.startsWith('**') && part.endsWith('**')) ||
            (part.startsWith('__') && part.endsWith('__'))
        ) {
            return { type: 'bold', text: part.slice(2, -2) };
        }

        if (
            (part.startsWith('*') && part.endsWith('*')) ||
            (part.startsWith('_') && part.endsWith('_'))
        ) {
            return { type: 'italic', text: part.slice(1, -1) };
        }

        return { type: 'text', text: part };
    });
}

function parseTableRow(line: string): string[] {
    return line
        .trim()
        .replace(/^\|/, '')
        .replace(/\|$/, '')
        .split('|')
        .map((cell) => cell.trim());
}

function isTableStart(lines: string[], index: number): boolean {
    if (!lines[index]?.includes('|') || !lines[index + 1]?.includes('|')) {
        return false;
    }

    const dividerCells = parseTableRow(lines[index + 1]);
    return dividerCells.length > 0 && dividerCells.every(
        (cell) => tableDividerCellPattern.test(cell)
    );
}

function isBlockStart(lines: string[], index: number): boolean {
    const line = lines[index] ?? '';

    return (
        !line.trim() ||
        line.startsWith('```') ||
        headingPattern.test(line) ||
        dividerPattern.test(line) ||
        unorderedListPattern.test(line) ||
        orderedListPattern.test(line) ||
        /^\s*>/.test(line) ||
        isTableStart(lines, index)
    );
}

export function parseMarkdown(markdown: string): MarkdownBlock[] {
    const lines = markdown.replace(/\r\n?/g, '\n').trim().split('\n');
    const blocks: MarkdownBlock[] = [];
    let index = 0;

    while (index < lines.length) {
        const line = lines[index];

        if (!line.trim()) {
            index += 1;
            continue;
        }

        if (line.startsWith('```')) {
            const language = line.slice(3).trim().split(/\s+/)[0] || undefined;
            const codeLines: string[] = [];
            index += 1;

            while (index < lines.length && !lines[index].startsWith('```')) {
                codeLines.push(lines[index]);
                index += 1;
            }

            if (index < lines.length) {
                index += 1;
            }

            blocks.push({ type: 'code', language, text: codeLines.join('\n') });
            continue;
        }

        const heading = line.match(headingPattern);

        if (heading) {
            blocks.push({
                type: 'heading',
                level: heading[1].length,
                text: heading[2].trim()
            });
            index += 1;
            continue;
        }

        if (dividerPattern.test(line)) {
            blocks.push({ type: 'divider' });
            index += 1;
            continue;
        }

        if (isTableStart(lines, index)) {
            const headerCells = parseTableRow(line);
            const dividerCells = parseTableRow(lines[index + 1]);
            const alignments = dividerCells.map((cell) => {
                if (cell.startsWith(':') && cell.endsWith(':')) {
                    return 'center';
                }

                return cell.endsWith(':') ? 'right' : 'left';
            });
            const rows: MarkdownInline[][][] = [];
            index += 2;

            while (index < lines.length && lines[index].trim() && lines[index].includes('|')) {
                rows.push(parseTableRow(lines[index]).map(parseMarkdownInline));
                index += 1;
            }

            blocks.push({
                type: 'table',
                header: headerCells.map(parseMarkdownInline),
                rows,
                alignments
            });
            continue;
        }

        const unorderedItem = line.match(unorderedListPattern);
        const orderedItem = line.match(orderedListPattern);

        if (unorderedItem || orderedItem) {
            const ordered = Boolean(orderedItem);
            const start = orderedItem ? Number(orderedItem[1]) : 1;
            const items: MarkdownInline[][] = [];

            while (index < lines.length) {
                const item = lines[index].match(
                    ordered ? orderedListPattern : unorderedListPattern
                );

                if (!item) {
                    break;
                }

                items.push(parseMarkdownInline(item[ordered ? 2 : 1]));
                index += 1;
            }

            blocks.push({ type: 'list', ordered, start, items });
            continue;
        }

        if (/^\s*>/.test(line)) {
            const quoteLines: string[] = [];

            while (index < lines.length && /^\s*>/.test(lines[index])) {
                quoteLines.push(lines[index].replace(/^\s*>\s?/, ''));
                index += 1;
            }

            blocks.push({
                type: 'quote',
                content: parseMarkdownInline(quoteLines.join(' '))
            });
            continue;
        }

        const paragraphLines: string[] = [];

        while (index < lines.length && !isBlockStart(lines, index)) {
            paragraphLines.push(lines[index].trim());
            index += 1;
        }

        if (paragraphLines.length) {
            blocks.push({
                type: 'paragraph',
                content: parseMarkdownInline(paragraphLines.join(' '))
            });
        }
    }

    return blocks;
}
