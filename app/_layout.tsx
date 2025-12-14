import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Image, Text, View, useWindowDimensions } from 'react-native';
import { Stack, Link, usePathname } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/useColorScheme';
import { NavBar } from '@/components/NavBar';
import { useCutoffs } from '@/hooks/useCutoffs';
import { DarkModeSwitch } from '@/components/DarkModeSwitch';
import { ScrollProvider, useScroll } from '@/contexts/ScrollContext';

type DarkModeSwitchProps = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

function DrawerStack({ isDarkMode, setIsDarkMode }: DarkModeSwitchProps) {
    const { Screen } = Drawer;
    const colorScheme = useColorScheme();

    return <Drawer screenOptions={{
        drawerActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerTitle: () => <Link href="/">
            <Image source={require('@/assets/tabIcon.png')}
                style={styles.logo} />
        </Link>,
        headerTitleAlign: 'center',
        headerRight: () => <DarkModeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    }}>
        <Screen
            name="index"
            options={{
                drawerLabel: 'Home',
                title: 'overview'
            }}
        />
        <Screen
            name="about"
            options={{
                drawerLabel: 'About',
                title: 'overview'
            }}
        />
        <Screen
            name="projects"
            options={{
                drawerLabel: 'Projects',
                title: 'overview'
            }}
        />
        <Screen
            name="contact"
            options={{
                drawerLabel: 'Contact',
                title: 'overview'
            }}
        />
    </Drawer>
}

function HomeStack({ isDarkMode, setIsDarkMode }: DarkModeSwitchProps) {
    const pathname = usePathname()
    const { scrollY } = useScroll();
    const { width } = useWindowDimensions();
    return <Stack screenOptions={{
        headerBackVisible: false,
        headerLeft: () => null,
        headerTitle: () => <NavBar isDarkMode={isDarkMode} />,
        headerTransparent: scrollY < width / 3 && pathname === '/',
        headerRight: () => <DarkModeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    }} />
}

export default function Layout() {
    const { isMobile } = useCutoffs();
    const [ready, setReady] = useState(false);
    const colorScheme = useColorScheme();
    const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
    useEffect(() => {
        if (colorScheme) {
            setReady(true);
        }
        setIsDarkMode(colorScheme === 'dark')
    }, [colorScheme]);

    // TODO: Create a loading screen
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

    return <ThemeProvider value={isDarkMode ? DarkTheme : DefaultTheme}>
        <ScrollProvider>
            <StatusBar style="auto" />
            {isMobile ? <DrawerStack isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> : <HomeStack isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
        </ScrollProvider >
    </ThemeProvider >;
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 50,
        width: 50
    }
});

