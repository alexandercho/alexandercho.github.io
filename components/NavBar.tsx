import { StyleSheet, Image, View } from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedIcon } from '@/components/ThemedIcon';
import { Spacing } from '@/constants/spacing';
const images = {
    whiteLogo: require('@/assets/whiteLogo.png'),
    blackLogo: require('@/assets/blackLogo.png')
}

export function NavBar({ isDarkMode }: {
    isDarkMode: boolean;
}) {

    const linkData = [
        ['home', 'home'],
        ['about', 'user'],
        ['projects', 'briefcase'],
        ['contact', 'mail']
    ]
    const renderLinks = (data: string[][]) => {
        return data.map((datum: string[]) => {
            const [key, val] = datum;
            const href = `/${key === 'home' ? '' : key}`;
            return <Link key={key} href={href as any}>
                <ThemedIcon name={val} style={styles.icon} />
                <ThemedText type='defaultSemiBold'>{key[0].toUpperCase() + key.slice(1)}</ThemedText>
            </Link>
        }
        )
    }

    return (
        <View style={styles.headerTitle}>
            <Link href='/'>
                <Image resizeMode={'contain'} source={isDarkMode ? images.whiteLogo : images.blackLogo}
                    style={styles.logo} />
            </Link>
            <View style={styles.links}>
                {renderLinks(linkData)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerTitle: {
        flex: 1,
        flexDirection: 'row',
        height: Spacing.xxl,
        alignItems: 'center',
        gap: Spacing.xl
    },
    links: {
        flex: 1,
        flexDirection: 'row',
        gap: Spacing.xl
    },
    logo: {
        height: 36,
        width: 72
    },
    icon: {
        marginRight: Spacing.xxs
    }
});
