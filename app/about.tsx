import { useState } from 'react';
import { Image, Linking, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Asset } from 'expo-asset';
import { Feather } from '@expo/vector-icons';

import { AnimatedEntrance } from '@/components/AnimatedEntrance';
import { BentoCard } from '@/components/BentoCard';
import { HoverPressable } from '@/components/HoverPressable';
import { PageContainer } from '@/components/PageContainer';
import { ThemedText } from '@/components/StandardComponents/ThemedText';
import { data, type ToolkitCategory } from '@/constants/AboutData';
import { Spacing } from '@/constants/spacing';
import { useCutoffs } from '@/hooks/useCutoffs';
import { useThemeColor } from '@/hooks/useThemeColor';

const resumeUri = Asset.fromModule(require('@/assets/alexander_cho_resume.pdf')).uri;
const resumeHref = resumeUri.startsWith('/') || resumeUri.includes('://')
    ? resumeUri
    : `/${resumeUri.replace(/^\.\//, '')}`;

function EducationCard({ section }: { section: (typeof data)[0] }) {
    return (
        <BentoCard style={styles.tallCard}>
            <ThemedText type='defaultSemiBold' style={styles.eyebrow}>EDUCATION</ThemedText>
            <ThemedText type='title' style={styles.cardTitle}>{section.subtitle}</ThemedText>
            <ThemedText type='defaultSemiBold'>{section.degree}</ThemedText>
            <ThemedText style={styles.muted}>{section.certification}</ThemedText>
            <View style={styles.list}>
                {section.coursework!.map((item) => (
                    <View key={item.category} style={styles.listItem}>
                        <ThemedText type='defaultSemiBold'>{item.category}</ThemedText>
                        <ThemedText style={styles.detailText}>{item.courses}</ThemedText>
                    </View>
                ))}
            </View>
        </BentoCard>
    );
}

function ExperienceCard({ section }: { section: (typeof data)[1] }) {
    return (
        <BentoCard>
            <ThemedText type='defaultSemiBold' style={styles.eyebrow}>EXPERIENCE</ThemedText>
            <ThemedText type='title' style={styles.cardTitle}>Building products at scale</ThemedText>
            <View style={styles.timeline}>
                {section.positions!.map((position) => (
                    <View key={`${position.company}-${position.period}`} style={styles.timelineItem}>
                        <View style={styles.timelineHeading}>
                            <View style={styles.timelineTitle}>
                                <ThemedText type='subtitle'>{position.title}</ThemedText>
                                <ThemedText type='defaultSemiBold'>{position.company}</ThemedText>
                            </View>
                            <ThemedText style={styles.period}>{position.period}</ThemedText>
                        </View>
                        <ThemedText style={styles.detailText}>{position.description}</ThemedText>
                        {position.highlights.length ? (
                            <View style={styles.highlights}>
                                {position.highlights.map((highlight) => (
                                    <View key={highlight} style={styles.highlight}>
                                        <ThemedText style={styles.bullet}>•</ThemedText>
                                        <ThemedText style={[styles.detailText, styles.highlightText]}>
                                            {highlight}
                                        </ThemedText>
                                    </View>
                                ))}
                            </View>
                        ) : null}
                    </View>
                ))}
            </View>
        </BentoCard>
    );
}

