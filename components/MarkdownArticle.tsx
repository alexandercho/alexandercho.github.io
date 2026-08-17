import { Fragment, type ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/StandardComponents/ThemedText';
import { Spacing } from '@/constants/spacing';
import { useThemeColor } from '@/hooks/useThemeColor';
import { parseMarkdown, type MarkdownInline } from '@/utils/markdown';

function renderInline(content: MarkdownInline[], linkColor: string): ReactNode[] {
    return content.map((part, index) => {
        const key = `${part.text}-${index}`;

        if (part.type === 'link') {
            return (
                <ThemedText key={key} style={{ color: linkColor, textDecorationLine: 'underline' }}>
                    {part.text}
                </ThemedText>
            );
        }

        if (part.type === 'bold') {
            return <ThemedText key={key} type='defaultSemiBold'>{part.text}</ThemedText>;
        }

        if (part.type === 'italic') {
            return <ThemedText key={key} style={styles.italic}>{part.text}</ThemedText>;
        }

        return <Fragment key={key}>{part.text}</Fragment>;
    });
}

export function MarkdownArticle({ markdown }: { markdown: string }) {
    const tintColor = useThemeColor({}, 'tint');
    const borderColor = useThemeColor({}, 'subtleBorder');
    const blocks = parseMarkdown(markdown);

    return (
        <View style={styles.article}>
            {blocks.map((block, index) => {
                const key = `${index}-${block.type}`;

                if (block.type === 'title') {
                    return null;
                }

                if (block.type === 'heading') {
                    return <ThemedText key={key} type='title' style={styles.heading}>{block.text}</ThemedText>;
                }

                if (block.type === 'list') {
                    return (
                        <View key={key} style={styles.list}>
                            {block.items.map((item, itemIndex) => (
                                <View key={`${key}-${itemIndex}`} style={styles.listItem}>
                                    <ThemedText style={{ color: tintColor }}>•</ThemedText>
                                    <ThemedText selectable style={styles.listText}>
                                        {renderInline(item, tintColor)}
                                    </ThemedText>
                                </View>
                            ))}
                        </View>
                    );
                }

                if (block.type === 'quote') {
                    return (
                        <View key={key} style={[styles.quote, { borderLeftColor: tintColor, backgroundColor: borderColor }]}>
                            <ThemedText selectable style={styles.quoteText}>
                                {renderInline(block.content, tintColor)}
                            </ThemedText>
                        </View>
                    );
                }

                return (
                    <ThemedText key={key} selectable style={styles.paragraph}>
                        {renderInline(block.content, tintColor)}
                    </ThemedText>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    article: {
        gap: Spacing.md
    },
    heading: {
        fontSize: 26,
        lineHeight: 34,
        paddingTop: Spacing.sm
    },
    paragraph: {
        fontSize: 17,
        lineHeight: 29
    },
    italic: {
        fontStyle: 'italic'
    },
    list: {
        gap: Spacing.xs
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: Spacing.xs
    },
    listText: {
        flex: 1,
        fontSize: 17,
        lineHeight: 27
    },
    quote: {
        borderLeftWidth: 4,
        borderRadius: 8,
        padding: Spacing.md
    },
    quoteText: {
        fontSize: 17,
        lineHeight: 27,
        fontStyle: 'italic'
    }
});
