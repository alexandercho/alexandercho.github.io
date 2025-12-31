import { Suspense, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Pressable, Linking, ActivityIndicator } from 'react-native';

import { Colors } from '@/constants/theme';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Spacing } from '@/constants/spacing';

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
                    <ThemedText type='title'>My Projects</ThemedText>
                    <ThemedText type='subtitle' style={{ marginVertical: Spacing.lg }}>
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
                                        <ThemedText type='subtitle'>
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
                                                <ThemedText>
                                                    {repo.language}
                                                </ThemedText>
                                            </ThemedView>
                                        )}
                                    </ThemedView>

                                    {repo.description && (
                                        <ThemedText style={{ marginVertical: Spacing.sm }}>
                                            {repo.description}
                                        </ThemedText>
                                    )}

                                    {repo.homepage && (
                                        <Pressable
                                            onPress={() => handleRepoPress(repo.homepage)}
                                        >
                                            <ThemedText>
                                                🌐 Live Demo
                                            </ThemedText>
                                        </Pressable>
                                    )}

                                    <ThemedText type='link'>
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
        padding: Spacing.md
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        marginTop: Spacing.xs,
        fontSize: 16
    },
    projectsGrid: {
        gap: Spacing.sm
    },
    projectCard: {
        padding: Spacing.md,
        borderRadius: Spacing.xs,
        borderWidth: 1,
        marginBottom: Spacing.sm,
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
        marginBottom: Spacing.xs,
        flexWrap: 'wrap',
        gap: Spacing.xxs
    },
    languageTag: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: Spacing.xxxs,
        borderRadius: Spacing.xs,
        backgroundColor: 'rgba(128, 128, 128, 0.1)'
    },
    languageDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 6
    }
});