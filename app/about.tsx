import { StyleSheet, Image } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedScrollView } from '@/components/ThemedScrollView';

import { Colors } from '@/constants/theme';

import { useCutoffs } from '@/hooks/useCutoffs';
import { Spacing } from '@/constants/spacing';

const data = [
    {
        header: '🎓 Education',
        subtitle: 'UC Berkeley, Class of 2019',
        degree: 'B.S. in Electrical Engineering & Computer Science',
        certification: 'SCET Certification in Entrepreneurship & Technology',
        coursework: [
            {
                category: 'Computer Science',
                courses: 'Data Structures, Database Systems, Efficient Algorithms & Intractable Problems, Artificial Intelligence, Machine Learning, Engineering Optimization Models'
            },
            {
                category: 'Electrical Engineering',
                courses: 'Designing Information Devices & Systems, Signals and Systems'
            },
            {
                category: 'Mathematics',
                courses: 'Discrete Mathematics & Probability Theory, Multivariable Calculus, Linear Algebra & Differential Equations, Mathematical Statistics in Data Science'
            },
            {
                category: 'Other',
                courses: 'Principles & Techniques of Data Science, Applied Data Science w/ Venture Applications, Professional Communication'
            }
        ],
        image: 'https://tile.loc.gov/image-services/iiif/service:pnp:highsm:21300:21324/full/pct:25/0/default.jpg'
    },
    {
        header: '💼 Professional Experience',
        positions: [
            {
                title: 'Senior Software Engineer',
                company: 'Grokker',
                period: '2024–Present',
                description: 'Leading development of web, mobile, and TV applications across the full stack to deliver scalable, user-focused products.',
                highlights: [
                    'Full-stack development using Node.js, React, and React Native',
                    'LLM RAG pipelines, integrating large language models into production workflows',
                    'System monitoring and performance with Prometheus and Grafana',
                    'Cloud infrastructure with AWS (S3, ECS, EC2)',
                    'Real-time features via Socket.IO',
                    'CI/CD automation using GitLab pipelines'
                ],
                image: 'https://media.licdn.com/dms/image/v2/D5610AQGaS26_bbJO8A/image-shrink_800/image-shrink_800/0/1728068522630?e=2147483647&v=beta&t=yziG8rrkUHuaqp7cipPGVImVXMNdsReNWlK-sV2pIrc'
            },
            {
                title: 'Software Engineer',
                company: 'Grokker',
                period: '2021–2024',
                description: 'Contributed to the development of web, mobile, and TV applications, working across the full stack to deliver scalable, user-focused products.',
                highlights: [
                    'Full-stack development using Node.js, React, and React Native',
                    'LLM RAG pipelines, integrating large language models into production workflows',
                    'System monitoring and performance with Prometheus and Grafana',
                    'Cloud infrastructure with AWS (S3, ECS, EC2)',
                    'Real-time features via Socket.IO',
                    'CI/CD automation using GitLab pipelines'
                ],
                image: 'https://cms.grokimg.net/About+Page/New%2BYT%2BBannerfinalv2.jpg'
            },
            {
                title: 'Software Engineering Contractor',
                company: 'Microsoft',
                period: '2020 – 2021',
                description: 'Developed internal software for Microsoft clients, working with Java, Azure, SQL Server, and KQL. Maintained internal emailing software using C#.',
                highlights: [],
                image: 'https://cdn.pixabay.com/photo/2019/11/07/07/48/microsoft-4608125_1280.jpg'
            }
        ]
    },
    {
        header: '🧠 Technical Toolkit',
        categories: [
            {
                title: 'Languages & Frameworks',
                items: 'JavaScript, TypeScript, Python, Node.js, React, React Native, Expo'
            },
            {
                title: 'Databases',
                items: 'MongoDB'
            },
            {
                title: 'DevOps & Cloud',
                items: 'AWS (S3, ECS, EC2), GitLab CI/CD, Prometheus, Grafana'
            },
            {
                title: 'Other Interests',
                items: 'Pandas, data analysis, AI integration'
            }
        ],
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80'
    },
    {
        header: '🍳 Personal Interests',
        text: 'When I\'m not coding, you\'ll probably find me in the kitchen. Cooking is my favorite creative outlet — a balance of precision and experimentation that mirrors how I approach engineering. You can take a look at what I\'m cooking up on my Instagram.\n\nI also enjoy exploring new tools in Python, building small side projects, and learning about emerging tech in AI and developer productivity.',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80'
    }
];

