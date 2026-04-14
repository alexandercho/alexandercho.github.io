export const data = [
    {
        header: 'Education',
        subtitle: 'UC Berkeley, Class of 2019',
        degree: 'B.S. in Electrical Engineering & Computer Science',
        certification: 'SCET Certification in Entrepreneurship & Technology',
        coursework: [
            {
                category: 'Computer Science',
                courses: 'Data Structures, Database Systems, Efficient Algorithms & Intractable Problems, Artificial Intelligence, Machine Learning, Engineering Optimization Models'
            },
            {
                category: 'Electrical Engineering',
                courses: 'Designing Information Devices & Systems, Signals and Systems'
            },
            {
                category: 'Mathematics',
                courses: 'Discrete Mathematics & Probability Theory, Multivariable Calculus, Linear Algebra & Differential Equations, Mathematical Statistics in Data Science'
            },
            {
                category: 'Other',
                courses: 'Principles & Techniques of Data Science, Applied Data Science w/ Venture Applications, Professional Communication'
            }
        ],
        image: 'https://tile.loc.gov/image-services/iiif/service:pnp:highsm:21300:21324/full/pct:25/0/default.jpg'
    },
    {
        header: 'Professional Experience',
        positions: [
            {
                title: 'Senior Software Engineer',
                company: 'Grokker',
                period: '2024–Present',
                description: 'Technical owner across multiple product initiatives at a B2B wellness & learning SaaS platform serving ~35K active users and Fortune 500 enterprise clients. Leading mobile platform architecture, AI-powered product development, and cross-functional delivery.',
                highlights: [
                    'Led end-to-end migration from native React Native to Expo across Android, iOS, and web — standardizing build tooling and enabling faster, more reliable releases',
                    'Led the an integration pilot rollout and launched the Grokky web application and dashboard for enterprise clients',
                    'Architected the i18n foundation for hardcoded text translations across web and mobile',
                    'Mentored junior engineers and contributed to engineering hiring through candidate evaluation and coding exercise design',
                    'Added to PagerDuty rotation; maintained sub-30-min median acknowledge times for infrastructure alerts'
                ],
                image: 'https://media.licdn.com/dms/image/v2/D5610AQGaS26_bbJO8A/image-shrink_800/image-shrink_800/0/1728068522630?e=2147483647&v=beta&t=yziG8rrkUHuaqp7cipPGVImVXMNdsReNWlK-sV2pIrc'
            },
            {
                title: 'Software Engineer',
                company: 'Grokker',
                period: '2021–2024',
                description: 'Full-stack contributor across web, mobile, and TV applications at a fast-growing B2B SaaS startup. Quickly ramped up across multiple product areas and took increasing ownership of complex initiatives.',
                highlights: [
                    'Designed and launched a self-serve analytics dashboard adopted by Fortune 500 clients, enabling data-driven reporting without engineering involvement',
                    'Led frontend development for the React Native to Expo migration, becoming the team\'s go-to resource for mobile architecture',
                    'Built enterprise integrations and demo environments that directly supported deal closure',
                    'Introduced Prometheus for system monitoring, improving infrastructure visibility and reliability',
                    'Contributed across Group Incentives, Guides, Enterprise Dashboard, and mobile app development',
                    'Full-stack development using Node.js, React, React Native, AWS (S3, ECS, EC2), and GitLab CI/CD'
                ],
                image: 'https://cms.grokimg.net/About+Page/New%2BYT%2BBannerfinalv2.jpg'
            },
            {
                title: 'Software Engineering Contractor',
                company: 'Microsoft',
                period: '2020–2021',
                description: 'Developed internal software for Microsoft clients, working with Java, Azure, SQL Server, and KQL. Maintained internal emailing software using C#.',
                highlights: [],
                image: 'https://cdn.pixabay.com/photo/2019/11/07/07/48/microsoft-4608125_1280.jpg'
            }
        ]
    },
    {
        header: 'Technical Toolkit',
        categories: [
            {
                title: 'Languages',
                items: 'TypeScript, JavaScript, Python, Java'
            },
            {
                title: 'Frontend',
                items: 'React, React Native, Expo, Socket.io, i18n'
            },
            {
                title: 'Backend',
                items: 'Node.js, REST APIs, Elasticsearch'
            },
            {
                title: 'Databases',
                items: 'MongoDB, Redis, AWS RDS'
            },
            {
                title: 'Cloud / Infra',
                items: 'AWS (ECS, EC2, S3, Lambda, Bedrock), Terraform, Docker, GitLab CI/CD, GitHub Actions'
            },
            {
                title: 'Observability',
                items: 'Prometheus, Grafana, Kibana'
            },
            {
                title: 'AI / ML',
                items: 'OpenAI API, LangChain, ChromaDB, RAG/LLM pipelines, AWS Bedrock, Langfuse'
            }
        ],
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80'
    },
    {
        header: 'Personal Interests',
        text: 'When I\'m not coding, you\'ll probably find me in the kitchen. Cooking is my favorite creative outlet — a balance of precision and experimentation that mirrors how I approach engineering. You can take a look at what I\'m cooking up on my Instagram.\n\nI also enjoy exploring new tools in Python, building small side projects, and learning about emerging tech in AI and developer productivity.',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80'
    }
];