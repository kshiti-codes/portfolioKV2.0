import React, { useState, useCallback, useRef } from 'react';
import Footer from '../layout/Footer';
import { Upload, FileText, Target, Brain, PenTool, MapPin, RefreshCw , MessageSquare, Download, AlertCircle, CheckCircle, TrendingUp } from 'lucide-react';

type Analysis = {
    compatibilityScore: number;
    skillsMatch: {
        matched: string[];
        missing: string[];
        priority: string[];
    };
    keywordAnalysis: {
        matched: number;
        total: number;
        critical_missing: string[];
    };
    improvements: {
        section: string;
        current: string;
        suggested: string;
        impact: string;
    }[];
    coverLetter: string;
    interviewQuestions: string[];
};

const CVJobAnalyzer = () => {
    const [activeTab, setActiveTab] = useState('upload');
    const [jobDescription, setJobDescription] = useState('');
    const [cvText, setCvText] = useState('');
    const [analysis, setAnalysis] = useState<Analysis | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [compatibilityScore, setCompatibilityScore] = useState(0);
    const [copied, setCopied] = useState(false);
    const [isRegeneratingCoverLetter, setIsRegeneratingCoverLetter] = useState(false);
    
    const fileInputRef = useRef<HTMLInputElement>(null);
    // Simple test to verify Groq API works
    
    const analyzeWithGemini = async (jobDesc: string, cvContent: string) => {
        const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // Set in your .env file as VITE_GEMINI_API_KEY
        
        if (!API_KEY) {
            throw new Error('Gemini API key not configured.');
        }

        try {
            console.log('Analyzing with Gemini API...');
            
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
                method: 'POST',
                headers: {

                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `You are a professional CV analyst. Analyze this CV against the job description and return ONLY valid JSON in this exact format:
                            {
                                "compatibilityScore": 75,
                                "skillsMatch": {
                                    "matched": ["JavaScript", "React", "Node.js"],
                                    "missing": ["Python", "AWS", "Docker"],
                                    "priority": ["Python", "AWS"]
                                },
                                "keywordAnalysis": {
                                    "matched": 8,
                                    "total": 12,
                                    "critical_missing": ["Python", "AWS"]
                                },
                                "improvements": [
                                    {
                                        "section": "Skills",
                                        "current": "Basic JavaScript knowledge",
                                        "suggested": "Advanced JavaScript with ES6+ features",
                                        "impact": "high"
                                    }
                                ],
                                "coverLetter": "Dear Hiring Manager, [sample cover letter text]",
                                "interviewQuestions": [
                                    "Tell me about your experience with JavaScript",
                                    "How do you handle API integration?"
                                ]
                            }

                            IMPORTANT: 
                            - Create a professional, personalized cover letter that highlights the candidate's relevant skills
                            - Use the job description to identify key requirements and address them specifically
                            - Keep the cover letter concise but compelling (4-5 paragraphs of content around 400 words, for new paragraphs use \\n)
                            - Use a professional yet engaging tone
                            - Include specific examples where possible
                            - Provide realistic compatibility score based on actual match between CV and job requirements
                            - Focus on actionable improvements that would increase job match

                            JOB DESCRIPTION: ${jobDesc}

                            CV CONTENT: ${cvContent}

                            Return ONLY the JSON object, no additional text or explanation.`
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.3,
                        topK: 1,
                        topP: 1,
                        maxOutputTokens: 2048,
                    },
                    safetySettings: [
                        {
                            category: "HARM_CATEGORY_HARASSMENT",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        },
                        {
                            category: "HARM_CATEGORY_HATE_SPEECH",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        },
                        {
                            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        },
                        {
                            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        }
                    ]
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Gemini API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
            }

            const data = await response.json();
            console.log('Gemini API Response:', data);

            if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                throw new Error('Invalid response format from Gemini API');
            }

            const content = data.candidates[0].content.parts[0].text;
            console.log('Generated content:', content);

            // Extract JSON from the response
            const jsonMatch = content.match(/\{[\s\S]*\}/);
            return jsonMatch ? JSON.parse(jsonMatch[0]) : null;
            
        } catch (error) {
            console.error('Gemini API Error:', error);
            throw error;
        }
    };

    const regenerateCoverLetter = async () => {
        const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
        
        if (!API_KEY) {
            throw new Error('Gemini API key not configured');
        }
        
        setIsRegeneratingCoverLetter(true);
        
        try {
            console.log('Regenerating cover letter with Gemini...');
            
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `Write a professional, compelling cover letter for this job application. Make it unique and personalized based on the CV and job description. Return ONLY the cover letter text, no JSON or additional formatting.

                            JOB DESCRIPTION: ${jobDescription}

                            CV CONTENT: ${cvText}

                            Requirements:
                            - 4-5 paragraphs, around 400 words
                            - Professional yet engaging tone
                            - Highlight relevant skills and experience
                            - Address specific job requirements
                            - Include specific examples where possible
                            - Use \\n for new paragraphs
                            - Start with "Dear Hiring Manager," and end with "Sincerely, [Candidate Name]"

                            Return ONLY the cover letter text.`
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        topK: 1,
                        topP: 1,
                        maxOutputTokens: 1024,
                    }
                })
            });

            if (!response.ok) {
                throw new Error(`Gemini API Error: ${response.status}`);
            }

            const data = await response.json();
            const newCoverLetter = data.candidates[0].content.parts[0].text;
            
            if (analysis) {
                setAnalysis({
                    ...analysis,
                    coverLetter: newCoverLetter
                });
            }
            
        } catch (error) {
            console.error('Cover letter regeneration failed:', error);
            alert('Failed to regenerate cover letter. Please try again.');
        } finally {
            setIsRegeneratingCoverLetter(false);
        }
    };
    
    const handleFileUpload = (event : any) => {
        const file = event.target.files[0];
        if (file && file.type === 'text/plain') {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target && typeof e.target.result === 'string' ? e.target.result : '';
                setCvText(result);
            };
            reader.readAsText(file);
        }
    };
    
    const getScoreColor = (score: number) => {
        if (score >= 80) return 'text-green-600';
        if (score >= 60) return 'text-yellow-600';
        return 'text-red-600';
    };
    
    const getScoreBackground = (score: number) => {
        if (score >= 80) return 'bg-green-500';
        if (score >= 60) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const downloadCoverLetter = (text: string) => {
        const element = document.createElement('a');
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'cover-letter.txt';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    
    const tabs = [
        { id: 'upload', label: 'Input & Analysis', icon: Upload },
        { id: 'dashboard', label: 'Match Dashboard', icon: Target },
        { id: 'gaps', label: 'Gap Analysis', icon: AlertCircle },
        { id: 'enhance', label: 'CV Enhancement', icon: PenTool },
        { id: 'cover-letter', label: 'Cover Letter', icon: FileText },
        { id: 'skills', label: 'Skills Roadmap', icon: TrendingUp },
        { id: 'interview', label: 'Interview Prep', icon: MessageSquare }
    ];
    
    return (
        <div className="relative min-h-screen items-center pt-10 bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header */}
        <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
        AI-Powered CV & Job Analysis Tool
        </h1>
        <p className="text-lg text-gray-600">
        Get professional insights, close skill gaps, and optimize your applications
        </p>
        <p className="text-sm text-gray-400 mt-2"> powered by Gemini API</p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6 p-6">
        <nav className="flex space-x-5 overflow-x-auto">
        {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
                <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
                </button>
            );
        })}
        </nav>
        </div>
        
        {/* Tab Content */}
        <div className="min-h-96 p-6">
        {/* Upload & Input Tab */}
        {activeTab === 'upload' && (
            <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
            {/* Job Description Input */}
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Description
            </label>
            <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here..."
            className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="text-sm text-gray-500 mt-2">
            Characters: {jobDescription.length}
            </p>
            </div>
            
            {/* CV Input */}
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            Your CV/Resume
            </label>
            <div className="space-y-4">
            <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400"
            >
            <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-600">
            Click to upload CV (TXT format) or paste below
            </p>
            </div>
            <input
            ref={fileInputRef}
            type="file"
            accept=".txt"
            onChange={handleFileUpload}
            className="hidden"
            />
            <textarea
            value={cvText}
            onChange={(e) => setCvText(e.target.value)}
            placeholder="Or paste your CV text here..."
            className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="text-sm text-gray-500">
            Characters: {cvText.length}
            </p>
            </div>
            </div>
            </div>
            
            {/* Analyze Button */}
            <div className="text-center">
            <button
            onClick={async () => {
                setIsAnalyzing(true);
                try {
                    const result = await analyzeWithGemini(jobDescription, cvText);
                    
                    if (result) {
                        setAnalysis(result);
                        setCompatibilityScore(result.compatibilityScore || 0);
                        setActiveTab('dashboard'); // Switch to results tab
                    } else {
                        console.error('No analysis result received');
                        alert('Analysis failed. Please try again.');
                    }
                } catch (error) {
                    console.error('Analysis failed:', error);
                    alert('Analysis failed. Please check your API key and try again.');
                } finally {
                    setIsAnalyzing(false);
                }
            }}
            disabled={!jobDescription.trim() || !cvText.trim() || isAnalyzing}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 flex items-center mx-auto"
            >
            {isAnalyzing ? (
                <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Analyzing...
                </>
            ) : (
                <>
                <Brain className="w-4 h-4 mr-2" />
                Analyze with AI
                </>
            )}
            </button>
            </div>
            </div>
        )}
        
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && analysis && (
            <div className="space-y-6">
            {/* Compatibility Score */}
            <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Overall Compatibility</h3>
            <div className="flex items-center space-x-4">
            <div className="flex-1">
            <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Match Score</span>
            <span className={`text-sm font-bold ${getScoreColor(compatibilityScore)}`}>
            {compatibilityScore}%
            </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
            <div
            className={`h-3 rounded-full transition-all duration-500 ${getScoreBackground(compatibilityScore)}`}
            style={{ width: `${compatibilityScore}%` }}
            ></div>
            </div>
            </div>
            </div>
            </div>
            
            {/* Skills Analysis */}
            <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-800 mb-4">Matched Skills</h4>
            <div className="space-y-2">
            {analysis.skillsMatch.matched.map((skill, index) => (
                <div key={index} className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-green-700">{skill}</span>
                </div>
            ))}
            </div>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-800 mb-4">Missing Skills</h4>
            <div className="space-y-2">
            {analysis.skillsMatch.missing.map((skill, index) => (
                <div key={index} className="flex items-center">
                <AlertCircle className="w-4 h-4 text-red-600 mr-2" />
                <span className="text-red-700">{skill}</span>
                </div>
            ))}
            </div>
            </div>
            </div>
            
            {/* Keyword Analysis */}
            <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-4">Keyword Analysis</h4>
            <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
            {analysis.keywordAnalysis.matched}
            </div>
            <div className="text-sm text-blue-700">Matched Keywords</div>
            </div>
            <div className="text-center">
            <div className="text-2xl font-bold text-gray-600">
            {analysis.keywordAnalysis.total}
            </div>
            <div className="text-sm text-gray-700">Total Keywords</div>
            </div>
            <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
            {Math.round((analysis.keywordAnalysis.matched / analysis.keywordAnalysis.total) * 100)}%
            </div>
            <div className="text-sm text-blue-700">Match Rate</div>
            </div>
            </div>
            </div>
            </div>
        )}
        
        {/* Gap Analysis Tab */}
        {activeTab === 'gaps' && analysis && (
            <div className="space-y-6">
            <h3 className="text-xl font-semibold">Skill Gap Analysis</h3>
            
            {/* Priority Missing Skills */}
            <div className="bg-yellow-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-800 mb-4">High Priority Gaps</h4>
            <div className="grid gap-4">
            {analysis.skillsMatch.priority.map((skill, index) => (
                <div key={index} className="flex items-center justify-between bg-white rounded-lg p-4">
                <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-yellow-600 mr-3" />
                <span className="font-medium">{skill}</span>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                High Impact
                </span>
                </div>
            ))}
            </div>
            </div>
            
            {/* Critical Missing Keywords */}
            <div className="bg-red-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-800 mb-4">Critical Missing Keywords</h4>
            <div className="grid gap-2">
            {analysis.keywordAnalysis.critical_missing.map((keyword, index) => (
                <div key={index} className="bg-white rounded-lg p-3 flex items-center">
                <AlertCircle className="w-4 h-4 text-red-600 mr-2" />
                <span className="text-red-700">{keyword}</span>
                </div>
            ))}
            </div>
            </div>
            </div>
        )}
        
        {/* Enhancement Tab */}
        {activeTab === 'enhance' && analysis && (
            <div className="space-y-4">
            <h3 className="text-xl font-semibold">CV Enhancement Suggestions</h3>
            
            {analysis.improvements.map((improvement, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-semibold">{improvement.section}</h4>
                <span className={`px-3 py-1 rounded-full text-sm ${
                    improvement.impact === 'high' ? 'bg-red-100 text-red-800' :
                    improvement.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                }`}>
                {improvement.impact.charAt(0).toUpperCase() + improvement.impact.slice(1)} Impact
                </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                <div>
                <h5 className="font-medium text-gray-700 mb-2">Current</h5>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-700">{improvement.current}</p>
                </div>
                </div>
                <div>
                <h5 className="font-medium text-gray-700 mb-2">Suggested</h5>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-green-700">{improvement.suggested}</p>
                </div>
                </div>
                </div>
                </div>
            ))}
            </div>
        )}
        
        {/* Cover Letter Tab */}
        {activeTab === 'cover-letter' && analysis && (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">AI-Generated Cover Letter</h3>
                <div className="flex space-x-2">
                    <button 
                        onClick={() => copyToClipboard(analysis.coverLetter || 'No cover letter generated')}
                        className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                        {copied ? (
                            <>
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Copied!
                            </>
                        ) : (
                            <>
                                <FileText className="w-4 h-4 mr-2" />
                                Copy
                            </>
                        )}
                    </button>
                    <button 
                        onClick={regenerateCoverLetter}
                        disabled={isRegeneratingCoverLetter || !jobDescription.trim() || !cvText.trim()}
                        className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        {isRegeneratingCoverLetter ? (
                            <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Regenerating...
                            </>
                        ) : (
                            <>
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Regenerate
                            </>
                        )}
                    </button>
                    <button 
                        onClick={() => downloadCoverLetter(analysis.coverLetter || 'No cover letter generated')}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                    </button>
                </div>
            </div>
            
            {analysis.coverLetter ? (
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="p-6">
                        <div className="prose max-w-none">
                            <div className="whitespace-pre-line text-gray-800 leading-relaxed">
                                {analysis.coverLetter}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <div className="flex items-center">
                        <AlertCircle className="w-5 h-5 text-yellow-600 mr-3" />
                        <div>
                            <h4 className="text-yellow-800 font-medium">No Cover Letter Generated</h4>
                            <p className="text-yellow-700 text-sm mt-1">
                                The AI analysis didn't include a cover letter. Try re-running the analysis with more detailed job description and CV content.
                            </p>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Cover Letter Tips */}
            <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">📝 Cover Letter Tips</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                    <div className="space-y-2">
                        <p className="font-medium">✅ Do:</p>
                        <ul className="space-y-1 text-blue-600">
                            <li>• Customize for each application</li>
                            <li>• Use specific examples from your experience</li>
                            <li>• Research the company and role</li>
                            <li>• Keep it concise (1 page max)</li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <p className="font-medium">❌ Don't:</p>
                        <ul className="space-y-1 text-blue-600">
                            <li>• Use generic templates</li>
                            <li>• Repeat your entire resume</li>
                            <li>• Focus only on what you want</li>
                            <li>• Submit without proofreading</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* Regenerate Cover Letter Option */}
            <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">🔄 Want a Different Version?</h4>
                <p className="text-gray-600 mb-4">
                    You can regenerate the cover letter with a different tone or focus by running the analysis again.
                </p>
                <button 
                    onClick={() => setActiveTab('upload')}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                    Back to Analysis
                </button>
            </div>
        </div>
    )}                               
        
        {/* Skills Roadmap Tab */}
        {activeTab === 'skills' && analysis && (
            <div className="space-y-6">
            <h3 className="text-xl font-semibold">Skills Development Roadmap</h3>
            
            <div className="grid gap-6">
            {analysis.skillsMatch.priority.map((skill, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-semibold">{skill}</h4>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {2 + index} weeks
                </span>
                </div>
                
                <div className="space-y-3">
                <div>
                <h5 className="font-medium text-gray-700 mb-2">Learning Path</h5>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Start with official documentation and tutorials</li>
                <li>Complete hands-on projects</li>
                <li>Practice with real-world scenarios</li>
                </ul>
                </div>
                
                <div>
                <h5 className="font-medium text-gray-700 mb-2">Recommended Resources</h5>
                <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                Official Docs
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                Online Courses
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                Practice Projects
                </span>
                </div>
                </div>
                </div>
                </div>
            ))}
            </div>
            </div>
        )}
        
        {/* Interview Prep Tab */}
        {activeTab === 'interview' && analysis && (
            <div className="space-y-6">
            <h3 className="text-xl font-semibold">Interview Preparation</h3>
            
            <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-4">Likely Interview Questions</h4>
            <div className="space-y-4">
            {analysis.interviewQuestions.map((question, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                <div className="flex items-start">
                <MessageSquare className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                <div className="flex-1">
                <p className="font-medium text-gray-800 mb-2">{question}</p>
                <p className="text-sm text-gray-600">
                Prepare specific examples that demonstrate this skill from your experience.
                </p>
                </div>
                </div>
                </div>
            ))}
            </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-800 mb-4">Interview Tips</h4>
            <ul className="space-y-2 text-green-700">
            <li>• Research the company's recent projects and values</li>
            <li>• Prepare STAR method examples for behavioral questions</li>
            <li>• Practice explaining technical concepts in simple terms</li>
            <li>• Prepare thoughtful questions about the role and team</li>
            </ul>
            </div>
            </div>
        )}
        
        {/* Show message when no analysis is available */}
        {activeTab !== 'upload' && !analysis && (
            <div className="text-center py-12">
            <Brain className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">No Analysis Available</h3>
            <p className="text-gray-500 mb-4">
            Please upload your CV and job description in the Input & Analysis tab first.
            </p>
            <button
            onClick={() => setActiveTab('upload')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
            Go to Input Tab
            </button>
            </div>
        )}
        </div>
        <Footer />
        </div>
    );
};

export default CVJobAnalyzer;