import { Image, Linking, ScrollView, StyleSheet, View } from 'react-native';
import { Asset } from 'expo-asset';
import { Feather } from '@expo/vector-icons';

import { AnimatedEntrance } from '@/components/AnimatedEntrance';
import { BentoCard } from '@/components/BentoCard';
import { HoverPressable } from '@/components/HoverPressable';
import { PageContainer } from '@/components/PageContainer';
import { ThemedText } from '@/components/StandardComponents/ThemedText';
import { data } from '@/constants/AboutData';
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
    return (
        <BentoCard>
            <ThemedText type='defaultSemiBold' style={styles.eyebrow}>TOOLKIT</ThemedText>
            <ThemedText type='title' style={styles.cardTitle}>Tools I reach for</ThemedText>
            <View style={styles.skillGrid}>
                {section.categories!.map((category) => (
                    <View key={category.title} style={styles.skill}>
                        <ThemedText type='defaultSemiBold'>{category.title}</ThemedText>
                        <ThemedText style={styles.detailText}>{category.items}</ThemedText>
                    </View>
                ))}
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
        flex: 1.35,
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
    skillGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.sm
    },
    skill: {
        minWidth: 210,
        flex: 1,
        gap: Spacing.xxxs
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
