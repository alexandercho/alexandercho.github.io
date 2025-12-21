import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import { Feather } from '@expo/vector-icons';

import Banner from '@/components/Banner';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/theme';

export default function HomeScreen() {
    return (
        <ParallaxScrollView headerImage={<Banner />}>
            <ThemedView style={styles.container}>
                <ThemedView style={styles.heroSection}>
                    <ThemedText type='title' style={styles.heroTitle}>
                        Welcome to my personal website!
                    </ThemedText>
                    <View style={styles.divider} />
                </ThemedView>

                <ThemedView style={styles.card}>
                    <ThemedText type='subtitle' style={styles.cardTitle}>
                        A little about me
                    </ThemedText>
                    <ThemedText style={styles.cardText}>
                        I&apos;m a fullstack software engineer based in the San Francisco Bay Area.
                        My areas of focus are quality multi-platform UI/UX, business efficient
                        system design, and AI/ML. I built this website with Expo so it works on
                        web, tablet, and mobile browsers. You can even run it as an iPhone or
                        Android app.
                    </ThemedText>
                    <Link href='/about' style={styles.linkContainer}>
                        <View style={styles.linkContent}>
                            <ThemedText type='link' style={styles.linkText}>
                                More About Me
                            </ThemedText>
                            <Feather name='arrow-right' size={18} color={Colors.links} />
                        </View>
                    </Link>
                </ThemedView>

                <ThemedView style={styles.card}>
                    <ThemedText type='subtitle' style={styles.cardTitle}>
                        Current Projects
                    </ThemedText>
                    <ThemedText style={styles.cardText}>
                        This website is currently the only project I have publicly available
                        but more will be coming soon.
                    </ThemedText>
                    <Link href='/projects' style={styles.linkContainer}>
                        <View style={styles.linkContent}>
                            <ThemedText type='link' style={styles.linkText}>
                                See My Projects
                            </ThemedText>
                            <Feather name='arrow-right' size={18} color={Colors.links} />
                        </View>
                    </Link>
                </ThemedView>

                <ThemedView style={styles.ctaCard}>
                    <ThemedText type='subtitle' style={styles.ctaTitle}>
                        Reach out — I&apos;d love to connect.
                    </ThemedText>
                    <Link href='/contact' style={styles.ctaLinkContainer}>
                        <View style={styles.ctaLinkContent}>
                            <ThemedText type='link' style={styles.ctaLinkText}>
                                Send a message
                            </ThemedText>
                            <Feather name='send' size={18} color={Colors.links} />
                        </View>
                    </Link>
                </ThemedView>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingBottom: 40
    },
    heroSection: {
        alignItems: 'center',
        marginBottom: 40,
        paddingTop: 8
    },
    heroTitle: {
        textAlign: 'center',
        marginBottom: 16
    },
    divider: {
        width: 60,
        height: 4,
        backgroundColor: Colors.links,
        borderRadius: 2,
        opacity: 0.8
    },
    card: {
        marginBottom: 24,
        padding: 24,
        borderRadius: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2
    },
    cardTitle: {
        marginBottom: 12
    },
    cardText: {
        lineHeight: 24,
        marginBottom: 16,
        opacity: 0.85
    },
    linkContainer: {
        marginTop: 8
    },
    linkContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    linkText: {
        fontSize: 16
    },
    ctaCard: {
        marginTop: 16,
        padding: 32,
        borderRadius: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 3
    },
    ctaTitle: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 20
    },
    ctaLinkContainer: {
        marginTop: 4
    },
    ctaLinkContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 8,
        paddingHorizontal: 4
    },
    ctaLinkText: {
        fontSize: 17,
        fontWeight: '600'
    }
});