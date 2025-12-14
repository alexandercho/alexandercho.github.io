import { ThemedText } from '@/components/ThemedText';
import { useEffect, useState } from 'react';

interface Repo {
    name: string;
    htmlUrl: string;
    description: string;
    homepage: string;
    language: string;
}

export default function Projects() {
    const [repoData, setRepoData] = useState<Repo[]>([]);
    useEffect(() => {
        fetch('https://api.github.com/users/alexandercho/repos')
            .then(response => response.json())
            .then(jsonData => jsonData
                .map(({ name, html_url: htmlUrl, description, homepage, language }: any) => ({ name, htmlUrl, description, homepage, language })
                )
            )
            .then(setRepoData)
    }, [])
    return (
        <ThemedText>{JSON.stringify(repoData)}</ThemedText>
    );
}