import { StyleSheet, Image } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedScrollView } from '@/components/ThemedScrollView';

import { Colors } from '@/constants/theme';

import { useCutoffs } from '@/hooks/useCutoffs';

const data = [
    {
        header: '🎓 Education',
        text: 'UC Berkeley, Class of 2019 \nB.S. in Electrical Engineering & Computer Science \nSCET Certification in Entrepreneurship & Technology',
        image: 'https://tile.loc.gov/image-services/iiif/service:pnp:highsm:21300:21324/full/pct:25/0/default.jpg'
    },
    {
        header: '💼 Professional Experience',
        text: 'Senior Software Engineer – Grokker (2021–Present)\n\nOver the past four years, I\'ve led and contributed to the development of web, mobile, and TV applications, working across the full stack to deliver scalable, user-focused products.\n\nAt Grokker, I\'ve specialized in:\n• Full-stack development using Node.js, React, and React Native\n• LLM RAG pipelines, integrating large language models into production workflows\n• System monitoring and performance with Prometheus and Grafana\n• Cloud infrastructure with AWS (S3, ECS, EC2)\n• Real-time features via Socket.IO\n• CI/CD automation using GitLab pipelines\n\nI\'m passionate about designing systems that are both elegant and reliable — from intuitive front-ends to efficient backends.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
    },
    {
        header: '🧠 Technical Toolkit',
        text: 'Languages & Frameworks:\nJavaScript, TypeScript, Python, Node.js, React, React Native, Expo\n\nDatabases:\nMongoDB\n\nDevOps & Cloud:\nAWS (S3, ECS, EC2), GitLab CI/CD, Prometheus, Grafana\n\nOther Interests:\nPandas, data analysis, AI integration',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80'
    },
    {
        header: '🍳 Personal Interests',
        text: 'When I\'m not coding, you\'ll probably find me in the kitchen. Cooking is my favorite creative outlet — a balance of precision and experimentation that mirrors how I approach engineering.\n\nI also enjoy exploring new tools in Python, building small side projects, and learning about emerging tech in AI and developer productivity.',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80'
    }
]

interface TextProps {
    text: string;
    header: string;
    image?: string;
}

export default function About() {
    const { isMobile } = useCutoffs();

    const renderSection = ({ header, text, image }: TextProps, index: number) => (
        <ThemedView
            key={index}
            style={styles.section}
        >
            {isMobile ? (
                <>
                    <ThemedView style={styles.sectionHeader}>
                        <ThemedText type='subtitle'>{header}</ThemedText>
                    </ThemedView>

                    <ThemedText type='default' style={styles.sectionText}>
                        {text}
                    </ThemedText>

                    {image && (
                        <ThemedView style={styles.imageContainerMobile}>
                            <Image
                                source={{ uri: image }}
                                style={styles.sectionImage}
                                resizeMode='cover'
                            />
                        </ThemedView>
                    )}
                </>
            ) : (
                <ThemedView style={styles.sectionContent}>
                    <ThemedView style={styles.textContainer}>
                        <ThemedView style={styles.sectionHeader}>
                            <ThemedText type='subtitle'>{header}</ThemedText>
                        </ThemedView>

                        <ThemedText type='default' style={styles.sectionText}>
                            {text}
                        </ThemedText>
                    </ThemedView>

                    {image && (
                        <ThemedView style={styles.imageContainer}>
                            <Image
                                source={{ uri: image }}
                                style={styles.sectionImage}
                                resizeMode='cover'
                            />
                        </ThemedView>
                    )}
                </ThemedView>
            )}
        </ThemedView>
    );

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
        paddingVertical: 48,
        paddingHorizontal: 24,
        alignItems: 'center'
    },
    mainTitle: {
        marginBottom: 12,
        textAlign: 'center'
    },
    subtitle: {
        opacity: 0.7,
        textAlign: 'center',
        maxWidth: 600
    },
    content: {
        paddingHorizontal: 24,
        alignSelf: 'center',
        width: '100%'
    },
    section: {
        marginBottom: 24,
        borderRadius: 12,
        padding: 24,
        borderLeftWidth: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        borderLeftColor: Colors.paletteColor1
    },
    sectionContent: {
        flexDirection: 'row',
        gap: 24,
        alignItems: 'center'
    },
    textContainer: {
        flex: 1
    },
    sectionHeader: {
        marginBottom: 16
    },
    imageContainer: {
        width: 280,
        flexShrink: 0
    },
    imageContainerMobile: {
        width: '100%',
        marginTop: 16
    },
    sectionImage: {
        width: '100%',
        height: 200,
        borderRadius: 8
    },
    sectionText: {
        opacity: 0.9
    },
    footer: {
        paddingVertical: 48,
        paddingHorizontal: 24,
        alignItems: 'center'
    },
    footerText: {
        opacity: 0.7,
        textAlign: 'center'
    }
});