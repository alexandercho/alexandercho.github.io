import { ImageBackground } from 'expo-image';
import { useWindowDimensions, StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ReflectedText from '@/components/ReflectedText';
import { Link } from 'expo-router';

export default function HomeScreen() {
    const theme = useTheme();
    const { width } = useWindowDimensions()
    const isDarkMode = theme.dark
    const bannerSource = isDarkMode
        ? require('@/assets/banners/darkBanner.gif')
        : require('@/assets/banners/lightBanner.gif');

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <View style={styles.bannerContainer}>
                    <ImageBackground
                        contentFit='cover'
                        contentPosition={{ top: '35%' }}
                        transition={500}
                        source={bannerSource}
                        style={styles.banner}>
                        <ReflectedText
                            text="Hey I'm Alexander Cho"
                            fontSize={width / 30}
                            style={{
                                top: "50%",
                                left: "-25%",
                            }}
                        />
                    </ImageBackground>
                </View>
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Welcome to my personal website!</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>A little about me</ThemedText>
                <ThemedText style={{ maxWidth: 720, textAlign: 'left' }}>{`\t I\'m a fullstack software engineer based in the San Francisco Bay Area. My areas of focus are quality multi-platform UI/UX, business efficient system design, and AI/ML. I built this website with Expo so it works on web, tablet, and mobile browsers. You can even run it as an iPhone or Android app.
                `}</ThemedText>
                <Link href='/about'>
                    <ThemedText type='link'>{`More About Me ->`}</ThemedText>
                </Link>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Current Projects</ThemedText>
                <ThemedText>{`
                    This website is currently the only project I have publicly available but more will be coming soon.
                `}</ThemedText>
                <Link href='/projects'>
                    <ThemedText type='link'>{`See My Projects ->`}</ThemedText>
                </Link>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Reach out — I’d love to connect.</ThemedText>
                <Link href='/contact'>
                    <ThemedText type='link'>{`Send a message ->`}</ThemedText>
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
    },
    bannerContainer: {
        width: '100%',
        aspectRatio: 2.9 / 1,
        position: 'relative',
    },
    banner: {
        width: '100%',
        height: '100%',
    },
});