function ToolkitCard({ section }: { section: (typeof data)[2] }) {
    const categories = section.categories as ToolkitCategory[];
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [activeTechnologyIndex, setActiveTechnologyIndex] = useState(0);
    const tintColor = useThemeColor({}, 'tint');
    const borderColor = useThemeColor({}, 'subtleBorder');
    const selectedBackground = useThemeColor({}, 'highlight');
    const idleBackground = useThemeColor({}, 'elevatedSurface');
    const detailBackground = useThemeColor({}, 'surface');
    const activeCategory = categories[activeCategoryIndex] ?? categories[0];
    const activeTechnology =
        activeCategory.technologies[activeTechnologyIndex] ?? activeCategory.technologies[0];

    const selectCategory = (index: number) => {
        setActiveCategoryIndex(index);
        setActiveTechnologyIndex(0);
    };

    return (
        <BentoCard style={styles.toolkitCard}>
            <View style={styles.toolkitHeading}>
                <View style={styles.toolkitTitleGroup}>
                    <ThemedText type='defaultSemiBold' style={styles.eyebrow}>TOOLKIT</ThemedText>
                    <ThemedText type='title' style={styles.cardTitle}>Tools, with context</ThemedText>
                </View>
                <ThemedText style={[styles.detailText, styles.toolkitIntro]}>
                    The systems I have operated, migrated, evaluated, and learned well enough to
                    have an opinion about.
                </ThemedText>
            </View>

            <View accessibilityRole='tablist' style={styles.categoryTabs}>
                {categories.map((category, index) => {
                    const selected = index === activeCategoryIndex;

                    return (
                        <Pressable
                            accessibilityRole='tab'
                            accessibilityState={{ selected }}
                            key={category.title}
                            onPress={() => selectCategory(index)}
                            style={({ pressed }) => [
                                styles.categoryTab,
                                {
                                    backgroundColor: selected ? selectedBackground : idleBackground,
                                    borderColor: selected ? tintColor : borderColor,
                                    opacity: pressed ? 0.72 : 1
                                }
                            ]}
                        >
                            <Feather
                                color={selected ? tintColor : undefined}
                                name={category.icon as keyof typeof Feather.glyphMap}
                                size={15}
                            />
                            <ThemedText
                                type='defaultSemiBold'
                                style={[styles.categoryTabText, selected && { color: tintColor }]}
                            >
                                {category.title}
                            </ThemedText>
                        </Pressable>
                    );
                })}
            </View>

            <View style={styles.technologySection}>
                <View style={styles.technologyHeader}>
                    <ThemedText type='subtitle'>{activeCategory.title}</ThemedText>
                    <ThemedText style={styles.interactionHint}>
                        Hover, focus, or tap for experience
                    </ThemedText>
                </View>

                <View style={styles.technologyGrid}>
                    {activeCategory.technologies.map((technology, index) => {
                        const selected = index === activeTechnologyIndex;

                        return (
                            <Pressable
                                accessibilityHint={technology.detail}
                                accessibilityRole='button'
                                accessibilityState={{ selected }}
                                key={technology.name}
                                onFocus={() => setActiveTechnologyIndex(index)}
                                onHoverIn={() => setActiveTechnologyIndex(index)}
                                onPress={() => setActiveTechnologyIndex(index)}
                                style={({ pressed }) => [
                                    styles.technologyChip,
                                    {
                                        backgroundColor: selected
                                            ? selectedBackground
                                            : idleBackground,
                                        borderColor: selected ? tintColor : borderColor,
                                        opacity: pressed ? 0.74 : 1
                                    }
                                ]}
                            >
                                <View
                                    style={[
                                        styles.technologyDot,
                                        { backgroundColor: selected ? tintColor : borderColor }
                                    ]}
                                />
                                <ThemedText
                                    type='defaultSemiBold'
                                    style={[styles.technologyName, selected && { color: tintColor }]}
                                >
                                    {technology.name}
                                </ThemedText>
                            </Pressable>
                        );
                    })}
                </View>

                <View
                    accessibilityLiveRegion='polite'
                    style={[
                        styles.technologyDetail,
                        { backgroundColor: detailBackground, borderColor }
                    ]}
                >
                    <View style={styles.technologyDetailHeading}>
                        <ThemedText type='subtitle'>{activeTechnology.name}</ThemedText>
                        <View
                            style={[
                                styles.experienceBadge,
                                { backgroundColor: selectedBackground }
                            ]}
                        >
                            <ThemedText
                                type='defaultSemiBold'
                                style={[styles.experienceBadgeText, { color: tintColor }]}
                            >
                                {activeTechnology.context}
                            </ThemedText>
                        </View>
                    </View>
                    <ThemedText style={styles.detailText}>{activeTechnology.detail}</ThemedText>
                </View>
            </View>
        </BentoCard>
    );
}

