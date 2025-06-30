import React, { useState } from 'react';
import { ExternalLink, Play, Users, Zap, Star, Code } from 'lucide-react';
import { liveTools } from '../../constants/liveTools';

const LiveTools: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = ['all', ...Array.from(new Set(liveTools.map(tool => tool.category)))];
  const filteredTools = selectedCategory === 'all' 
    ? liveTools 
    : liveTools.filter(tool => tool.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'Beta': return 'bg-yellow-500';
      case 'Coming Soon': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Beginner': return 'text-green-600 bg-green-50';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-50';
      case 'Advanced': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <>
      <style>{`
        .tool-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .tool-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.1), transparent);
          transition: left 0.5s ease;
        }
        
        .tool-card:hover::before {
          left: 100%;
        }
        
        .tool-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .pulse-dot {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
      `}</style>

      <section id="live-tools" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="h-4 w-4 mr-2" />
              Live Interactive Tools
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Try My Tools Live
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Experience my development skills firsthand with these interactive tools and demos. 
              Each one showcases different technologies and problem-solving approaches.
            </p>
            <div className="h-1 w-20 bg-teal-500 mx-auto mt-6"></div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition duration-300 ${
                  selectedCategory === category
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool) => (
              <div key={tool.id} className="tool-card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                {/* Tool Image/Preview */}
                <div className="relative h-50 bg-gradient-to-br from-teal-50 to-blue-50">
                  <img 
                    src={tool.image} 
                    alt={tool.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 flex items-center">
                    <div className={`pulse-dot w-2 h-2 ${getStatusColor(tool.status)} rounded-full mr-2`}></div>
                    <span className="bg-white bg-opacity-90 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                      {tool.status}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {tool.featured && (
                    <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </div>
                  )}

                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white rounded-full p-3 shadow-lg">
                        <Play className="h-6 w-6 text-teal-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tool Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 flex-1">{tool.title}</h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ml-2 ${getComplexityColor(tool.complexity)}`}>
                      {tool.complexity}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {tool.technologies.length > 3 && (
                      <span className="text-gray-500 text-xs">+{tool.technologies.length - 3} more</span>
                    )}
                  </div>

                  {/* Usage Stats */}
                  {/* {tool.usageCount && (
                    <div className="flex items-center text-gray-500 text-xs mb-4">
                      <Users className="h-3 w-3 mr-1" />
                      {tool.usageCount.toLocaleString()} interactions
                    </div>
                  )} */}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={tool.artifactUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-teal-600 hover:bg-teal-700 text-white text-center py-2 px-4 rounded-lg font-medium transition duration-300 flex items-center justify-center"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Try Live
                    </a>
                    
                    {tool.sourceCode && (
                      <a
                        href={tool.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                      >
                        <Code className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need a Custom Tool?
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                I can create custom interactive tools and applications tailored to your specific needs. 
                Let's discuss your requirements and build something amazing together.
              </p>
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LiveTools;