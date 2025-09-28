import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Image, Text, View, useWindowDimensions } from 'react-native';
import { Stack, Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/useColorScheme';
import { NavBar } from '@/components/NavBar';
import { useCutoffs } from '@/hooks/useCutoffs';
import { DarkModeSwitch } from '@/components/DarkModeSwitch';
import { useScroll } from '@/contexts/ScrollContext';

export default function Layout() {
    const { scrollY } = useScroll();
    const { width } = useWindowDimensions();
    const colorScheme = useColorScheme();
    const { isMobile } = useCutoffs();
    const [ready, setReady] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

    useEffect(() => {
        if (colorScheme) {
            setReady(true);
        }
        setIsDarkMode(colorScheme === 'dark')
    }, [colorScheme]);

    if (!ready) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator
                    size="large"
                    color={Colors.light.tint}
                />
                <Text style={{ marginTop: 12 }}>Loading…</Text>
            </View>
        );
    }

    const renderDrawer = () => {
        const { Screen } = Drawer;

        return <Drawer screenOptions={{
            drawerActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerTitle: () => <Link href="/">
                <Image source={require('@/assets/images/react-logo.png')}
                    style={styles.logo} />
            </Link>,
            headerTitleAlign: 'center'
        }}>
            <Screen
                name="index"
                options={{
                    drawerLabel: 'Home',
                    title: 'overview',
                }}
            />
            <Screen
                name="about"
                options={{
                    drawerLabel: 'About',
                    title: 'overview',
                }}
            />
            <Screen
                name="projects"
                options={{
                    drawerLabel: 'Projects',
                    title: 'overview',
                }}
            />
            <Screen
                name="contact"
                options={{
                    drawerLabel: 'Contact',
                    title: 'overview',
                }}
            />
        </Drawer>
    };

    const renderStack = () => <Stack screenOptions={{
        headerBackVisible: false,
        headerLeft: () => null,
        headerTitle: () => <NavBar />,
        headerTransparent: scrollY < width / 3,
        headerRight: () => <DarkModeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    }} />

    return <ThemeProvider value={isDarkMode ? DarkTheme : DefaultTheme}>
        <StatusBar style="auto" />
        {isMobile ? renderDrawer() : renderStack()}
    </ThemeProvider >;
}

const styles = StyleSheet.create({
    headerTitle: {
        flex: 1,
        flexDirection: 'row',
        height: 64,
        alignItems: 'center',
        gap: 48
    },
    links: {
        flex: 1,
        flexDirection: 'row',
        gap: 32
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 50,
        width: 50
    },
});
