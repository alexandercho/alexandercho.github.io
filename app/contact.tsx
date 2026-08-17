import { Linking, ScrollView, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { AnimatedEntrance } from '@/components/AnimatedEntrance';
import { BentoCard } from '@/components/BentoCard';
import { HoverPressable } from '@/components/HoverPressable';
import { PageContainer } from '@/components/PageContainer';
import { ThemedText } from '@/components/StandardComponents/ThemedText';
import { Colors } from '@/constants/theme';
import { Spacing } from '@/constants/spacing';
import { useCutoffs } from '@/hooks/useCutoffs';
import { useThemeColor } from '@/hooks/useThemeColor';

const socialLinks = [
    { name: 'Email', detail: 'alexanderswcho@gmail.com', icon: 'mail', url: 'mailto:alexanderswcho@gmail.com', color: Colors.email },
    { name: 'LinkedIn', detail: 'Professional updates', icon: 'linkedin', url: 'https://www.linkedin.com/in/alexscho/', color: Colors.LinkedIn },
    { name: 'GitHub', detail: 'Code and experiments', icon: 'github', url: 'https://github.com/alexandercho' },
    { name: 'Instagram', detail: 'Cooking and life', icon: 'instagram', url: 'https://www.instagram.com/alexcelerator/', color: Colors.Instagram }
];

export default function Contact() {
    const { isMobile } = useCutoffs();
    const tintColor = useThemeColor({}, 'tint');
    const primaryText = useThemeColor({}, 'primaryText');

    return (
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <PageContainer>
                <AnimatedEntrance>
                    <View style={styles.header}>
                        <ThemedText type='defaultSemiBold' style={[styles.eyebrow, { color: tintColor }]}>
                            CONTACT
                        </ThemedText>
                        <ThemedText type='title' style={styles.pageTitle}>
                            Good conversations are a fine place to start.
                        </ThemedText>
                        <ThemedText style={styles.lede}>
                            Have a product idea, an engineering problem, or something interesting
                            to compare notes on? Reach out through whichever channel fits.
                        </ThemedText>
                    </View>
                </AnimatedEntrance>

                <View style={[styles.grid, isMobile && styles.mobileGrid]}>
                    {socialLinks.map((link, index) => (
                        <AnimatedEntrance
                            key={link.name}
                            delay={80 + index * 70}
                            style={[styles.cardSlot, isMobile && styles.mobileCardSlot]}
                        >
                            <HoverPressable
                                accessibilityRole='link'
                                containerStyle={styles.clickableCard}
                                onPress={() => Linking.openURL(link.url)}
                            >
                                <BentoCard style={styles.contactCard}>
                                    <View style={styles.cardHeader}>
                                        <View style={[styles.icon, { backgroundColor: `${link.color ?? tintColor}18` }]}>
                                            <Feather
                                                name={link.icon as keyof typeof Feather.glyphMap}
                                                size={24}
                                                color={link.color ?? primaryText}
                                            />
                                        </View>
                                        <Feather name='arrow-up-right' size={20} color={tintColor} />
                                    </View>
                                    <ThemedText type='subtitle'>{link.name}</ThemedText>
                                    <ThemedText style={styles.detail}>{link.detail}</ThemedText>
                                </BentoCard>
                            </HoverPressable>
                        </AnimatedEntrance>
                    ))}
                </View>
            </PageContainer>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        maxWidth: 820,
        paddingVertical: Spacing.md,
        gap: Spacing.xs
    },
    eyebrow: {
        fontSize: 12,
        lineHeight: 16
    },
    pageTitle: {
        fontSize: 38,
        lineHeight: 46
    },
    lede: {
        maxWidth: 700,
        fontSize: 18,
        lineHeight: 28
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.md
    },
    mobileGrid: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    cardSlot: {
        width: '48%',
        flexGrow: 1,
        minWidth: 280
    },
    mobileCardSlot: {
        width: '100%',
        minWidth: 0,
        flexGrow: 0
    },
    contactCard: {
        minHeight: 210
    },
    clickableCard: {
        borderRadius: 18
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        width: 48,
        height: 48,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detail: {
        lineHeight: 22
    }
});
