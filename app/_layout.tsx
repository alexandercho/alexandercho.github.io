import { useEffect, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { Stack, usePathname } from 'expo-router';
import Head from 'expo-router/head';
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router/react-navigation';
import { StatusBar } from 'expo-status-bar';

import { NavBar } from '@/components/NavBar';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useCutoffs } from '@/hooks/useCutoffs';

function getPageTitle(pathname: string) {
    if (pathname === '/') {
        return 'Alex Cho';
    }

    if (pathname.startsWith('/about')) {
        return 'About';
    }

    if (pathname.startsWith('/projects')) {
        return 'Projects';
    }

    if (pathname.startsWith('/blog')) {
        return 'Blog';
    }

    if (pathname.startsWith('/contact')) {
        return 'Contact';
    }

    return 'Alex Cho';
}

export default function Layout() {
    const { isMobile } = useCutoffs();
    const pathname = usePathname();
    const colorScheme = useColorScheme();
    const [isDarkMode, setIsDarkMode] = useState(() => colorScheme === 'dark');
    const [fadeAnim] = useState(() => new Animated.Value(0));

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true
        }).start();
    }, [fadeAnim]);

    return (
        <>
            <Head>
                <title>{getPageTitle(pathname)}</title>
            </Head>
            <View style={styles.container}>
                <ThemeProvider value={isDarkMode ? DarkTheme : DefaultTheme}>
                    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
                        <StatusBar style={isDarkMode ? 'light' : 'dark'} />
                        <Stack screenOptions={{ headerShown: false }}>
                            <Stack.Screen name='index' options={{ title: 'Alex Cho' }} />
                            <Stack.Screen name='about' options={{ title: 'About' }} />
                            <Stack.Screen name='projects' options={{ title: 'Projects' }} />
                            <Stack.Screen name='blog/index' options={{ title: 'Blog' }} />
                            <Stack.Screen name='blog/[slug]' options={{ title: 'Blog' }} />
                            <Stack.Screen name='contact' options={{ title: 'Contact' }} />
                        </Stack>
                        <View
                            style={[
                                styles.navLayer,
                                isMobile ? styles.mobileNavLayer : styles.webNavLayer
                            ]}
                        >
                            <NavBar
                                isDarkMode={isDarkMode}
                                setIsDarkMode={setIsDarkMode}
                            />
                        </View>
                    </Animated.View>
                </ThemeProvider>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.neutralBackground
    },
    navLayer: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 100,
        alignItems: 'center',
        paddingHorizontal: 12,
        pointerEvents: 'box-none'
    },
    webNavLayer: {
        top: 16
    },
    mobileNavLayer: {
        bottom: 16
    }
});
