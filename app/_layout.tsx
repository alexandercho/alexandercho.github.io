import { useEffect, useState, useRef } from 'react';
import { StyleSheet, Image, View, useWindowDimensions, Animated } from 'react-native';
import { Stack, Link, usePathname } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router/react-navigation';
import { StatusBar } from 'expo-status-bar';

import { Colors } from '@/constants/theme';

import { DarkModeSwitch } from '@/components/DarkModeSwitch';
import { NavBar } from '@/components/NavBar';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useCutoffs } from '@/hooks/useCutoffs';

import { ScrollProvider, useScroll } from '@/contexts/ScrollContext';

type AppColorScheme = 'light' | 'dark';

type DarkModeSwitchProps = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const getAppColorScheme = (colorScheme: ReturnType<typeof useColorScheme>): AppColorScheme =>
    colorScheme === 'dark' ? 'dark' : 'light';

function DrawerStack({ isDarkMode, setIsDarkMode }: DarkModeSwitchProps) {
    const { Screen } = Drawer;
    const colorScheme = useColorScheme();
    const appColorScheme = getAppColorScheme(colorScheme);

    return <Drawer screenOptions={{
        drawerActiveTintColor: Colors[appColorScheme].tint,
        headerTitle: () => <Link href='/'><Image source={require('@/assets/tabIcon.png')} style={styles.logo} /></Link>,
        headerTitleAlign: 'center',
        headerRight: () => <DarkModeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    }}>
        <Screen
            name='index'
            options={{
                drawerLabel: 'Home',
                title: 'overview'
            }}
        />
        <Screen
            name='about'
            options={{
                drawerLabel: 'About',
                title: 'overview'
            }}
        />
        <Screen
            name='projects'
            options={{
                drawerLabel: 'Projects',
                title: 'overview'
            }}
        />
        <Screen
            name='contact'
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
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (colorScheme) {
            setReady(true);
        }
        setIsDarkMode(colorScheme === 'dark')
    }, [colorScheme]);

    useEffect(() => {
        if (ready) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true
            }).start();
        }
    }, [ready, fadeAnim]);

    return <View style={styles.container}>
        <ThemeProvider value={isDarkMode ? DarkTheme : DefaultTheme}>
            <ScrollProvider>
                <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
                    <StatusBar style='auto' />
                    {isMobile ? <DrawerStack isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> : <HomeStack isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
                </Animated.View>
            </ScrollProvider>
        </ThemeProvider>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.neutralBackground
    },
    logo: {
        height: 50,
        width: 50
    }
});
