import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Animated, StyleSheet, Image, Switch, Text, useWindowDimensions, View } from 'react-native';
import { Stack, Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { ThemedText } from '@/components/themed-text';

export default function Layout() {
    const colorScheme = useColorScheme();
    const { width } = useWindowDimensions();
    const isMobile = width <= 768;
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

    const renderLogo = () => <Link href="/">
        <Image source={require('@/assets/images/react-logo.png')}
            style={styles.logo} />
    </Link>

    const headerTitle = () => <View style={styles.headerTitle}>
        {renderLogo()}
        <View style={styles.links}>
            <Link href="/"><ThemedText type="defaultSemiBold">Home</ThemedText></Link>
            <Link href="/about"><ThemedText type="defaultSemiBold">About</ThemedText></Link>
            <Link href="/projects"><ThemedText type="defaultSemiBold">Projects</ThemedText></Link>
            <Link href="/contact"><ThemedText type="defaultSemiBold">Contact</ThemedText></Link>
        </View>
    </View>

    const renderDrawer = () => {
        const { Screen } = Drawer;

        return <Drawer screenOptions={{
            drawerActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerTitle: renderLogo,
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
        headerTitle,
        headerTransparent: true,
        headerRight: () => <Switch
            style={{
                marginRight: 32
            }}
            // @ts-expect-error react-native doesn't include activeThumbColor in types
            activeThumbColor="#ffd93d"
            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
            trackColor={{ false: '#bbb', true: '#1e3a8a' }}
            ios_backgroundColor="#888"
            onValueChange={() => setIsDarkMode(!isDarkMode)}
            value={isDarkMode}
        />
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
