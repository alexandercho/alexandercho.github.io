import { StyleSheet, Image } from 'react-native';
import { Link, type Href } from 'expo-router';
import { Asset } from 'expo-asset';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedScrollView } from '@/components/ThemedScrollView';

import { Spacing } from '@/constants/spacing';

import { useCutoffs } from '@/hooks/useCutoffs';
import { data } from '@/constants/AboutData';
import { useThemeColor } from '@/hooks/useThemeColor';

const normalizeAssetHref = (uri: string) => (
    uri.startsWith('/') || uri.includes('://')
        ? uri
        : `/${uri.replace(/^\.\//, '')}`
);

// Resolve through Expo's asset pipeline so the PDF stays available after web export.
const resumeHref = normalizeAssetHref(
    Asset.fromModule(require('@/assets/alexander_cho_resume.pdf')).uri
);

const EducationSection = ({ data, isMobile }: { data: any; isMobile: boolean }) => (
    <ThemedView style={[styles.sectionContent, isMobile && styles.sectionContentMobile]}>
        <ThemedView style={[styles.textContainer, isMobile && styles.fullWidth]}>
            <ThemedText type="subtitle" style={styles.positionTitle}>
                {data.subtitle}
            </ThemedText>
            <ThemedText type="default" style={styles.degree}>
                {data.degree}
            </ThemedText>
            <ThemedText type="default" style={[styles.certification, { marginBottom: Spacing.sm }]}>
                {data.certification}
            </ThemedText>

            <ThemedText type="defaultSemiBold" style={styles.courseworkHeader}>
                RELEVANT COURSEWORK
            </ThemedText>

            {data.coursework.map((item: any, idx: number) => (
                <ThemedView key={idx} style={styles.courseworkItem}>
                    <ThemedText type="defaultSemiBold" style={styles.courseworkCategory}>
                        {item.category}
                    </ThemedText>
                    <ThemedText type="default" style={styles.courseworkText}>
                        {item.courses}
                    </ThemedText>
                </ThemedView>
            ))}
        </ThemedView>

        {data.image && (
            <ThemedView style={[styles.imageContainer, isMobile && styles.imageContainerMobile]}>
                <Image source={{ uri: data.image }} style={styles.sectionImage} resizeMode="cover" />
            </ThemedView>
        )}
    </ThemedView>
);

const ExperienceSection = ({ data, isMobile }: { data: any; isMobile: boolean }) => (
    <ThemedView style={[styles.sectionContent, isMobile && styles.sectionContentMobile]}>
        <ThemedView style={[styles.textContainer, isMobile && styles.fullWidth]}>
            {data.positions.map((position: any, idx: number) => (
                <ThemedView
                    key={idx}
                    style={[idx > 0 && styles.positionBlockSpacing]}
                >
                    <ThemedView
                        style={[styles.positionRow, isMobile && styles.positionRowMobile]}
                    >
                        <ThemedView style={styles.positionContent}>
                            <ThemedText type="defaultSemiBold" style={styles.positionTitle}>
                                {position.title} – {position.company}
                            </ThemedText>
                            <ThemedText type="default" style={styles.period}>
                                {position.period}
                            </ThemedText>
                            <ThemedText type="default" style={styles.description}>
                                {position.description}
                            </ThemedText>

                            {position.highlights.length > 0 && (
                                <ThemedView style={styles.highlightsContainer}>
                                    {position.highlights.map((highlight: string, hIdx: number) => (
                                        <ThemedView key={hIdx} style={styles.highlightItem}>
                                            <ThemedText type="default" style={styles.bullet}>
                                                •
                                            </ThemedText>
                                            <ThemedText type="default" style={styles.highlightText}>
                                                {highlight}
                                            </ThemedText>
                                        </ThemedView>
                                    ))}
                                </ThemedView>
                            )}
                        </ThemedView>

                        {position.image && (
                            <ThemedView
                                style={[
                                    styles.positionImageContainer,
                                    isMobile && styles.imageContainerMobile
                                ]}
                            >
                                <Image
                                    source={{ uri: position.image }}
                                    style={styles.positionImage}
                                    resizeMode="cover"
                                />
                            </ThemedView>
                        )}
                    </ThemedView>
                </ThemedView>
            ))}
        </ThemedView>
    </ThemedView>
);

