import { Fragment, type ReactNode, useMemo } from 'react';
import { Linking, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/StandardComponents/ThemedText';
import { Spacing } from '@/constants/spacing';
import { Fonts } from '@/constants/theme';
import { useCutoffs } from '@/hooks/useCutoffs';
import { useThemeColor } from '@/hooks/useThemeColor';
import { parseMarkdown, type MarkdownInline } from '@/utils/markdown';

function renderInline(
    content: MarkdownInline[],
    linkColor: string,
    codeBackground: string
): ReactNode[] {
    return content.map((part, index) => {
        const key = `${part.type}-${part.text}-${index}`;

        if (part.type === 'link') {
            return (
                <ThemedText
                    key={key}
                    accessibilityRole='link'
                    onPress={() => Linking.openURL(part.href)}
                    style={[styles.link, { color: linkColor }]}
                >
                    {part.text}
                </ThemedText>
            );
        }

        if (part.type === 'bold') {
            return <ThemedText key={key} style={styles.bold}>{part.text}</ThemedText>;
        }

        if (part.type === 'italic') {
            return <ThemedText key={key} style={styles.italic}>{part.text}</ThemedText>;
        }

        if (part.type === 'code') {
            return (
                <ThemedText
                    key={key}
                    style={[styles.inlineCode, { backgroundColor: codeBackground }]}
                >
                    {part.text}
                </ThemedText>
            );
        }

        return <Fragment key={key}>{part.text}</Fragment>;
    });
}

export function MarkdownArticle({ markdown }: { markdown: string }) {
    const { isMobile } = useCutoffs();
    const tintColor = useThemeColor({}, 'tint');
    const borderColor = useThemeColor({}, 'subtleBorder');
    const elevatedSurface = useThemeColor({}, 'elevatedSurface');
    const primaryText = useThemeColor({}, 'primaryText');
    const secondaryText = useThemeColor({}, 'secondaryText');
    const blocks = useMemo(() => parseMarkdown(markdown), [markdown]);

    const inline = (content: MarkdownInline[]) => (
        renderInline(content, tintColor, elevatedSurface)
    );

    return (
        <View style={[styles.article, isMobile && styles.mobileArticle]}>
            {blocks.map((block, index) => {
                const key = `${index}-${block.type}`;

                if (block.type === 'heading') {
                    if (block.level === 1 && index === 0) {
                        return null;
                    }

                    return (
                        <ThemedText
                            key={key}
                            selectable
                            type='title'
                            style={[
                                styles.heading,
                                block.level === 1 && styles.headingOne,
                                block.level >= 3 && styles.headingThree,
                                isMobile && styles.mobileHeading
                            ]}
                        >
                            {block.text}
                        </ThemedText>
                    );
                }

                if (block.type === 'list') {
                    return (
                        <View key={key} style={styles.list}>
                            {block.items.map((item, itemIndex) => (
                                <View key={`${key}-${itemIndex}`} style={styles.listItem}>
                                    <ThemedText
                                        selectable
                                        style={[styles.marker, { color: tintColor }]}
                                    >
                                        {block.ordered
                                            ? `${block.start + itemIndex}.`
                                            : '•'}
                                    </ThemedText>
                                    <ThemedText selectable style={styles.listText}>
                                        {inline(item)}
                                    </ThemedText>
                                </View>
                            ))}
                        </View>
                    );
                }

                if (block.type === 'quote') {
                    return (
                        <View
                            key={key}
                            style={[
                                styles.quote,
                                {
                                    borderLeftColor: tintColor,
                                    backgroundColor: elevatedSurface
                                }
                            ]}
                        >
                            <ThemedText selectable style={styles.quoteText}>
                                {inline(block.content)}
                            </ThemedText>
                        </View>
                    );
                }

                if (block.type === 'code') {
                    return (
                        <View
                            key={key}
                            style={[
                                styles.codeBlock,
                                { backgroundColor: elevatedSurface, borderColor }
                            ]}
                        >
                            {block.language ? (
                                <ThemedText
                                    selectable
                                    style={[styles.codeLanguage, { color: tintColor }]}
                                >
                                    {block.language.toUpperCase()}
                                </ThemedText>
                            ) : null}
                            <ScrollView
                                horizontal
                                contentContainerStyle={styles.codeContent}
                                showsHorizontalScrollIndicator={false}
                            >
                                <ThemedText
                                    selectable
                                    style={[styles.codeText, { color: primaryText }]}
                                >
                                    {block.text}
                                </ThemedText>
                            </ScrollView>
                        </View>
                    );
                }

                if (block.type === 'divider') {
                    return (
                        <View
                            key={key}
                            style={[styles.divider, { backgroundColor: borderColor }]}
                        />
                    );
                }

                if (block.type === 'table') {
                    const columnCount = Math.max(
                        block.header.length,
                        ...block.rows.map((row) => row.length)
                    );

                    return (
                        <ScrollView
                            key={key}
                            horizontal
                            contentContainerStyle={styles.tableScroll}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View
                                style={[
                                    styles.table,
                                    { borderColor, minWidth: Math.max(520, columnCount * 150) }
                                ]}
                            >
                                <View
                                    style={[
                                        styles.tableRow,
                                        { backgroundColor: elevatedSurface }
                                    ]}
                                >
                                    {block.header.map((cell, cellIndex) => (
                                        <ThemedText
                                            key={`${key}-header-${cellIndex}`}
                                            selectable
                                            style={[
                                                styles.tableCell,
                                                styles.tableHeader,
                                                { borderColor },
                                                {
                                                    textAlign: block.alignments[cellIndex] ??
                                                        'left'
                                                }
                                            ]}
                                        >
                                            {inline(cell)}
                                        </ThemedText>
                                    ))}
                                </View>
                                {block.rows.map((row, rowIndex) => (
                                    <View key={`${key}-row-${rowIndex}`} style={styles.tableRow}>
                                        {Array.from({ length: columnCount }).map(
                                            (_, cellIndex) => (
                                                <ThemedText
                                                    key={`${key}-${rowIndex}-${cellIndex}`}
                                                    selectable
                                                    style={[
                                                        styles.tableCell,
                                                        { borderColor },
                                                        {
                                                            color: secondaryText,
                                                            textAlign:
                                                                block.alignments[cellIndex] ??
                                                                'left'
                                                        }
                                                    ]}
                                                >
                                                    {inline(row[cellIndex] ?? [])}
                                                </ThemedText>
                                            )
                                        )}
                                    </View>
                                ))}
                            </View>
                        </ScrollView>
                    );
                }

                return (
                    <ThemedText key={key} selectable style={styles.paragraph}>
                        {inline(block.content)}
                    </ThemedText>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    article: {
        width: '100%',
        gap: Spacing.md
    },
    mobileArticle: {
        gap: Spacing.sm
    },
    heading: {
        fontSize: 27,
        lineHeight: 35,
        paddingTop: Spacing.md
    },
    headingOne: {
        fontSize: 31,
        lineHeight: 40
    },
    headingThree: {
        fontSize: 21,
        lineHeight: 29,
        paddingTop: Spacing.sm
    },
    mobileHeading: {
        fontSize: 23,
        lineHeight: 31
    },
    paragraph: {
        fontSize: 17,
        lineHeight: 29
    },
    bold: {
        fontWeight: '700'
    },
    italic: {
        fontStyle: 'italic'
    },
    link: {
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    },
    inlineCode: {
        fontFamily: Fonts.mono,
        fontSize: 15,
        lineHeight: 24,
        borderRadius: 4
    },
    list: {
        gap: Spacing.xs,
        paddingLeft: Spacing.xxs
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: Spacing.xs
    },
    marker: {
        minWidth: 24,
        fontSize: 17,
        lineHeight: 27,
        fontVariant: ['tabular-nums'],
        textAlign: 'right'
    },
    listText: {
        flex: 1,
        fontSize: 17,
        lineHeight: 27
    },
    quote: {
        borderLeftWidth: 4,
        borderRadius: 10,
        borderCurve: 'continuous',
        padding: Spacing.md
    },
    quoteText: {
        fontSize: 18,
        lineHeight: 29,
        fontStyle: 'italic'
    },
    codeBlock: {
        borderWidth: 1,
        borderRadius: 12,
        borderCurve: 'continuous',
        overflow: 'hidden'
    },
    codeLanguage: {
        paddingTop: Spacing.xs,
        paddingHorizontal: Spacing.sm,
        fontFamily: Fonts.mono,
        fontSize: 11,
        lineHeight: 16,
        fontWeight: '700'
    },
    codeContent: {
        padding: Spacing.sm
    },
    codeText: {
        fontFamily: Fonts.mono,
        fontSize: 14,
        lineHeight: 22
    },
    divider: {
        width: '100%',
        height: 1,
        marginVertical: Spacing.sm
    },
    tableScroll: {
        paddingBottom: Spacing.xxs
    },
    table: {
        overflow: 'hidden',
        borderWidth: 1,
        borderRadius: 12,
        borderCurve: 'continuous'
    },
    tableRow: {
        flexDirection: 'row'
    },
    tableCell: {
        flex: 1,
        minWidth: 150,
        padding: Spacing.xs,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        fontSize: 15,
        lineHeight: 22
    },
    tableHeader: {
        fontWeight: '700'
    }
});
