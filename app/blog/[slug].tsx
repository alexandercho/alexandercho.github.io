import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

import { AnimatedEntrance } from '@/components/AnimatedEntrance';
import { BentoCard } from '@/components/BentoCard';
import { HoverPressable } from '@/components/HoverPressable';
import { MarkdownArticle } from '@/components/MarkdownArticle';
import { PageContainer } from '@/components/PageContainer';
import { ThemedText } from '@/components/StandardComponents/ThemedText';
import { Spacing } from '@/constants/spacing';
import { useThemeColor } from '@/hooks/useThemeColor';
import {
    BLOG_POST_SLUGS,
    loadBlogPost,
    type BlogPost
} from '@/utils/blog';

export function generateStaticParams() {
    return BLOG_POST_SLUGS.map((slug) => ({ slug }));
}

export default function BlogArticle() {
    const { slug } = useLocalSearchParams<{ slug: string }>();
    const router = useRouter();
    const tintColor = useThemeColor({}, 'tint');
    const [post, setPost] = useState<BlogPost | null>();

    useEffect(() => {
        if (slug) {
            loadBlogPost(slug).then(setPost).catch(() => setPost(null));
        }
    }, [slug]);

    if (post === undefined) {
        return (
            <ScrollView contentInsetAdjustmentBehavior='automatic'>
                <PageContainer>
                    <ThemedText>Loading article…</ThemedText>
                </PageContainer>
            </ScrollView>
        );
    }

    if (!post) {
        return (
            <ScrollView contentInsetAdjustmentBehavior='automatic'>
                <PageContainer>
                    <BentoCard>
                        <ThemedText type='title'>Article not found</ThemedText>
                        <ThemedText>This blog post does not exist.</ThemedText>
                        <HoverPressable lift={2} onPress={() => router.replace('/blog')}>
                            <ThemedText type='link'>Return to the blog</ThemedText>
                        </HoverPressable>
                    </BentoCard>
                </PageContainer>
            </ScrollView>
        );
    }

    return (
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <PageContainer style={styles.page}>
                <AnimatedEntrance>
                    <HoverPressable
                        containerStyle={styles.backContainer}
                        lift={2}
                        onPress={() => router.push('/blog')}
                        style={styles.back}
                    >
                        <Feather name='arrow-left' size={18} color={tintColor} />
                        <ThemedText type='link'>All posts</ThemedText>
                    </HoverPressable>
                </AnimatedEntrance>

                <AnimatedEntrance delay={70}>
                    <View style={styles.header}>
                        <View style={styles.meta}>
                            <ThemedText type='defaultSemiBold' style={{ color: tintColor }}>
                                ARTICLE {post.slug.padStart(2, '0')}
                            </ThemedText>
                            <ThemedText style={styles.metaText}>
                                {post.readingMinutes} min read
                            </ThemedText>
                        </View>
                        <ThemedText type='title' style={styles.title}>{post.title}</ThemedText>
                    </View>
                </AnimatedEntrance>

                <AnimatedEntrance delay={140}>
                    <BentoCard style={styles.articleCard}>
                        <MarkdownArticle markdown={post.markdown} />
                    </BentoCard>
                </AnimatedEntrance>
            </PageContainer>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        maxWidth: 900
    },
    backContainer: {
        alignSelf: 'flex-start',
        borderRadius: 8
    },
    back: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.xxs,
        paddingVertical: Spacing.xxs,
        paddingHorizontal: Spacing.xs,
        borderRadius: 8
    },
    header: {
        gap: Spacing.sm,
        paddingVertical: Spacing.sm
    },
    meta: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.sm
    },
    metaText: {
        fontSize: 14,
        fontVariant: ['tabular-nums']
    },
    title: {
        fontSize: 42,
        lineHeight: 50
    },
    articleCard: {
        padding: Spacing.lg
    }
});
