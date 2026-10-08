export type ToolkitTechnology = {
    name: string;
    context: string;
    detail: string;
};

export type ToolkitCategory = {
    title: string;
    icon: string;
    technologies: ToolkitTechnology[];
};

const toolkitCategories: ToolkitCategory[] = [
    {
        title: 'Languages',
        icon: 'terminal',
        technologies: [
            {
                name: 'TypeScript',
                context: 'Core',
                detail: 'I use TypeScript across clients, APIs, and data access, pairing it with tRPC, Zod, Prisma, and database schemas to keep contracts stable end to end.'
            },
            {
                name: 'JavaScript',
                context: 'Foundation',
                detail: 'I work comfortably below the framework layer in JavaScript, including browser behavior, falsy handling, and the runtime assumptions that TypeScript cannot enforce.'
            },
            {
                name: 'Python',
                context: 'Hands-on',
                detail: 'I build typed asynchronous service logic with asyncio and use NumPy and multiprocessing when external or high-write-rate data requires dedicated processing.'
            },
            {
                name: 'Java',
                context: 'Targeted',
                detail: 'I use Java to modify Android native packages, call OS-specific APIs, remove unnecessary code, and patch integrations that React Native or Expo cannot handle directly.'
            },
            {
                name: 'Swift',
                context: 'Targeted',
                detail: 'I use Swift for Apple-specific integrations when a shared React Native implementation needs native OS behavior or a custom package patch.'
            },
            {
                name: 'Unix shell',
                context: 'Everyday',
                detail: 'I use the shell daily to inspect services and files, run build and deployment workflows, troubleshoot environments, and automate repeatable work.'
            }
        ]
    },
    {
        title: 'Product UI',
        icon: 'layout',
        technologies: [
            {
                name: 'React',
                context: 'Core',
                detail: 'I have built rapidly evolving product interfaces in React, introducing new component and state patterns as capabilities grew without forcing premature architectural rigidity.'
            },
            {
                name: 'React Native',
                context: 'Core',
                detail: 'I have shipped and maintained React Native experiences across iOS, Android, web, and television, including work at the Java and Swift native boundaries.'
            },
            {
                name: 'Expo',
                context: 'Core',
                detail: 'I led a production migration from native React Native tooling to Expo across Android, iOS, and web, standardizing builds and making releases faster and more reliable.'
            }
        ]
    },
    {
        title: 'APIs & frameworks',
        icon: 'share-2',
        technologies: [
            {
                name: 'Express',
                context: 'Hands-on',
                detail: 'I use Express to build focused TypeScript API services that run behind API Gateway and deploy cleanly to ECS or Lambda.'
            },
            {
                name: 'tRPC',
                context: 'Preferred',
                detail: 'I use tRPC to design APIs whose contracts propagate directly to TypeScript clients, reducing duplicated types and exposing breaking changes during development.'
            },
            {
                name: 'Zod',
                context: 'Preferred',
                detail: 'I pair Zod runtime schemas with TypeScript so external input is actually validated instead of being trusted simply because the application assigned it a type.'
            },
            {
                name: 'Prisma',
                context: 'Hands-on',
                detail: 'I use Prisma with PostgreSQL and pgvector to keep queries, migrations, and application models typed in my personal AI projects.'
            },
            {
                name: 'Socket.IO',
                context: 'Production',
                detail: 'I have implemented real-time application behavior with Socket.IO and understand both the productivity of its abstraction and the performance tradeoffs behind it.'
            },
            {
                name: 'ws',
                context: 'Direction',
                detail: 'I have evaluated ws as the migration path from Socket.IO where a thinner WebSocket layer would improve performance and integrate more cleanly with tRPC.'
            },
            {
                name: 'Django',
                context: 'Hands-on',
                detail: 'I have used Django when a Python service needed framework-owned authentication and injection protections instead of relying entirely on API Gateway or WAF.'
            },
            {
                name: 'Flask',
                context: 'Hands-on',
                detail: 'I use Flask for compact Python Lambda APIs where keeping startup time and framework overhead low matters more than built-in application features.'
            },
            {
                name: 'FastAPI',
                context: 'Considered',
                detail: 'I have assessed FastAPI for services that must publish reliable OpenAPI documentation, weighing its validation benefits against the smaller footprint of Flask.'
            }
        ]
    },
    {
        title: 'Data & messaging',
        icon: 'database',
        technologies: [
            {
                name: 'MongoDB',
                context: 'Deep production',
                detail: 'I operate MongoDB professionally and completed a zero-downtime managed replica-set upgrade from 4.2 to 8.3 to unlock native vector search.'
            },
            {
                name: 'PostgreSQL',
                context: 'Hands-on',
                detail: 'I design PostgreSQL schemas and queries for personal applications where a relational model provides clearer constraints than customer-driven document data.'
            },
            {
                name: 'pgvector',
                context: 'Personal projects',
                detail: 'I use pgvector to store and search embeddings inside PostgreSQL, avoiding a separate vector database at the scale of my personal AI applications.'
            },
            {
                name: 'Redis',
                context: 'Production',
                detail: 'I have used Redis as a production caching layer and am now comparing its feature requirements and ElastiCache cost against a Valkey migration.'
            },
            {
                name: 'Valkey',
                context: 'Migration path',
                detail: 'I am planning a Redis-to-Valkey migration around measurable ElastiCache savings while checking that features such as embedding support remain covered.'
            },
            {
                name: 'Kafka',
                context: 'At scale',
                detail: 'I use Kafka’s durable log and replay model for event-stream workloads whose scale and recovery requirements go beyond a simple queue.'
            },
            {
                name: 'Amazon MSK',
                context: 'Production',
                detail: 'I run Kafka through Amazon MSK so production event streams retain Kafka’s scaling and replay capabilities without self-managing the cluster.'
            },
            {
                name: 'Amazon SQS',
                context: 'Evaluated',
                detail: 'I evaluated SQS for managed queueing and ruled it out where the workflow depended on the durable log and replay behavior I get from Kafka.'
            },
            {
                name: 'Amazon SNS',
                context: 'Hands-on',
                detail: 'I have implemented SNS delivery for SMS sign-in and two-factor authentication, while preferring template-oriented services for frequently changing campaigns.'
            },
            {
                name: 'DynamoDB',
                context: 'Evaluated',
                detail: 'I prototyped with DynamoDB and found its document-size and indexing limits restrictive for vector data and agent-generated queries and aggregations.'
            }
        ]
    },
    {
        title: 'AI systems',
        icon: 'cpu',
        technologies: [
            {
                name: 'Vector search',
                context: 'Core',
                detail: 'I build embedding retrieval with MongoDB vector search in professional systems and pgvector in personal applications, choosing the engine around the existing data model.'
            },
            {
                name: 'Hybrid search',
                context: 'Production',
                detail: 'I implemented hybrid retrieval and used its stronger results to justify migrating a workload away from AWS Knowledge Bases.'
            },
            {
                name: 'Langfuse',
                context: 'Hands-on',
                detail: 'I use Langfuse to inspect AI traces and evaluations when deployment control, compliance, and usage cost matter more than hosted convenience.'
            },
            {
                name: 'LangSmith',
                context: 'Hands-on',
                detail: 'I have used LangSmith for managed AI tracing and access control, and understand where its early-stage convenience becomes expensive at higher volume.'
            },
            {
                name: 'AWS Bedrock',
                context: 'Production',
                detail: 'I use Bedrock to switch model providers behind consolidated AWS billing, while accounting for its slower access to some new model and coding-agent features.'
            },
            {
                name: 'AWS Knowledge Bases',
                context: 'Migrated',
                detail: 'I operated a retrieval workload on AWS Knowledge Bases, then migrated away when a custom hybrid-search approach produced better results for the available data.'
            }
        ]
    },
    {
        title: 'Observability',
        icon: 'activity',
        technologies: [
            {
                name: 'Elasticsearch',
                context: 'Production',
                detail: 'I use Elasticsearch to index production logs for customer-specific investigations where fast search matters more than aggregate error counts alone.'
            },
            {
                name: 'Logstash',
                context: 'Production',
                detail: 'I use Logstash in the ELK pipeline to ingest and normalize operational events before they reach searchable Elasticsearch indexes.'
            },
            {
                name: 'Kibana',
                context: 'Production',
                detail: 'I investigate support issues in Kibana by filtering and correlating customer activity across a large body of application logs.'
            },
            {
                name: 'Prometheus',
                context: 'Core',
                detail: 'I introduced Prometheus monitoring to improve infrastructure visibility and use its metrics as the basis for service health and alerting.'
            },
            {
                name: 'Grafana',
                context: 'Core',
                detail: 'I build Grafana dashboards around Prometheus and AWS signals so engineers can move from an alert to the operational context behind it.'
            },
            {
                name: 'CloudWatch',
                context: 'Production',
                detail: 'I use CloudWatch for AWS-native metrics, logs, and master health dashboards, including as a fallback when the primary observability stack is unavailable.'
            },
            {
                name: 'PagerDuty',
                context: 'On-call',
                detail: 'I work a PagerDuty rotation, connect infrastructure alerts to the on-call workflow, and have maintained a sub-30-minute median acknowledgement time.'
            }
        ]
    },
    {
        title: 'Delivery',
        icon: 'git-branch',
        technologies: [
            {
                name: 'GitHub Actions',
                context: 'Personal projects',
                detail: 'I build personal CI/CD workflows in GitHub Actions and manage their deployment credentials through GitHub secrets.'
            },
            {
                name: 'GitLab Pipelines',
                context: 'Production',
                detail: 'I maintain professional GitLab pipelines and helped move their execution away from instance runners that required recurring disk and package maintenance.'
            },
            {
                name: 'AWS CodeBuild',
                context: 'Production',
                detail: 'I run GitLab build workloads in CodeBuild to remove runner upkeep while keeping the build environment inside BAA-backed AWS infrastructure.'
            },
            {
                name: 'Terraform',
                context: 'Preferred',
                detail: 'I write Terraform to make AWS infrastructure reviewable and repeatable, with the long-term goal of reserving console and CLI changes for exceptional cases.'
            }
        ]
    },
    {
        title: 'AWS platform',
        icon: 'cloud',
        technologies: [
            {
                name: 'EC2',
                context: 'Production',
                detail: 'I operate EC2 where the economics of self-hosting data-heavy services justify owning patching, capacity, storage, and uptime.'
            },
            {
                name: 'ECS & Fargate',
                context: 'Core',
                detail: 'I deploy stateless services to ECS and Fargate so they can scale horizontally without a fixed server fleet, then cover startup lag with Lambda where needed.'
            },
            {
                name: 'Lambda',
                context: 'Core',
                detail: 'I use Lambda to absorb burst traffic, run focused backend work, and reduce service management when the invocation-based cost model fits.'
            },
            {
                name: 'API Gateway',
                context: 'Core',
                detail: 'I place API Gateway in front of Lambda and container services to provide a managed API boundary that integrates with AWS scaling and security controls.'
            },
            {
                name: 'Step Functions',
                context: 'Hands-on',
                detail: 'I define long-running jobs in Step Functions with explicit stages, failure handling, and rollback safeguards instead of supervising ad hoc overnight execution.'
            },
            {
                name: 'S3 & Glacier',
                context: 'Production',
                detail: 'I use S3 for application and shared object storage and design lifecycle migrations to move older data into Glacier as storage grows.'
            },
            {
                name: 'CloudFront',
                context: 'Production',
                detail: 'I distribute client-side web bundles through CloudFront and manage its cache and origin configuration alongside the rest of the AWS stack.'
            },
            {
                name: 'Route 53',
                context: 'Production',
                detail: 'I manage DNS in Route 53 because its CloudFront integration and Terraform support make routing changes reproducible.'
            },
            {
                name: 'RDS',
                context: 'Production',
                detail: 'I use RDS to run managed PostgreSQL when a relational database is appropriate and Aurora’s additional cost is not justified.'
            },
            {
                name: 'ElastiCache',
                context: 'Production',
                detail: 'I operate managed Redis in ElastiCache and am evaluating a Valkey migration against both workload compatibility and the projected cost reduction.'
            },
            {
                name: 'VPC & IAM',
                context: 'Production',
                detail: 'I configure VPC networking, security groups, and IAM policies to keep services reachable where intended and identities limited to their roles.'
            },
            {
                name: 'Secrets Manager',
                context: 'Production',
                detail: 'I store and expose application credentials through Secrets Manager in environments where BAA coverage and controlled AWS access are required.'
            },
            {
                name: 'Shield, WAF & GuardDuty',
                context: 'Production',
                detail: 'I use Shield, WAF, and GuardDuty to place managed traffic protection and threat detection around systems maintained by a lean engineering team.'
            },
            {
                name: 'Redshift & QuickSight',
                context: 'Limited exposure',
                detail: 'I have reviewed existing resources, but have not owned the design or operation of the analytics system.'
            }
        ]
    }
];

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
        categories: toolkitCategories,
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80'
    },
    {
        header: 'Personal Interests',
        text: 'When I\'m not coding, you\'ll probably find me in the kitchen. Cooking is my favorite creative outlet — a balance of precision and experimentation that mirrors how I approach engineering. You can take a look at what I\'m cooking up on my Instagram.\n\nI also enjoy exploring new tools in Python, building small side projects, and learning about emerging tech in AI and developer productivity.',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80'
    }
];
