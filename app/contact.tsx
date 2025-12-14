import {
    StyleSheet,
    Pressable,
    Linking,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ThemedScrollView } from '@/components/ThemedScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function Contact() {
    const backgroundColor = useThemeColor({}, 'text');
    const socialLinks = [
        {
            name: 'Email',
            icon: 'mail',
            url: 'mailto:alexanderswcho@gmail.com',
            color: '#EA4335',
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            url: 'https://www.linkedin.com/in/alexscho/',
            color: '#0A66C2',
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
            color: '#D62976',
        },
    ];

    return (
        <ThemedScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <ThemedView style={styles.header}>
                <ThemedText style={styles.title}>Get In Touch</ThemedText>
                <ThemedText style={styles.subtitle}>
                    {'I\'d love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out.'}
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.socialContainer}>
                <ThemedText style={styles.socialTitle}>Connect with me</ThemedText>
                <ThemedView style={styles.socialLinks}>
                    {socialLinks.map((link) => (
                        <Pressable
                            key={link.name}
                            style={styles.socialButton}
                            onPress={Linking.openURL as any}
                        >
                            <Feather name={link.icon as any} size={28} color={link.color} />
                            <ThemedText style={styles.socialButtonText}>{link.name}</ThemedText>
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
        padding: 24,
        maxWidth: 600,
        alignSelf: 'center',
        width: '100%',
    },
    header: {
        marginBottom: 32,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 24,
    },
    formContainer: {
        marginBottom: 32,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        fontSize: 16
    },
    inputError: {
        borderColor: '#ef4444',
    },
    textArea: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        minHeight: 120,
    },
    errorText: {
        color: '#ef4444',
        fontSize: 14,
        marginTop: 4,
    },
    submitButton: {
        backgroundColor: '#3b82f6',
        borderRadius: 8,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginTop: 8,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 32,
    },
    dividerLine: {
        flex: 1,
        height: 1,
    },
    dividerText: {
        marginHorizontal: 16,
        fontSize: 14,
        fontWeight: '600',
    },
    socialContainer: {
        marginBottom: 32,
    },
    socialTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 16,
        textAlign: 'center',
    },
    socialLinks: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 16,
    },
    socialButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        minWidth: 120,
    },
    socialButtonText: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '500',
    },
});