const TechSection = ({ data, isMobile }: { data: any; isMobile: boolean }) => (
    <ThemedView style={[styles.sectionContent, isMobile && styles.sectionContentMobile]}>
        <ThemedView style={[styles.textContainer, isMobile && styles.fullWidth]}>
            {data.categories.map((category: any, idx: number) => (
                <ThemedView key={idx} style={styles.techItem}>
                    <ThemedText type="defaultSemiBold" style={styles.techTitle}>
                        {category.title}
                    </ThemedText>
                    <ThemedText type="default" style={styles.techText}>
                        {category.items}
                    </ThemedText>
                </ThemedView>
            ))}
        </ThemedView>

        {data.image && (
            <ThemedView style={[styles.imageContainer, isMobile && styles.imageContainerMobile]}>
                <Image source={{ uri: data.image }} style={styles.sectionImage} resizeMode="cover" />
            </ThemedView>
        )}
    </ThemedView>
);

const PersonalSection = ({ data, isMobile }: { data: any; isMobile: boolean }) => (
    <ThemedView style={[styles.sectionContent, isMobile && styles.sectionContentMobile]}>
        <ThemedView style={[styles.textContainer, isMobile && styles.fullWidth]}>
            <ThemedText type="default" style={styles.sectionText}>
                {data.text}
            </ThemedText>
        </ThemedView>

        {data.image && (
            <ThemedView style={[styles.imageContainer, isMobile && styles.imageContainerMobile]}>
                <Image source={{ uri: data.image }} style={styles.sectionImage} resizeMode="cover" />
            </ThemedView>
        )}
    </ThemedView>
);

const ResumeSection = ({
    isMobile,
    tintColor
}: {
    isMobile: boolean;
    tintColor: string;
}) => (
    <ThemedView style={[styles.sectionContent, isMobile && styles.sectionContentMobile]}>
        <ThemedView style={[styles.textContainer, isMobile && styles.fullWidth]}>
            <ThemedText type="default" style={styles.resumeText}>
                Download a PDF copy of my resume for a fuller look at my experience, projects, and technical background.
            </ThemedText>

            <Link
                href={resumeHref as Href}
                target="_blank"
                download="alexander_cho_resume.pdf"
                style={[styles.resumeLink, { borderColor: tintColor }]}
            >
                <ThemedText type="link" style={styles.resumeLinkText}>
                    Download Resume PDF
                </ThemedText>
            </Link>
        </ThemedView>
    </ThemedView>
);

