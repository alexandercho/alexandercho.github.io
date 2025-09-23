import React from 'react';
import { StyleSheet, Image, useWindowDimensions, View } from 'react-native';
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

    const renderLogo = () => <Link href="/">
        <Image source={require('@/assets/images/react-logo.png')}
            style={styles.logo} />
    </Link>

    const headerTitle = () => <View style={styles.headerTitle}>
        {renderLogo()}
        <View style={styles.links}>
            <Link href="/"><ThemedText type="defaultSemiBold">Home</ThemedText></Link>
            <Link href="/explore"><ThemedText type="defaultSemiBold">Explore</ThemedText></Link>
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
                name="explore"
                options={{
                    drawerLabel: 'Explore',
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
    }} />

    return <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
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
    logo: {
        height: 50,
        width: 50
    },
});
