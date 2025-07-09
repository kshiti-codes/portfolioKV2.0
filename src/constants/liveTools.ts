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
    // Add more tools...
];