export default function About() {
    const { isMobile, isTablet } = useCutoffs();
    const tintColor = useThemeColor({}, 'tint');
    const compact = isMobile || isTablet;
    const education = data[0];
    const experience = data[1];
    const toolkit = data[2];
    const personal = data[3];

    return (
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <PageContainer>
                <AnimatedEntrance>
                    <View style={styles.header}>
                        <ThemedText type='defaultSemiBold' style={[styles.eyebrow, { color: tintColor }]}>
                            ABOUT
                        </ThemedText>
                        <ThemedText type='title' style={styles.pageTitle}>
                            Full-stack engineer. Systems thinker. Persistent learner.
                        </ThemedText>
                        <ThemedText style={styles.lede}>
                            I care about the complete shape of a product, from architecture and
                            delivery to the small interface decisions people feel every day.
                        </ThemedText>
                    </View>
                </AnimatedEntrance>

                <View style={[styles.grid, compact && styles.compactGrid]}>
                    <AnimatedEntrance
                        delay={80}
                        style={[styles.educationSlot, compact && styles.compactSlot]}
                    >
                        <EducationCard section={education} />
                    </AnimatedEntrance>
                    <AnimatedEntrance
                        delay={140}
                        style={[styles.experienceSlot, compact && styles.compactSlot]}
                    >
                        <ExperienceCard section={experience} />
                    </AnimatedEntrance>
                </View>

                <View style={[styles.grid, compact && styles.compactGrid]}>
                    <AnimatedEntrance
                        delay={200}
                        style={[styles.toolkitSlot, compact && styles.compactSlot]}
                    >
                        <ToolkitCard section={toolkit} />
                    </AnimatedEntrance>
                    <View style={[styles.sideColumn, compact && styles.compactSlot]}>
                        <AnimatedEntrance delay={260}>
                            <BentoCard>
                                <Image source={{ uri: personal.image }} style={styles.personalImage} />
                                <ThemedText type='defaultSemiBold' style={styles.eyebrow}>
                                    AWAY FROM THE KEYBOARD
                                </ThemedText>
                                <ThemedText style={styles.detailText}>{personal.text}</ThemedText>
                            </BentoCard>
                        </AnimatedEntrance>
                        <AnimatedEntrance delay={320}>
                            <BentoCard>
                                <View style={styles.resumeIcon}>
                                    <Feather name='file-text' size={24} color={tintColor} />
                                </View>
                                <ThemedText type='subtitle'>The concise version</ThemedText>
                                <ThemedText style={styles.detailText}>
                                    Download my resume for a focused view of my experience,
                                    projects, and technical background.
                                </ThemedText>
                                <HoverPressable
                                    accessibilityRole='link'
                                    containerStyle={styles.resumeLinkContainer}
                                    lift={2}
                                    onPress={() => Linking.openURL(resumeHref)}
                                    style={styles.resumeLink}
                                >
                                    <ThemedText type='link'>Download resume PDF</ThemedText>
                                    <Feather name='download' size={17} color={tintColor} />
                                </HoverPressable>
                            </BentoCard>
                        </AnimatedEntrance>
                    </View>
                </View>
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
        lineHeight: 16,
        opacity: 0.72
    },
    pageTitle: {
        fontSize: 38,
        lineHeight: 46
    },
    lede: {
        maxWidth: 720,
        fontSize: 18,
        lineHeight: 28
    },
    grid: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: Spacing.md
    },
    compactGrid: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    compactSlot: {
        width: '100%',
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto'
    },
    educationSlot: {
        flex: 0.85,
        width: '100%'
    },
    experienceSlot: {
        flex: 1.5,
        width: '100%'
    },
    toolkitSlot: {
        flex: 1.5,
        width: '100%'
    },
    sideColumn: {
        flex: 0.85,
        width: '100%',
        gap: Spacing.md
    },
    tallCard: {
        minHeight: 520
    },
    cardTitle: {
        fontSize: 27,
        lineHeight: 34
    },
    muted: {
        opacity: 0.72,
        fontStyle: 'italic'
    },
    list: {
        gap: Spacing.sm
    },
    listItem: {
        gap: Spacing.xxxs
    },
    detailText: {
        lineHeight: 22
    },
    timeline: {
        gap: Spacing.md
    },
    timelineItem: {
        gap: Spacing.xs,
        paddingBottom: Spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(128, 145, 175, 0.24)'
    },
    timelineHeading: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: Spacing.xs
    },
    timelineTitle: {
        flex: 1,
        minWidth: 220
    },
    period: {
        fontVariant: ['tabular-nums'],
        opacity: 0.72
    },
    highlights: {
        gap: Spacing.xxs
    },
    highlight: {
        flexDirection: 'row'
    },
    bullet: {
        width: Spacing.sm
    },
    highlightText: {
        flex: 1
    },
    toolkitCard: {
        minHeight: 590
    },
    toolkitHeading: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: Spacing.sm
    },
    toolkitTitleGroup: {
        gap: Spacing.xs
    },
    toolkitIntro: {
        maxWidth: 430,
        flexShrink: 1,
        opacity: 0.78
    },
    categoryTabs: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.xxs
    },
    categoryTab: {
        minHeight: 38,
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.xxs,
        borderWidth: 1,
        borderRadius: 999,
        paddingHorizontal: Spacing.xs,
        paddingVertical: Spacing.xxs,
        cursor: 'pointer'
    },
    categoryTabText: {
        fontSize: 13,
        lineHeight: 18
    },
    technologySection: {
        gap: Spacing.sm
    },
    technologyHeader: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: Spacing.xs
    },
    interactionHint: {
        fontSize: 12,
        opacity: 0.62
    },
    technologyGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.xxs
    },
    technologyChip: {
        minHeight: 36,
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.xxs,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: Spacing.xs,
        paddingVertical: Spacing.xxs,
        cursor: 'pointer'
    },
    technologyDot: {
        width: 6,
        height: 6,
        borderRadius: 3
    },
    technologyName: {
        fontSize: 13,
        lineHeight: 18
    },
    technologyDetail: {
        minHeight: 124,
        gap: Spacing.xs,
        borderWidth: 1,
        borderRadius: 14,
        padding: Spacing.sm
    },
    technologyDetailHeading: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: Spacing.xs
    },
    experienceBadge: {
        borderRadius: 999,
        paddingHorizontal: Spacing.xs,
        paddingVertical: Spacing.xxxs
    },
    experienceBadgeText: {
        fontSize: 11,
        lineHeight: 15,
        textTransform: 'uppercase',
        letterSpacing: 0.45
    },
    personalImage: {
        width: '100%',
        height: 180,
        borderRadius: 6
    },
    resumeIcon: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center'
    },
    resumeLink: {
        paddingVertical: Spacing.xxs,
        paddingHorizontal: Spacing.xs,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        gap: Spacing.xxs,
        borderRadius: 8
    },
    resumeLinkContainer: {
        alignSelf: 'flex-start',
        borderRadius: 8
    }
});