const EducationSection = ({ data, isMobile }: { data: any; isMobile: boolean }) => (
    <ThemedView style={styles.sectionContent}>
        <ThemedView style={[styles.textContainer, isMobile && styles.fullWidth]}>
            <ThemedText type='subtitle' style={styles.positionTitle}>
                {data.subtitle}
            </ThemedText>
            <ThemedText type='default' style={styles.degree}>
                {data.degree}
            </ThemedText>
            <ThemedText type='default' style={[styles.certification, { marginBottom: Spacing.sm }]}>
                {data.certification}
            </ThemedText>

            <ThemedText type='defaultSemiBold' style={styles.courseworkHeader}>
                RELEVANT COURSEWORK
            </ThemedText>

            {data.coursework.map((item: any, idx: number) => (
                <ThemedView key={idx} style={styles.courseworkItem}>
                    <ThemedText type='defaultSemiBold' style={styles.courseworkCategory}>
                        {item.category}
                    </ThemedText>
                    <ThemedText type='default' style={styles.courseworkText}>
                        {item.courses}
                    </ThemedText>
                </ThemedView>
            ))}
        </ThemedView>

        {data.image && (
            <ThemedView style={[styles.imageContainer, isMobile && styles.imageContainerMobile]}>
                <Image
                    source={{ uri: data.image }}
                    style={styles.sectionImage}
                    resizeMode='cover'
                />
            </ThemedView>
        )}
    </ThemedView>
);