export default function About() {
    const { isMobile } = useCutoffs();
    const tintColor = useThemeColor({}, 'tint');

    const renderSection = (sectionData: typeof data[number], index: number) => {
        let content;

        if (sectionData.header.includes('Education')) {
            content = <EducationSection data={sectionData} isMobile={isMobile} />;
        } else if (sectionData.header.includes('Professional')) {
            content = <ExperienceSection data={sectionData} isMobile={isMobile} />;
        } else if (sectionData.header.includes('Technical')) {
            content = <TechSection data={sectionData} isMobile={isMobile} />;
        } else {
            content = <PersonalSection data={sectionData} isMobile={isMobile} />;
        }

        return (
            <ThemedView key={index} style={[styles.section, { borderLeftColor: tintColor }]}>
                <ThemedView style={styles.sectionHeader}>
                    <ThemedText type="title">{sectionData.header}</ThemedText>
                </ThemedView>
                {content}
            </ThemedView>
        );
    };

    return (
        <ThemedScrollView style={styles.scrollContainer}>
            <ThemedView style={styles.container}>
                <ThemedView style={styles.hero}>
                    <ThemedText type="title" style={styles.mainTitle}>
                        About Me
                    </ThemedText>
                    <ThemedText type="default" style={styles.subtitle}>
                        Full-stack engineer passionate about building elegant, scalable solutions
                    </ThemedText>
                </ThemedView>

                <ThemedView style={[styles.content, { maxWidth: isMobile ? '100%' : 1100 }]}>
                    {data.map(renderSection)}

                    <ThemedView style={[styles.section, { borderLeftColor: tintColor }]}>
                        <ThemedView style={styles.sectionHeader}>
                            <ThemedText type="title">Resume</ThemedText>
                        </ThemedView>
                        <ResumeSection isMobile={isMobile} tintColor={tintColor} />
                    </ThemedView>
                </ThemedView>
            </ThemedView>
        </ThemedScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: { flex: 1 },
    container: { flex: 1 },
    hero: {
        paddingVertical: Spacing.xl,
        paddingHorizontal: Spacing.md,
        alignItems: 'center'
    },
    mainTitle: {
        marginBottom: Spacing.xs,
        textAlign: 'center'
    },
    subtitle: {
        opacity: 0.7,
        textAlign: 'center',
        maxWidth: 600
    },
    content: {
        paddingHorizontal: Spacing.md,
        alignSelf: 'center',
        width: '100%'
    },
    section: {
        marginBottom: Spacing.lg,
        borderRadius: Spacing.xs,
        padding: Spacing.md,
        borderLeftWidth: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2
    },
    sectionHeader: {
        marginBottom: Spacing.md
    },
    sectionContent: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    sectionContentMobile: {
        flexDirection: 'column'
    },
    textContainer: {
        flex: 1
    },
    fullWidth: {
        width: '100%'
    },
    imageContainer: {
        width: 280,
        flexShrink: 0,
        marginLeft: Spacing.md
    },
    imageContainerMobile: {
        width: '100%',
        marginLeft: Spacing.none,
        marginTop: Spacing.md
    },
    sectionImage: {
        width: '100%',
        height: 200,
        borderRadius: Spacing.xxs
    },
    sectionText: {
        opacity: 0.9,
        lineHeight: 24
    },
    degree: {
        opacity: 0.9,
        marginBottom: Spacing.xxxs
    },
    certification: {
        opacity: 0.85,
        fontStyle: 'italic'
    },
    courseworkHeader: {
        marginTop: Spacing.xxxs,
        marginBottom: Spacing.xs,
        opacity: 0.7,
        fontSize: 12,
        letterSpacing: 0.5
    },
    courseworkItem: {
        marginBottom: Spacing.xs
    },
    courseworkCategory: {
        marginBottom: Spacing.xxxs
    },
    courseworkText: {
        opacity: 0.8,
        lineHeight: 20
    },
    positionBlockSpacing: {
        marginTop: Spacing.md,
        paddingTop: Spacing.md,
        borderTopWidth: 1,
        borderTopColor: 'rgba(128,128,128,0.2)'
    },
    positionRow: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    positionRowMobile: {
        flexDirection: 'column'
    },
    positionContent: {
        flex: 1
    },
    positionImageContainer: {
        width: 240,
        flexShrink: 0,
        marginLeft: Spacing.md
    },
    positionImage: {
        width: '100%',
        height: 160,
        borderRadius: Spacing.xxs
    },
    positionTitle: {
        marginBottom: Spacing.xxxs
    },
    period: {
        opacity: 0.7,
        fontStyle: 'italic',
        marginBottom: Spacing.xxs,
        fontSize: 13
    },
    description: {
        opacity: 0.85,
        marginBottom: Spacing.xs,
        lineHeight: 22
    },
    highlightsContainer: {
        marginTop: Spacing.xxs
    },
    highlightItem: {
        flexDirection: 'row',
        marginBottom: Spacing.xxxs
    },
    bullet: {
        width: Spacing.xs,
        marginRight: Spacing.xxs,
        opacity: 0.7
    },
    highlightText: {
        flex: 1,
        opacity: 0.85,
        lineHeight: 20
    },
    techItem: {
        marginBottom: Spacing.sm
    },
    techTitle: {
        marginBottom: Spacing.xxxs
    },
    techText: {
        opacity: 0.8,
        lineHeight: 20
    },
    resumeText: {
        opacity: 0.85,
        lineHeight: 22
    },
    resumeLink: {
        marginTop: Spacing.sm,
        alignSelf: 'flex-start',
        paddingHorizontal: Spacing.sm,
        paddingVertical: Spacing.xxs,
        borderRadius: Spacing.xs,
        borderWidth: 1
    },
    resumeLinkText: {
        fontWeight: '600'
    },
    footer: {
        paddingVertical: Spacing.xl,
        paddingHorizontal: Spacing.md,
        alignItems: 'center'
    },
    footerText: {
        opacity: 0.7,
        textAlign: 'center'
    }
});
