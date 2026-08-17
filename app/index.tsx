import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

import { AnimatedEntrance } from '@/components/AnimatedEntrance';
import Banner from '@/components/Banner';
import { BentoCard } from '@/components/BentoCard';
import { HoverPressable } from '@/components/HoverPressable';
import { PageContainer } from '@/components/PageContainer';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/StandardComponents/ThemedText';
import { Spacing } from '@/constants/spacing';
import { useCutoffs } from '@/hooks/useCutoffs';
import { useThemeColor } from '@/hooks/useThemeColor';

const routeCards = [
    {
        href: '/about' as const,
        icon: 'user' as const,
        eyebrow: '01 / PROFILE',
        title: 'Engineer with a product mindset',
        copy: 'I build thoughtful systems across web, mobile, cloud, and AI-enabled experiences.',
        action: 'Read my story'
    },
    {
        href: '/projects' as const,
        icon: 'briefcase' as const,
        eyebrow: '02 / WORK',
        title: 'Projects built to be used',
        copy: 'Explore recent repositories, experiments, and public work, ordered by what I touched most recently.',
        action: 'Browse projects'
    },
    {
        href: '/contact' as const,
        icon: 'send' as const,
        eyebrow: '03 / CONNECT',
        title: 'Let’s make something useful',
        copy: 'I’m always glad to talk through interesting products, engineering challenges, and new ideas.',
        action: 'Start a conversation'
    }
];

