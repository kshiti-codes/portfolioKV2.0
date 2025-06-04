import React, { useState } from 'react';
import { projects } from '../../constants/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [showAll, setShowAll] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  
  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);
  const hasMoreProjects = filteredProjects.length > 3;

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .project-card {
          position: relative;
        }
        
        .project-card::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: linear-gradient(45deg, rgba(20, 184, 166, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
          border-radius: 20px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
          filter: blur(8px);
        }
        
        .project-card:hover::before {
          opacity: 1;
        }
      `}</style>
      
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Here are some of my recent projects. Each one was carefully crafted to meet the client's specific needs and business goals.
            </p>
            <div className="h-1 w-20 bg-teal-500 mx-auto mt-4"></div>
          </div>
          
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setFilter(category);
                  setShowAll(false); // Reset to show only first 3 when filter changes
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  filter === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => {
              const isNewCard = showAll && index >= 3;
              return (
                <div 
                  key={project.id} 
                  className={`project-card bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:transform hover:-translate-y-2 relative
                    ${isNewCard ? 'animate-fadeInUp' : ''}
                  `}
                  style={{
                    animationDelay: isNewCard ? `${(index - 3) * 150}ms` : '0ms',
                  }}
                >
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-60 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {project.category}
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-700 mb-4 text-justify">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <a 
                        href={project.link ? project.link : project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer group relative bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs px-4 py-2 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-38 h-9"
                      >
                        <div className="relative flex items-center justify-center gap-1.5">
                          <span className="relative inline-block overflow-hidden">
                            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                              {project.link && ( "View Project" )}
                              {!project.link && "View Code   " }
                            </span>
                            <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                              Explore
                            </span>
                          </span>
                          <svg
                            className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45"
                            viewBox="0 0 24 24"
                          >
                            <circle fill="currentColor" r="11" cy="12" cx="12"></circle>
                            <path
                              stroke-linejoin="round"
                              stroke-linecap="round"
                              stroke-width="2"
                              stroke="black"
                              d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
                            ></path>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {hasMoreProjects && !showAll && (
            <div className="text-center mt-12">
              <button
                onClick={() => {
                  setIsAnimating(true);
                  setShowAll(true);
                  // Smooth scroll to reveal new cards after animation starts
                  setTimeout(() => {
                    setIsAnimating(false);
                    const projectsGrid = document.querySelector('#projects .grid');
                    if (projectsGrid) {
                      projectsGrid.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                      });
                    }
                  }, 600);
                }}
                className="cursor-pointer relative after:content-['view_more'] after:text-white after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 after:duration-200 w-16 h-16 rounded-full border-4 border-sky-200 bg-black flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-36 group/button overflow-hidden active:scale-90"
              >
                <svg
                  className="w-3 fill-white delay-50 duration-200 group-hover/button:translate-y-12"
                  viewBox="0 0 384 512"
                >
                  <path
                    d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v306.8L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  ></path>
                </svg>
              </button>
            </div>
          )}
          
          {showAll && hasMoreProjects && (
            <div className="text-center mt-12">
              <button
                onClick={() => {
                  // Smooth scroll to top of projects section before collapsing
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'start' 
                    });
                  }
                  setTimeout(() => {
                    setShowAll(false);
                  }, 300);
                }}
                className="inline-flex items-center bg-white hover:bg-gray-100 text-gray-900 font-medium px-6 py-3 rounded-lg border border-gray-300 transition duration-300 shadow-md hover:shadow-lg"
              >
                View Less
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
                    d="M5 15l7-7 7 7" 
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
      
    </>
  );
};

export default Projects;