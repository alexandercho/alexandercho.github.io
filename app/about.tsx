import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

const data = [
    {
        header: '🧑‍🎓 Education',
        text: 'UC Berkeley, Class of 2019 \nB.S. in Electrical Engineering & Computer Science \nSCET Certification in Entrepreneurship & Technology'
    },
    {
        header: '💼 Professional Experience',
        text: 'Senior Software Engineer – Grokker (2021–Present)\nOver the past four years, I’ve led and contributed to the development of web, mobile, and TV applications, working across the full stack to deliver scalable, user-focused products. \nAt Grokker, I’ve specialized in: \nFull-stack development using Node.js, React, and React Native\nLLM RAG pipelines, integrating large language models into production workflows\nSystem monitoring and performance with Prometheus and Grafana\nCloud infrastructure with AWS (S3, ECS, EC2)\nReal-time features via Socket.IO\nCI/CD automation using GitLab pipelines\nI’m passionate about designing systems that are both elegant and reliable — from intuitive front-ends to efficient backends.'
    },
    {
        header: '🧠 Technical Toolkit',
        text: 'Languages & Frameworks: JavaScript, TypeScript, Python, Node.js, React, React Native, Expo\nDatabases: MongoDB\nDevOps & Cloud: AWS (S3, ECS, EC2), GitLab CI/CD, Prometheus, Grafana\nOther Interests: Pandas, data analysis, AI integration'
    },
    {
        header: '🍳 Personal Interests',
        text: 'When I’m not coding, you’ll probably find me in the kitchen. Cooking is my favorite creative outlet — a balance of precision and experimentation that mirrors how I approach engineering.\nI also enjoy exploring new tools in Python, building small side projects, and learning about emerging tech in AI and developer productivity.'
    }
]

interface TextProps {
    text: string;
    header: string;
}

export default function About() {
    const renderSection = ({ header, text }: TextProps) => <ThemedView style={styles.section}>
        <ThemedText type='title'>{header}</ThemedText>
        <ThemedText type='default' style={styles.sectionText}>{text}</ThemedText>
    </ThemedView>

    return (
        <ThemedView style={styles.container}>
            {data.map(renderSection)}
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        //padding: 24
    },
    section: {
        marginVertical: 12
    },
    sectionText: {
        lineHeight: 15,
        marginVertical: 12,
        paddingLeft: 12
    }
});
