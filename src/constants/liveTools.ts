import { LiveTool } from '../types';

export const liveTools: LiveTool[] = [
    {
        id: 1,
        title: 'AI-Powered Job Application Analyzer',
        description: 'Complete AI-powered job application ecosystem that revolutionizes the entire career preparation process. Features intelligent resume analysis, personalized cover letter generation, skills gap identification, interview preparation, and strategic career roadmapping. Built with Claude AI to provide comprehensive job matching insights, application enhancement suggestions, and data-driven career guidance - transforming job seekers into top candidates.',
        shortDescription: 'AI-powered complete job application optimization and career enhancement platform',
        image: './images/projects/jobanalyzer.png', // You'll need to create/add this image
        category: 'AI Tools',
        technologies: ['React', 'TypeScript', 'NLP', 'PDF Processing', 'Groq AI'],
        artifactUrl: '/cv-job-analyzer',     
        sourceCode: '', // Add if you want to share code
        featured: true,
        usageCount: 847, // Start with a reasonable number
        complexity: 'Advanced',
        status: 'Live'
    },
    {
        id: 2,
        title: 'React Code Playground - (Built with Next.js)',
        description: 'An interactive online code editor and playground specifically designed for React developers. It allows users to write, test, and share React code snippets in real-time, providing instant feedback and rendering. Features include syntax highlighting, auto-completion, and the ability to import popular libraries. Ideal for learning, prototyping, and sharing React components and applications quickly and efficiently.',
        shortDescription: 'Interactive online code editor and playground for React developers',
        image: './images/projects/reactcodeplayground.png', // You'll need to create/add this image
        category: 'Interactive Tools',
        technologies: ['Next.js', 'TypeScript', 'Monaco Editor', 'Babel'],
        artifactUrl: 'https://reactcodeplayground.netlify.app',     
        sourceCode: 'https://github.com/kshiti-codes/CodePlayground',
        featured: false,
        usageCount: 1250, // Start with a reasonable number
        complexity: 'Intermediate',
        status: 'Live'
    }
];