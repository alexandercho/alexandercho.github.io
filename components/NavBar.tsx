import { StyleSheet, Image, View } from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';

const images = {
    whiteLogo: require('@/assets/whiteLogo.png'),
    blackLogo: require('@/assets/blackLogo.png')
}
export function NavBar({ isDarkMode }: {
    isDarkMode: boolean;
}) {
    return (
        <View style={styles.headerTitle}>
            <Link href="/">
                <Image resizeMode={'contain'} source={isDarkMode ? images.whiteLogo : images.blackLogo}
                    style={styles.logo} />
            </Link>
            <View style={styles.links}>
                <Link href="/"><ThemedText type="defaultSemiBold">Home</ThemedText></Link>
                <Link href="/about"><ThemedText type="defaultSemiBold">About</ThemedText></Link>
                <Link href="/projects"><ThemedText type="defaultSemiBold">Projects</ThemedText></Link>
                <Link href="/contact"><ThemedText type="defaultSemiBold">Contact</ThemedText></Link>
            </View>
        </View>
    );
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
        height: 36,
        width: 72
    }
});
