import { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

import { AnimatedEntrance } from '@/components/AnimatedEntrance';
import { BentoCard } from '@/components/BentoCard';
import { HoverPressable } from '@/components/HoverPressable';
import { PageContainer } from '@/components/PageContainer';
import { ThemedText } from '@/components/StandardComponents/ThemedText';
import { Spacing } from '@/constants/spacing';
import { useCutoffs } from '@/hooks/useCutoffs';
import { useThemeColor } from '@/hooks/useThemeColor';
import { loadBlogPosts, type BlogPost } from '@/utils/blog';

export default function BlogIndex() {
    const router = useRouter();
    const { isMobile } = useCutoffs();
    const tintColor = useThemeColor({}, 'tint');
    const accentSoft = useThemeColor({}, 'accentSoft');
    const surfaceColor = useThemeColor({}, 'surface');
    const borderColor = useThemeColor({}, 'subtleBorder');
    const primaryText = useThemeColor({}, 'primaryText');
    const secondaryText = useThemeColor({}, 'secondaryText');
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('');
    const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

    useEffect(() => {
        loadBlogPosts()
            .then(setBlogPosts)
            .catch(() => setError('The blog posts could not be loaded.'))
            .finally(() => setIsLoading(false));
    }, []);

    const visiblePosts = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();
        const filtered = normalizedQuery
            ? blogPosts.filter((post) => (
                post.title.toLowerCase().includes(normalizedQuery) ||
                post.excerpt.toLowerCase().includes(normalizedQuery) ||
                post.markdown.toLowerCase().includes(normalizedQuery)
            ))
            : blogPosts;

        return [...filtered].sort((a, b) => (
            sortOrder === 'newest'
                ? Number(b.slug) - Number(a.slug)
                : Number(a.slug) - Number(b.slug)
        ));
    }, [blogPosts, query, sortOrder]);

    return (
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <PageContainer>
                <AnimatedEntrance>
                    <View style={styles.header}>
                        <ThemedText type='defaultSemiBold' style={[styles.eyebrow, { color: tintColor }]}>
                            BLOG
                        </ThemedText>
                        <ThemedText type='title' style={styles.pageTitle}>
                            Notes from the workbench.
                        </ThemedText>
                        <ThemedText style={styles.lede}>
                            Longer thoughts on software, systems, and the process of making useful things.
                        </ThemedText>
                    </View>
                </AnimatedEntrance>

                <AnimatedEntrance delay={60}>
                    <View style={[styles.controls, isMobile && styles.mobileControls]}>
                        <View
                            style={[
                                styles.search,
                                { backgroundColor: surfaceColor, borderColor }
                            ]}
                        >
                            <Feather name='search' size={20} color={secondaryText} />
                            <TextInput
                                accessibilityLabel='Search blog articles'
                                autoCapitalize='none'
                                autoCorrect={false}
                                onChangeText={setQuery}
                                placeholder='Search articles'
                                placeholderTextColor={secondaryText}
                                returnKeyType='search'
                                style={[styles.searchInput, { color: primaryText }]}
                                value={query}
                            />
                            {query ? (
                                <HoverPressable
                                    accessibilityLabel='Clear search'
                                    lift={1}
                                    onPress={() => setQuery('')}
                                    style={styles.clearButton}
                                >
                                    <Feather name='x' size={18} color={secondaryText} />
                                </HoverPressable>
                            ) : null}
                        </View>

                        <View
                            accessibilityRole='radiogroup'
                            style={[
                                styles.sortControl,
                                { backgroundColor: surfaceColor, borderColor }
                            ]}
                        >
                            {[
                                { value: 'newest' as const, label: 'Newest first' },
                                { value: 'oldest' as const, label: 'Oldest first' }
                            ].map((option) => {
                                const selected = sortOrder === option.value;

                                return (
                                    <HoverPressable
                                        key={option.value}
                                        accessibilityRole='radio'
                                        accessibilityState={{ selected }}
                                        lift={1}
                                        onPress={() => setSortOrder(option.value)}
                                        style={[
                                            styles.sortOption,
                                            selected && { backgroundColor: accentSoft }
                                        ]}
                                    >
                                        <ThemedText
                                            type='defaultSemiBold'
                                            style={[
                                                styles.sortLabel,
                                                selected && { color: tintColor }
                                            ]}
                                        >
                                            {option.label}
                                        </ThemedText>
                                    </HoverPressable>
                                );
                            })}
                        </View>
                    </View>
                    <ThemedText style={styles.resultCount}>
                        {isLoading
                            ? 'Loading articles…'
                            : `${visiblePosts.length} ${visiblePosts.length === 1 ? 'article' : 'articles'}`}
                    </ThemedText>
                </AnimatedEntrance>

                {error ? (
                    <BentoCard>
                        <ThemedText type='subtitle'>Unable to load posts</ThemedText>
                        <ThemedText>{error}</ThemedText>
                    </BentoCard>
                ) : null}

                <View style={[styles.grid, isMobile && styles.mobileGrid]}>
                    {visiblePosts.map((post, index) => (
                        <AnimatedEntrance
                            key={post.slug}
                            delay={80 + index * 70}
                            style={styles.cardSlot}
                        >
                            <HoverPressable
                                accessibilityRole='link'
                                containerStyle={styles.clickableCard}
                                onPress={() => router.push(`/blog/${post.slug}`)}
                            >
                                <BentoCard style={styles.postCard}>
                                    <View style={styles.cardHeader}>
                                        <View style={[styles.postNumber, { backgroundColor: accentSoft }]}>
                                            <ThemedText type='defaultSemiBold' style={{ color: tintColor }}>
                                                {post.slug.padStart(2, '0')}
                                            </ThemedText>
                                        </View>
                                        <View style={styles.readingTime}>
                                            <Feather name='clock' size={15} color={tintColor} />
                                            <ThemedText style={styles.metaText}>
                                                {post.readingMinutes} min read
                                            </ThemedText>
                                        </View>
                                    </View>
                                    <ThemedText type='title' style={styles.postTitle}>
                                        {post.title}
                                    </ThemedText>
                                    <ThemedText style={styles.excerpt}>{post.excerpt}</ThemedText>
                                    <View style={styles.readAction}>
                                        <ThemedText type='link' style={styles.readActionText}>
                                            Read article
                                        </ThemedText>
                                        <Feather name='arrow-up-right' size={18} color={tintColor} />
                                    </View>
                                </BentoCard>
                            </HoverPressable>
                        </AnimatedEntrance>
                    ))}
                </View>

                {!isLoading && !error && visiblePosts.length === 0 ? (
                    <BentoCard>
                        <Feather name='search' size={28} color={tintColor} />
                        <ThemedText type='subtitle'>No matching articles</ThemedText>
                        <ThemedText>
                            Try a different word or clear the search field.
                        </ThemedText>
                    </BentoCard>
                ) : null}
            </PageContainer>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        maxWidth: 820,
        paddingVertical: Spacing.md,
        gap: Spacing.xs
    },
    eyebrow: {
        fontSize: 12,
        lineHeight: 16
    },
    pageTitle: {
        fontSize: 38,
        lineHeight: 46
    },
    lede: {
        maxWidth: 700,
        fontSize: 18,
        lineHeight: 28
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.sm
    },
    mobileControls: {
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    search: {
        flex: 1,
        minHeight: 52,
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.xs,
        paddingHorizontal: Spacing.sm,
        borderWidth: 1,
        borderRadius: 16,
        borderCurve: 'continuous'
    },
    searchInput: {
        flex: 1,
        minWidth: 0,
        paddingVertical: Spacing.xs,
        fontSize: 16
    },
    clearButton: {
        width: 34,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    sortControl: {
        flexDirection: 'row',
        padding: Spacing.xxxs,
        borderWidth: 1,
        borderRadius: 16,
        borderCurve: 'continuous'
    },
    sortOption: {
        minHeight: 42,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: Spacing.sm,
        borderRadius: 12
    },
    sortLabel: {
        fontSize: 13,
        lineHeight: 17
    },
    resultCount: {
        paddingTop: Spacing.xxs,
        fontSize: 14,
        fontVariant: ['tabular-nums']
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.md
    },
    mobileGrid: {
        flexDirection: 'column'
    },
    cardSlot: {
        width: '31%',
        minWidth: 290,
        flexGrow: 1
    },
    clickableCard: {
        borderRadius: 18
    },
    postCard: {
        minHeight: 320
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: Spacing.sm
    },
    postNumber: {
        width: 44,
        height: 44,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    readingTime: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.xxs
    },
    metaText: {
        fontSize: 13
    },
    postTitle: {
        fontSize: 27,
        lineHeight: 34
    },
    excerpt: {
        flex: 1,
        lineHeight: 23
    },
    readAction: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.xxs
    },
    readActionText: {
        fontWeight: '600'
    }
});