const ExperienceSection = ({ data, isMobile }: { data: any; isMobile: boolean }) => (
    <ThemedView style={styles.sectionContent}>
        <ThemedView style={[styles.textContainer, isMobile && styles.fullWidth]}>
            {data.positions.map((position: any, idx: number) => (
                <ThemedView key={idx} style={[styles.positionBlock, idx > 0 && styles.positionBlockSpacing]}>
                    <ThemedView style={isMobile ? {} : styles.positionRow}>
                        <ThemedView style={isMobile ? {} : styles.positionContent}>
                            <ThemedText type='defaultSemiBold' style={styles.positionTitle}>
                                {position.title} – {position.company}
                            </ThemedText>
                            <ThemedText type='default' style={styles.period}>
                                {position.period}
                            </ThemedText>
                            <ThemedText type='default' style={styles.description}>
                                {position.description}
                            </ThemedText>

                            {position.highlights.length > 0 && (
                                <ThemedView style={styles.highlightsContainer}>
                                    {position.highlights.map((highlight: string, hIdx: number) => (
                                        <ThemedView key={hIdx} style={styles.highlightItem}>
                                            <ThemedText type='default' style={styles.bullet}>•</ThemedText>
                                            <ThemedText type='default' style={styles.highlightText}>
                                                {highlight}
                                            </ThemedText>
                                        </ThemedView>
                                    ))}
                                </ThemedView>
                            )}
                        </ThemedView>

                        {position.image && (
                            <ThemedView style={[styles.positionImageContainer, isMobile && styles.imageContainerMobile]}>
                                <Image
                                    source={{ uri: position.image }}
                                    style={styles.positionImage}
                                    resizeMode='cover'
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
    <ThemedView style={styles.sectionContent}>
        <ThemedView style={[styles.textContainer, isMobile && styles.fullWidth]}>
            {data.categories.map((category: any, idx: number) => (
                <ThemedView key={idx} style={styles.techItem}>
                    <ThemedText type='defaultSemiBold' style={styles.techTitle}>
                        {category.title}
                    </ThemedText>
                    <ThemedText type='default' style={styles.techText}>
                        {category.items}
                    </ThemedText>
                </ThemedView>
            ))}
        </ThemedView>

        {data.image && (
            <ThemedView style={[styles.imageContainer, isMobile && styles.imageContainerMobile]}>
                <Image
                    source={{ uri: data.image }}
                    style={styles.sectionImage}
                    resizeMode='cover'
                />
            </ThemedView>
        )}
    </ThemedView>
);

const PersonalSection = ({ data, isMobile }: { data: any; isMobile: boolean }) => (
    <ThemedView style={styles.sectionContent}>
        <ThemedView style={[styles.textContainer, isMobile && styles.fullWidth]}>
            <ThemedText type='default' style={styles.sectionText}>
                {data.text}
            </ThemedText>
        </ThemedView>

        {data.image && (
            <ThemedView style={[styles.imageContainer, isMobile && styles.imageContainerMobile]}>
                <Image
                    source={{ uri: data.image }}
                    style={styles.sectionImage}
                    resizeMode='cover'
                />
            </ThemedView>
        )}
    </ThemedView>
);

export default function About() {
    const { isMobile } = useCutoffs();

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
            <ThemedView key={index} style={styles.section}>
                <ThemedView style={styles.sectionHeader}>
                    <ThemedText type='subtitle'>{sectionData.header}</ThemedText>
                </ThemedView>
                {content}
            </ThemedView>
        );
    };

    return (
        <ThemedScrollView style={styles.scrollContainer}>
            <ThemedView style={styles.container}>
                <ThemedView style={styles.hero}>
                    <ThemedText type='title' style={styles.mainTitle}>
                        About Me
                    </ThemedText>
                    <ThemedText type='default' style={styles.subtitle}>
                        Full-stack engineer passionate about building elegant, scalable solutions
                    </ThemedText>
                </ThemedView>

                <ThemedView style={[styles.content, { maxWidth: isMobile ? '100%' : 1100 }]}>
                    {data.map(renderSection)}
                </ThemedView>

                <ThemedView style={styles.footer}>
                    <ThemedText type='default' style={styles.footerText}>
                        {'📫 Let\'s connect and build something great together'}
                    </ThemedText>
                </ThemedView>
            </ThemedView>
        </ThemedScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1
    },
    container: {
        flex: 1
    },
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
        elevation: 2,
        borderLeftColor: Colors.paletteColor1
    },
    sectionHeader: {
        marginBottom: Spacing.md - Spacing.xxxs
    },
    sectionContent: {
        flexDirection: 'row',
        gap: Spacing.md,
        alignItems: 'flex-start'
    },
    textContainer: {
        flex: 1
    },
    fullWidth: {
        width: '100%'
    },
    imageContainer: {
        width: 280,
        flexShrink: 0
    },
    imageContainerMobile: {
        width: '100%',
        marginTop: Spacing.md - Spacing.xxxs
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
        marginBottom: Spacing.xxxs,
        opacity: 0.95
    },
    courseworkText: {
        opacity: 0.8,
        lineHeight: 20
    },
    positionBlock: {
        marginBottom: Spacing.none
    },
    positionBlockSpacing: {
        marginTop: Spacing.md,
        paddingTop: Spacing.md,
        borderTopWidth: 1,
        borderTopColor: 'rgba(128, 128, 128, 0.2)'
    },
    positionRow: {
        flexDirection: 'row',
        gap: Spacing.md,
        alignItems: 'flex-start'
    },
    positionContent: {
        flex: 1
    },
    positionImageContainer: {
        width: 240,
        flexShrink: 0
    },
    positionImage: {
        width: '100%',
        height: 160,
        borderRadius: Spacing.xxs
    },
    positionTitle: {
        marginBottom: Spacing.xxxs,
        opacity: 0.95
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
        marginBottom: 6,
        alignItems: 'flex-start'
    },
    bullet: {
        marginRight: Spacing.xxs,
        opacity: 0.7,
        width: 12
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
        marginBottom: Spacing.xxxs,
        opacity: 0.95
    },
    techText: {
        opacity: 0.8,
        lineHeight: 20
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