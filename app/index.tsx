import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Feather } from '@expo/vector-icons';

import Banner from '@/components/Banner';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/theme';

export default function HomeScreen() {
    return (
        <ParallaxScrollView
            headerImage={<Banner />}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Welcome to my personal website!</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>A little about me</ThemedText>
                <ThemedText style={{ maxWidth: 720, textAlign: 'left' }}>{`\t I\'m a fullstack software engineer based in the San Francisco Bay Area. My areas of focus are quality multi-platform UI/UX, business efficient system design, and AI/ML. I built this website with Expo so it works on web, tablet, and mobile browsers. You can even run it as an iPhone or Android app.
                `}</ThemedText>
                <Link href='/about'>
                    <ThemedText type='link'>{'More About Me'}</ThemedText>
                    <Feather name={'arrow-right'} size={16} color={Colors.links} />
                </Link>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Current Projects</ThemedText>
                <ThemedText>{
                    'This website is currently the only project I have publicly available but more will be coming soon'
                }</ThemedText>
                <Link href='/projects'>
                    <ThemedText type='link'>{'See My Projects'}</ThemedText>
                    <Feather name={'arrow-right'} size={16} color={Colors.links} />
                </Link>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Reach out — I’d love to connect.</ThemedText>
                <Link href='/contact'>
                    <ThemedText type='link'>{'Send a message'}</ThemedText>
                    <Feather name={'arrow-right'} size={16} color={Colors.links} />
                </Link>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8
    },
    stepContainer: {
        marginVertical: 32,
        alignItems: 'center',
        flexDirection: 'column'
    }
});
