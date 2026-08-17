import { Image, StyleSheet, View } from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

import { DarkModeSwitch } from '@/components/DarkModeSwitch';
import { HoverPressable } from '@/components/HoverPressable';
import { ThemedText } from '@/components/StandardComponents/ThemedText';
import { Spacing } from '@/constants/spacing';
import { useCutoffs } from '@/hooks/useCutoffs';
import { useThemeColor } from '@/hooks/useThemeColor';

const images = {
    whiteLogo: require('@/assets/whiteLogo.png'),
    blackLogo: require('@/assets/blackLogo.png')
};

const links = [
    { label: 'Home', icon: 'home' as const, href: '/' as const },
    { label: 'About', icon: 'user' as const, href: '/about' as const },
    { label: 'Projects', icon: 'briefcase' as const, href: '/projects' as const },
    { label: 'Blog', icon: 'book-open' as const, href: '/blog' as const },
    { label: 'Contact', icon: 'mail' as const, href: '/contact' as const }
];

type NavBarProps = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavBar({ isDarkMode, setIsDarkMode }: NavBarProps) {
    const pathname = usePathname();
    const router = useRouter();
    const { isMobile } = useCutoffs();
    const backgroundColor = useThemeColor({}, 'glassSurface');
    const borderColor = useThemeColor({}, 'subtleBorder');
    const tintColor = useThemeColor({}, 'tint');
    const shadowColor = useThemeColor({}, 'shadow');

    return (
        <View
            style={[
                styles.nav,
                isMobile ? styles.mobileNav : styles.webNav,
                {
                    backgroundColor,
                    borderColor,
                    boxShadow: `0 12px 32px ${shadowColor}`
                }
            ]}
        >
            {!isMobile ? (
                <Image
                    resizeMode='contain'
                    source={isDarkMode ? images.whiteLogo : images.blackLogo}
                    style={styles.logo}
                />
            ) : null}

            <View style={[styles.links, isMobile && styles.mobileLinks]}>
                {links.map((link) => {
                    const active = pathname === link.href ||
                        (link.href !== '/' && pathname.startsWith(`${link.href}/`));

                    return (
                        <HoverPressable
                            key={link.href}
                            accessibilityLabel={link.label}
                            accessibilityRole='link'
                            containerStyle={styles.navButtonContainer}
                            lift={2}
                            onPress={() => router.push(link.href)}
                            style={[
                                styles.link,
                                isMobile && styles.mobileLink,
                                active && { backgroundColor: `${tintColor}18` }
                            ]}
                        >
                            <View style={styles.linkContent}>
                                <View style={styles.iconContainer}>
                                    <Feather
                                        name={link.icon}
                                        size={isMobile ? 20 : 17}
                                        color={tintColor}
                                    />
                                </View>
                                <ThemedText
                                    type='defaultSemiBold'
                                    style={isMobile ? styles.mobileLabel : styles.label}
                                >
                                    {link.label}
                                </ThemedText>
                                <View
                                    style={[
                                        styles.activeIndicator,
                                        { backgroundColor: active ? tintColor : 'transparent' }
                                    ]}
                                />
                            </View>
                        </HoverPressable>
                    );
                })}
            </View>

            <View style={styles.divider} />
            <DarkModeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        borderWidth: 1,
        borderRadius: 22,
        borderCurve: 'continuous',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden'
    },
    webNav: {
        width: 'auto',
        maxWidth: 960,
        minHeight: 76,
        paddingHorizontal: Spacing.sm,
        gap: Spacing.md
    },
    mobileNav: {
        width: '100%',
        maxWidth: 520,
        minHeight: 76,
        paddingHorizontal: Spacing.xs,
        gap: Spacing.xxs
    },
    logoButton: {
        width: 84,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 68,
        height: 34
    },
    links: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.sm
    },
    mobileLinks: {
        flex: 1,
        justifyContent: 'space-around',
        gap: 0
    },
    navButtonContainer: {
        borderRadius: 14
    },
    link: {
        minWidth: 78,
        minHeight: 62,
        paddingHorizontal: Spacing.sm,
        paddingVertical: Spacing.xxxs,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
        overflow: 'hidden'
    },
    mobileLink: {
        flex: 1,
        minWidth: 0,
        minHeight: 62,
        paddingHorizontal: Spacing.xxxs
    },
    linkContent: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2
    },
    iconContainer: {
        width: '100%',
        height: 22,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        width: '100%',
        fontSize: 13,
        lineHeight: 16,
        textAlign: 'center'
    },
    mobileLabel: {
        width: '100%',
        fontSize: 10,
        lineHeight: 12,
        textAlign: 'center'
    },
    activeIndicator: {
        width: 24,
        height: 2,
        borderRadius: 1,
        marginTop: 2
    },
    divider: {
        width: 1,
        height: 28,
        backgroundColor: 'rgba(128, 145, 175, 0.24)'
    }
});
