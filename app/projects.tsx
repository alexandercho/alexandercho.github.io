import { Suspense, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Pressable, Linking, ActivityIndicator } from 'react-native';

import { Colors } from '@/constants/theme';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { useColorScheme } from '@/hooks/useColorScheme';

interface Repo {
    name: string;
    htmlUrl: string;
    description: string;
    homepage: string;
    language: string;
}

const getLanguageColor = (language: string): string => {
    const colorKey = language as keyof typeof Colors;
    if (colorKey in Colors && colorKey !== 'light' && colorKey !== 'dark') {
        return Colors[colorKey] as string;
    }
    return Colors.defaultLanguage;
};

export default function Projects() {
    const [repoData, setRepoData] = useState<Repo[]>([]);
    const colorScheme = useColorScheme();

    useEffect(() => {
        fetch('https://api.github.com/users/alexandercho/repos')
            .then(response => response.json())
            .then(jsonData => jsonData
                .filter((repo: any) => !repo.fork)
                .sort((a: any, b: any) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
                .map(({ name, html_url: htmlUrl, description, homepage, language }: any) =>
                    ({ name, htmlUrl, description, homepage, language })
                )
            )
            .then(setRepoData);
    }, []);

    const handleRepoPress = (url: string) => {
        Linking.openURL(url);
    };

    const loadingScreen = <ThemedView style={styles.loadingContainer}>
        <ActivityIndicator size='large' color={Colors[colorScheme ?? 'light'].tint} />
        <ThemedText style={styles.loadingText}>Loading projects...</ThemedText>
    </ThemedView>

    return (
        <Suspense fallback={loadingScreen}>
            <ScrollView style={styles.container}>
                <ThemedView style={styles.content}>
                    <ThemedText style={styles.title}>My Projects</ThemedText>
                    <ThemedText style={styles.subtitle}>
                        {repoData.length} repositories on GitHub
                    </ThemedText>

                    <ThemedView style={styles.projectsGrid}>
                        {repoData.map((repo, index) => (
                            <Pressable
                                key={index}
                                onPress={() => handleRepoPress(repo.htmlUrl)}
                            >
                                <ThemedView style={styles.projectCard}>
                                    <ThemedView style={styles.cardHeader}>
                                        <ThemedText style={styles.projectName}>
                                            {repo.name}
                                        </ThemedText>
                                        {repo.language && (
                                            <ThemedView style={styles.languageTag}>
                                                <ThemedView
                                                    style={[
                                                        styles.languageDot,
                                                        { backgroundColor: getLanguageColor(repo.language) }
                                                    ]}
                                                />
                                                <ThemedText style={styles.languageText}>
                                                    {repo.language}
                                                </ThemedText>
                                            </ThemedView>
                                        )}
                                    </ThemedView>

                                    {repo.description && (
                                        <ThemedText style={styles.description}>
                                            {repo.description}
                                        </ThemedText>
                                    )}

                                    {repo.homepage && (
                                        <Pressable
                                            onPress={() => handleRepoPress(repo.homepage)}
                                        >
                                            <ThemedText style={styles.homepage}>
                                                🌐 Live Demo
                                            </ThemedText>
                                        </Pressable>
                                    )}

                                    <ThemedText style={styles.viewOnGithub}>
                                        View on GitHub →
                                    </ThemedText>
                                </ThemedView>
                            </Pressable>
                        ))}
                    </ThemedView>
                </ThemedView>
            </ScrollView>
        </Suspense>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        alignSelf: 'center',
        width: '100%',
        padding: 24
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        marginTop: 12,
        fontSize: 16
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.7,
        marginBottom: 24
    },
    projectsGrid: {
        gap: 16
    },
    projectCard: {
        padding: 20,
        borderRadius: 12,
        borderWidth: 1,
        marginBottom: 16,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        flexWrap: 'wrap',
        gap: 8
    },
    projectName: {
        fontSize: 20,
        fontWeight: '600',
        flex: 1
    },
    languageTag: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        backgroundColor: 'rgba(128, 128, 128, 0.1)'
    },
    languageDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 6
    },
    languageText: {
        fontSize: 12,
        fontWeight: '500'
    },
    description: {
        fontSize: 14,
        opacity: 0.8,
        marginBottom: 12,
        lineHeight: 20
    },
    homepage: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 8
    },
    viewOnGithub: {
        fontSize: 14,
        fontWeight: '500',
        marginTop: 4
    }
});