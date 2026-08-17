import { useEffect, useState } from 'react';
import { ActivityIndicator, Linking, ScrollView, StyleSheet, View } from 'react-native';
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

interface Repo {
    name: string;
    htmlUrl: string;
    description: string | null;
    homepage: string | null;
    language: string | null;
}

interface GitHubRepo {
    fork: boolean;
    name: string;
    html_url: string;
    description: string | null;
    homepage: string | null;
    language: string | null;
    updated_at: string;
}

const getLanguageColor = (language: string | null): string => {
    if (language && language in Colors && typeof Colors[language as keyof typeof Colors] === 'string') {
        return Colors[language as keyof typeof Colors] as string;
    }
    return Colors.defaultLanguage;
};

export default function Projects() {
    const { isMobile, isTablet } = useCutoffs();
    const tintColor = useThemeColor({}, 'tint');
    const [repos, setRepos] = useState<Repo[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const compact = isMobile || isTablet;

    useEffect(() => {
        const controller = new AbortController();

        fetch('https://api.github.com/users/alexandercho/repos', { signal: controller.signal })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`GitHub returned ${response.status}`);
                }
                return response.json() as Promise<GitHubRepo[]>;
            })
            .then((items) => items
                .filter((repo) => !repo.fork)
                .sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at))
                .map(({ name, html_url: htmlUrl, description, homepage, language }) => ({
                    name,
                    htmlUrl,
                    description,
                    homepage,
                    language
                })))
            .then(setRepos)
            .catch((reason: unknown) => {
                if (reason instanceof Error && reason.name !== 'AbortError') {
                    setError('Projects could not be loaded right now. Please try GitHub directly.');
                }
            })
            .finally(() => setIsLoading(false));

        return () => controller.abort();
    }, []);

    return (
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <PageContainer>
                <AnimatedEntrance>
                    <View style={styles.header}>
                        <ThemedText type='defaultSemiBold' style={[styles.eyebrow, { color: tintColor }]}>
                            PROJECTS
                        </ThemedText>
                        <ThemedText type='title' style={styles.pageTitle}>
                            Public work, experiments, and useful ideas.
                        </ThemedText>
                        <ThemedText style={styles.lede}>
                            A live view of my non-forked GitHub repositories, ordered by recent activity.
                        </ThemedText>
                    </View>
                </AnimatedEntrance>

                {isLoading ? (
                    <View style={styles.state}>
                        <ActivityIndicator size='large' color={tintColor} />
                        <ThemedText>Loading projects…</ThemedText>
                    </View>
                ) : null}

                {error ? (
                    <BentoCard>
                        <Feather name='alert-circle' size={28} color={tintColor} />
                        <ThemedText type='subtitle'>Couldn’t reach GitHub</ThemedText>
                        <ThemedText>{error}</ThemedText>
                        <HoverPressable
                            lift={2}
                            onPress={() => Linking.openURL('https://github.com/alexandercho')}
                        >
                            <ThemedText type='link'>Open my GitHub profile</ThemedText>
                        </HoverPressable>
                    </BentoCard>
                ) : null}

                {!isLoading && !error && repos.length === 0 ? (
                    <BentoCard>
                        <ThemedText type='subtitle'>No public projects found</ThemedText>
                        <ThemedText>There are no repositories to show yet.</ThemedText>
                    </BentoCard>
                ) : null}

                <View style={[styles.grid, compact && styles.compactGrid]}>
                    {repos.map((repo, index) => (
                        <AnimatedEntrance
                            key={repo.htmlUrl}
                            delay={Math.min(index * 45, 360)}
                            style={[styles.cardSlot, index % 5 === 0 && !compact && styles.wideSlot]}
                        >
                            <BentoCard style={styles.projectCard}>
                                <View style={styles.cardHeader}>
                                    <View style={styles.repoIcon}>
                                        <Feather name='folder' size={22} color={tintColor} />
                                    </View>
                                    {repo.language ? (
                                        <View style={styles.language}>
                                            <View
                                                style={[
                                                    styles.languageDot,
                                                    { backgroundColor: getLanguageColor(repo.language) }
                                                ]}
                                            />
                                            <ThemedText style={styles.languageText}>{repo.language}</ThemedText>
                                        </View>
                                    ) : null}
                                </View>
                                <ThemedText type='subtitle'>{repo.name}</ThemedText>
                                <ThemedText style={styles.description}>
                                    {repo.description ?? 'A public repository from my GitHub profile.'}
                                </ThemedText>
                                <View style={styles.actions}>
                                    <HoverPressable
                                        accessibilityRole='link'
                                        containerStyle={styles.actionContainer}
                                        lift={2}
                                        onPress={() => Linking.openURL(repo.htmlUrl)}
                                        style={styles.action}
                                    >
                                        <Feather name='github' size={17} color={tintColor} />
                                        <ThemedText type='link'>Repository</ThemedText>
                                    </HoverPressable>
                                    {repo.homepage ? (
                                        <HoverPressable
                                            accessibilityRole='link'
                                            containerStyle={styles.actionContainer}
                                            lift={2}
                                            onPress={() => Linking.openURL(repo.homepage!)}
                                            style={styles.action}
                                        >
                                            <Feather name='external-link' size={17} color={tintColor} />
                                            <ThemedText type='link'>Live demo</ThemedText>
                                        </HoverPressable>
                                    ) : null}
                                </View>
                            </BentoCard>
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
        fontSize: 18,
        lineHeight: 28
    },
    state: {
        minHeight: 240,
        alignItems: 'center',
        justifyContent: 'center',
        gap: Spacing.sm
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.md
    },
    compactGrid: {
        flexDirection: 'column'
    },
    cardSlot: {
        width: '31%',
        flexGrow: 1,
        minWidth: 290
    },
    wideSlot: {
        width: '48%'
    },
    projectCard: {
        minHeight: 260
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: Spacing.sm
    },
    repoIcon: {
        width: 42,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center'
    },
    language: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.xxs
    },
    languageDot: {
        width: 9,
        height: 9,
        borderRadius: 5
    },
    languageText: {
        fontSize: 13
    },
    description: {
        flex: 1,
        lineHeight: 22
    },
    actions: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.sm
    },
    action: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.xxs,
        paddingVertical: Spacing.xxs,
        paddingHorizontal: Spacing.xxs,
        borderRadius: 8
    },
    actionContainer: {
        borderRadius: 8
    }
});