export default function HomeScreen() {
    const router = useRouter();
    const { isMobile, isTablet } = useCutoffs();
    const tintColor = useThemeColor({}, 'tint');
    const accentSoft = useThemeColor({}, 'accentSoft');
    const isCompact = isMobile || isTablet;

    return (
        <ParallaxScrollView headerImage={<Banner />}>
            <PageContainer style={styles.page}>
                <AnimatedEntrance>
                    <View style={styles.intro}>
                        <ThemedText type='title' style={styles.title}>
                            Software built with clarity, curiosity, and care.
                        </ThemedText>
                        <ThemedText style={styles.introCopy}>
                            I’m Alex, a full-stack software engineer in the San Francisco Bay Area
                            focused on polished multi-platform products, durable systems, and
                            practical AI.
                        </ThemedText>
                    </View>
                </AnimatedEntrance>

                <View style={[styles.grid, isCompact && styles.compactGrid]}>
                    <AnimatedEntrance delay={80} style={styles.featureSlot}>
                        <BentoCard style={styles.featureCard}>
                            <View style={styles.featureContent}>
                                <View style={styles.featureHeader}>
                                    <View style={[styles.iconBadge, { backgroundColor: accentSoft }]}>
                                        <Feather name='layers' size={22} color={tintColor} />
                                    </View>
                                    <View style={styles.featureHeading}>
                                        <ThemedText type='defaultSemiBold' style={styles.eyebrow}>
                                            CURRENT FOCUS
                                        </ThemedText>
                                        <ThemedText type='subtitle'>Multi-platform product engineering</ThemedText>
                                    </View>
                                </View>

                                <View style={styles.featureBody}>
                                    <ThemedText
                                        type='title'
                                        style={styles.featureTitle}
                                    >
                                        Useful software should feel considered everywhere.
                                    </ThemedText>
                                    <ThemedText style={styles.featureCopy}>
                                        I work across interface, architecture, and delivery to make
                                        products coherent from the first interaction through the
                                        systems supporting it.
                                    </ThemedText>
                                </View>

                                <View style={styles.focusGrid}>
                                    {[
                                        ['monitor', 'Web & mobile', 'One product language across screens.'],
                                        ['cloud', 'Platform systems', 'Durable services, tooling, and delivery.'],
                                        ['cpu', 'Applied AI', 'Practical intelligence with a clear purpose.']
                                    ].map(([icon, title, copy]) => (
                                        <View key={title} style={styles.focusItem}>
                                            <Feather
                                                name={icon as keyof typeof Feather.glyphMap}
                                                size={18}
                                                color={tintColor}
                                            />
                                            <View style={styles.focusItemText}>
                                                <ThemedText type='defaultSemiBold'>{title}</ThemedText>
                                                <ThemedText style={styles.focusItemCopy}>{copy}</ThemedText>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </BentoCard>
                    </AnimatedEntrance>

                    <View style={styles.routeColumn}>
                        {routeCards.map((card, index) => (
                            <AnimatedEntrance key={card.href} delay={140 + index * 70}>
                                <HoverPressable
                                    accessibilityRole='link'
                                    containerStyle={styles.clickableCard}
                                    onPress={() => router.push(card.href)}
                                >
                                    <BentoCard style={styles.routeCard}>
                                        <View style={styles.routeHeader}>
                                            <View style={[styles.routeIcon, { backgroundColor: `${tintColor}18` }]}>
                                                <Feather name={card.icon} size={20} color={tintColor} />
                                            </View>
                                            <ThemedText type='defaultSemiBold' style={styles.eyebrow}>
                                                {card.eyebrow}
                                            </ThemedText>
                                        </View>
                                        <ThemedText type='subtitle'>{card.title}</ThemedText>
                                        <ThemedText style={styles.cardCopy}>{card.copy}</ThemedText>
                                        <View style={styles.action}>
                                            <ThemedText type='link' style={styles.actionText}>
                                                {card.action}
                                            </ThemedText>
                                            <Feather name='arrow-up-right' size={18} color={tintColor} />
                                        </View>
                                    </BentoCard>
                                </HoverPressable>
                            </AnimatedEntrance>
                        ))}
                    </View>
                </View>
            </PageContainer>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        paddingTop: Spacing.md
    },
    intro: {
        maxWidth: 820,
        gap: Spacing.xs
    },
    title: {
        fontSize: 38,
        lineHeight: 46,
        maxWidth: 760
    },
    introCopy: {
        fontSize: 18,
        lineHeight: 28,
        maxWidth: 720
    },
    grid: {
        flexDirection: 'row',
        alignItems: 'stretch',
        gap: Spacing.md
    },
    compactGrid: {
        flexDirection: 'column'
    },
    featureSlot: {
        flex: 1.15
    },
    featureCard: {
        minHeight: 520,
        padding: Spacing.lg
    },
    featureContent: {
        flex: 1,
        gap: Spacing.lg
    },
    featureHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.sm
    },
    featureHeading: {
        flex: 1,
        gap: Spacing.xxxs
    },
    iconBadge: {
        width: 48,
        height: 48,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    featureBody: {
        gap: Spacing.sm
    },
    eyebrow: {
        fontSize: 12,
        lineHeight: 16,
        opacity: 0.76
    },
    featureTitle: {
        fontSize: 29,
        lineHeight: 36,
        maxWidth: 500
    },
    featureCopy: {
        fontSize: 16,
        lineHeight: 25,
        maxWidth: 500
    },
    focusGrid: {
        gap: Spacing.xs,
        paddingTop: Spacing.sm,
        borderTopWidth: 1,
        borderTopColor: 'rgba(128, 145, 175, 0.24)'
    },
    focusItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: Spacing.xs,
        paddingVertical: Spacing.xxs
    },
    focusItemText: {
        flex: 1,
        gap: 2
    },
    focusItemCopy: {
        fontSize: 14,
        lineHeight: 20
    },
    routeColumn: {
        flex: 1,
        gap: Spacing.md
    },
    clickableCard: {
        borderRadius: 18
    },
    routeCard: {
        minHeight: 157
    },
    routeHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.xs
    },
    routeIcon: {
        width: 36,
        height: 36,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardCopy: {
        lineHeight: 22
    },
    action: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.xxs,
        paddingTop: Spacing.xxs
    },
    actionText: {
        fontWeight: '600'
    }
});
