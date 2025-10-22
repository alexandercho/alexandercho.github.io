import { Image } from 'expo-image';
import { Platform, StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
    const theme = useTheme();
    const isDarkMode = theme.dark
    const bannerSource = isDarkMode
        ? require('@/assets/banners/darkBanner.gif')
        : require('@/assets/banners/lightBanner.gif');

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <View style={styles.bannerContainer}>
                    <Image
                        contentFit='cover'
                        contentPosition={{ top: '25%' }}
                        transition={500}
                        source={bannerSource}
                        style={styles.banner}
                    />
                    <LinearGradient
                        colors={[`rgba(0,0,0,0.${isDarkMode ? 5 : 1})`, 'transparent']}
                        style={StyleSheet.absoluteFillObject}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                    />
                </View>
            }
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Welcome!</ThemedText>
                <HelloWave />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 1: Try it</ThemedText>
                <ThemedText>
                    Edit <ThemedText type='defaultSemiBold'>app/(tabs)/index.tsx</ThemedText> to see changes.
                    Press{' '}
                    <ThemedText type='defaultSemiBold'>
                        {Platform.select({
                            ios: 'cmd + d',
                            android: 'cmd + m',
                            web: 'F12',
                        })}
                    </ThemedText>{' '}
                    to open developer tools.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText>
                    {`Tap the Explore tab to learn more about what's included in this starter app.`}
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 3: Get a fresh start</ThemedText>
                <ThemedText>
                    {`When you're ready, run `}
                    <ThemedText type='defaultSemiBold'>npm run reset-project</ThemedText> to get a fresh{' '}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> directory. This will move the current{' '}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> to{' '}
                    <ThemedText type='defaultSemiBold'>app-example</ThemedText>.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Welcome!</ThemedText>
                <HelloWave />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 1: Try it</ThemedText>
                <ThemedText>
                    Edit <ThemedText type='defaultSemiBold'>app/(tabs)/index.tsx</ThemedText> to see changes.
                    Press{' '}
                    <ThemedText type='defaultSemiBold'>
                        {Platform.select({
                            ios: 'cmd + d',
                            android: 'cmd + m',
                            web: 'F12',
                        })}
                    </ThemedText>{' '}
                    to open developer tools.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText>
                    {`Tap the Explore tab to learn more about what's included in this starter app.`}
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 3: Get a fresh start</ThemedText>
                <ThemedText>
                    {`When you're ready, run `}
                    <ThemedText type='defaultSemiBold'>npm run reset-project</ThemedText> to get a fresh{' '}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> directory. This will move the current{' '}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> to{' '}
                    <ThemedText type='defaultSemiBold'>app-example</ThemedText>.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Welcome!</ThemedText>
                <HelloWave />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 1: Try it</ThemedText>
                <ThemedText>
                    Edit <ThemedText type='defaultSemiBold'>app/(tabs)/index.tsx</ThemedText> to see changes.
                    Press{' '}
                    <ThemedText type='defaultSemiBold'>
                        {Platform.select({
                            ios: 'cmd + d',
                            android: 'cmd + m',
                            web: 'F12',
                        })}
                    </ThemedText>{' '}
                    to open developer tools.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText>
                    {`Tap the Explore tab to learn more about what's included in this starter app.`}
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 3: Get a fresh start</ThemedText>
                <ThemedText>
                    {`When you're ready, run `}
                    <ThemedText type='defaultSemiBold'>npm run reset-project</ThemedText> to get a fresh{' '}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> directory. This will move the current{' '}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> to{' '}
                    <ThemedText type='defaultSemiBold'>app-example</ThemedText>.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Welcome!</ThemedText>
                <HelloWave />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 1: Try it</ThemedText>
                <ThemedText>
                    Edit <ThemedText type='defaultSemiBold'>app/(tabs)/index.tsx</ThemedText> to see changes.
                    Press{' '}
                    <ThemedText type='defaultSemiBold'>
                        {Platform.select({
                            ios: 'cmd + d',
                            android: 'cmd + m',
                            web: 'F12',
                        })}
                    </ThemedText>{' '}
                    to open developer tools.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText>
                    {`Tap the Explore tab to learn more about what's included in this starter app.`}
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 3: Get a fresh start</ThemedText>
                <ThemedText>
                    {`When you're ready, run `}
                    <ThemedText type='defaultSemiBold'>npm run reset-project</ThemedText> to get a fresh{' '}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> directory. This will move the current{' '}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> to{' '}
                    <ThemedText type='defaultSemiBold'>app-example</ThemedText>.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Welcome!</ThemedText>
                <HelloWave />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 1: Try it</ThemedText>
                <ThemedText>
                    Edit <ThemedText type='defaultSemiBold'>app/(tabs)/index.tsx</ThemedText> to see changes.
                    Press{' '}
                    <ThemedText type='defaultSemiBold'>
                        {Platform.select({
                            ios: 'cmd + d',
                            android: 'cmd + m',
                            web: 'F12',
                        })}
                    </ThemedText>{' '}
                    to open developer tools.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText>
                    {`Tap the Explore tab to learn more about what's included in this starter app.`}
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 3: Get a fresh start</ThemedText>
                <ThemedText>
                    {`When you're ready, run `}
                    <ThemedText type='defaultSemiBold'>npm run reset-project</ThemedText> to get a fresh{' '}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> directory. This will move the current{' '}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> to{' '}
                    <ThemedText type='defaultSemiBold'>app-example</ThemedText>.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Welcome!</ThemedText>
                <HelloWave />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 1: Try it</ThemedText>
                <ThemedText>
                    Edit <ThemedText type='defaultSemiBold'>app/(tabs)/index.tsx</ThemedText> to see changes.
                    Press{' '}
                    <ThemedText type='defaultSemiBold'>
                        {Platform.select({
                            ios: 'cmd + d',
                            android: 'cmd + m',
                            web: 'F12',
                        })}
                    </ThemedText>{' '}
                    to open developer tools.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText>
                    {`Tap the Explore tab to learn more about what's included in this starter app.`}
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 3: Get a fresh start</ThemedText>
                <ThemedText>
                    {`When you're ready, run `}
                    <ThemedText type='defaultSemiBold'>npm run reset-project</ThemedText> to get a fresh{' '}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> directory. This will move the current{' '}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> to{' '}
                    <ThemedText type='defaultSemiBold'>app-example</ThemedText>.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Welcome!</ThemedText>
                <HelloWave />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 1: Try it</ThemedText>
                <ThemedText>
                    Edit <ThemedText type='defaultSemiBold'>app/(tabs)/index.tsx</ThemedText> to see changes.
                    Press{' '}
                    <ThemedText type='defaultSemiBold'>
                        {Platform.select({
                            ios: 'cmd + d',
                            android: 'cmd + m',
                            web: 'F12',
                        })}
                    </ThemedText>{' '}
                    to open developer tools.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText>
                    {`Tap the Explore tab to learn more about what's included in this starter app.`}
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 3: Get a fresh start</ThemedText>
                <ThemedText>
                    {`When you're ready, run `}
                    <ThemedText type='defaultSemiBold'>npm run reset-project</ThemedText> to get a fresh{' '}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> directory. This will move the current{' '}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> to{' '}
                    <ThemedText type='defaultSemiBold'>app-example</ThemedText>.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Welcome!</ThemedText>
                <HelloWave />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 1: Try it</ThemedText>
                <ThemedText>
                    Edit <ThemedText type='defaultSemiBold'>app/(tabs)/index.tsx</ThemedText> to see changes.
                    Press{' '}
                    <ThemedText type='defaultSemiBold'>
                        {Platform.select({
                            ios: 'cmd + d',
                            android: 'cmd + m',
                            web: 'F12',
                        })}
                    </ThemedText>{' '}
                    to open developer tools.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText>
                    {`Tap the Explore tab to learn more about what's included in this starter app.`}
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 3: Get a fresh start</ThemedText>
                <ThemedText>
                    {`When you're ready, run `}
                    <ThemedText type='defaultSemiBold'>npm run reset-project</ThemedText> to get a fresh{' '}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> directory. This will move the current{' '}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> to{' '}
                    <ThemedText type='defaultSemiBold'>app-example</ThemedText>.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Welcome!</ThemedText>
                <HelloWave />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 1: Try it</ThemedText>
                <ThemedText>
                    Edit <ThemedText type='defaultSemiBold'>app/(tabs)/index.tsx</ThemedText> to see changes.
                    Press{' '}
                    <ThemedText type='defaultSemiBold'>
                        {Platform.select({
                            ios: 'cmd + d',
                            android: 'cmd + m',
                            web: 'F12',
                        })}
                    </ThemedText>{' '}
                    to open developer tools.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText>
                    {`Tap the Explore tab to learn more about what's included in this starter app.`}
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 3: Get a fresh start</ThemedText>
                <ThemedText>
                    {`When you're ready, run `}
                    <ThemedText type='defaultSemiBold'>npm run reset-project</ThemedText> to get a fresh{' '}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> directory. This will move the current{' '}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> to{' '}
                    <ThemedText type='defaultSemiBold'>app-example</ThemedText>.
                </ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
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
