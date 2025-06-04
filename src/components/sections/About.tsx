import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Award, 
  Globe, 
  Coffee, 
  Calendar,
  Building2,
  Code2,
  Satellite,
  Building,
  Server,
  TrendingUp,
  Briefcase
} from 'lucide-react';
import { experiences } from '../../constants/experiences';
import ProfessionalEvolution from '../ui/ProfessionalEvolution';

const About: React.FC = () => {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimelineIndex(prev => (prev + 1) % experiences.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Icon renderer function
  const renderIcon = (experience: any) => {
    const iconProps = {
      size: experience.isClient ? 16 : 20,
      className: `transition-colors duration-300 ${
        experience.isCurrent 
          ? 'text-teal-600' 
          : experience.isClient
          ? activeTimelineIndex === experiences.indexOf(experience)
            ? 'text-blue-600' 
            : 'text-blue-500'
          : activeTimelineIndex === experiences.indexOf(experience)
          ? 'text-teal-500'
          : 'text-gray-600'
      }`
    };

    if (experience.iconType === 'url') {
      return (
        <img 
          src={experience.icon} 
          alt={`${experience.company} logo`}
          className={`${experience.isClient ? 'w-10 h-10' : 'w-10 h-10'} object-contain`}
        />
      );
    }

    // Lucide icons
    switch (experience.icon) {
      case 'Building2': return <Building2 {...iconProps} />;
      case 'Globe': return <Globe {...iconProps} />;
      case 'Satellite': return <Satellite {...iconProps} />;
      case 'Code2': return <Code2 {...iconProps} />;
      case 'Building': return <Building {...iconProps} />;
      case 'Server': return <Server {...iconProps} />;
      case 'TrendingUp': return <TrendingUp {...iconProps} />;
      case 'Briefcase': return <Briefcase {...iconProps} />;
      default: return <Building2 {...iconProps} />;
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="./images/about/profile.jpg" 
                alt="Developer working on a laptop" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-teal-100 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-amber-100 rounded-lg -z-10"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-teal-600">Kshiti</span>, a Full Stack Developer with a passion for AI
              and web development.
            </h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              While most developers build websites, I build digital experiences that learn and evolve. Think Netflix recommendations, but for your business challenges.
              <br/><br/><b>🧠 My Superpower?</b> I speak two languages fluently: 
              <br/><b>Human</b> (understanding your business needs) and<br/><b>AI</b> (making technology work smarter for you)
              <br/><br/><b>🛠️ What I Actually Do:</b>
              <ul className="list-disc pl-6 mt-2">
                <li>Transform "wouldn't it be cool if..." ideas into working AI features</li>
                <li>Build e-commerce platforms that know your customers better than they know themselves</li>
                <li>Create enterprise applications that scale from startup to IPO</li>
                <li>Integrate AI into existing systems without breaking what already works</li>
              </ul>

            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              <b>🎯 I Work Best With:</b>
              <ul className="list-disc pl-6 mt-2">
                <li>Visionary Founders who want AI as their competitive moat</li>
                <li>Growing Companies ready to scale intelligently</li>
                <li>Enterprise Teams modernizing legacy systems</li>
                <li>Anyone tired of "good enough" solutions</li>
              </ul>
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-lg mr-4">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Experience</h4>
                  <p className="text-gray-700">5+ Years</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Projects</h4>
                  <p className="text-gray-700">20+ Completed</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <FileText className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Education</h4>
                  <p className="text-gray-700">B.Tech in Information Technology</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Coffee className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Coffee Cups</h4>
                  <p className="text-gray-700">1000+ and counting</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="./pdf/resume.pdf" 
                download
                target='_blank'
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition duration-300"
              >
                Download Resume
                <svg 
                  className="ml-2 h-5 w-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <ProfessionalEvolution/>
      </div>
    </section>
  );
};

export default About;
