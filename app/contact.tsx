import { StyleSheet, Pressable, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { ThemedScrollView } from '@/components/ThemedScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { Colors } from '@/constants/theme';
import { Spacing } from '@/constants/spacing';

import { useThemeColor } from '@/hooks/useThemeColor';

export default function Contact() {
    const backgroundColor = useThemeColor({}, 'primaryText');
    const borderColor = useThemeColor({}, 'border');
    const socialLinks = [
        {
            name: 'Email',
            icon: 'mail',
            url: 'mailto:alexanderswcho@gmail.com',
            color: Colors.email
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            url: 'https://www.linkedin.com/in/alexscho/',
            color: Colors.LinkedIn
        },
        {
            name: 'GitHub',
            icon: 'github',
            url: 'https://github.com/alexandercho',
            color: backgroundColor
        },
        {
            name: 'Instagram',
            icon: 'instagram',
            url: 'https://www.instagram.com/alexcelerator/',
            color: Colors.Instagram
        }
    ];

    return (
        <ThemedScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            <ThemedView style={styles.header}>
                <ThemedText type='title'>Get In Touch</ThemedText>
                <ThemedText>
                    {
                        'I\'d love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out.'
                    }
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.socialContainer}>
                <ThemedText type='title'>Connect with me</ThemedText>
                <ThemedView style={styles.socialLinks}>
                    {socialLinks.map((link) => (
                        <Pressable
                            key={link.name}
                            style={[styles.socialButton, { borderColor }]}
                            onPress={Linking.openURL as any}
                        >
                            <Feather name={link.icon as any} size={28} color={link.color} />
                            <ThemedText type='link'>
                                {link.name}
                            </ThemedText>
                        </Pressable>
                    ))}
                </ThemedView>
            </ThemedView>
        </ThemedScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        padding: Spacing.md,
        maxWidth: 600,
        alignSelf: 'center',
        width: '100%'
    },
    header: {
        marginBottom: Spacing.lg
    },
    socialContainer: {
        marginBottom: Spacing.lg
    },
    socialLinks: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: Spacing.sm
    },
    socialButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: Spacing.sm,
        borderRadius: Spacing.xs,
        borderWidth: 1,
        minWidth: 120
    }
});