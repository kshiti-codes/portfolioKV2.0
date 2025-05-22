import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-teal-300 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-amber-300 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Crafting Digital Experiences That <span className="text-teal-600">Make an Impact</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Freelance web developer specializing in creating beautiful, functional websites 
            and web applications that help businesses grow online.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={scrollToProjects}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 flex items-center justify-center"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button 
              onClick={scrollToContact}
              className="bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 px-8 py-3 rounded-lg font-medium transition duration-300"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <div className="h-1 w-8 bg-teal-500 mr-3"></div>
              <span className="text-gray-700">5+ Years Experience</span>
            </div>
            <div className="flex items-center">
              <div className="h-1 w-8 bg-teal-500 mr-3"></div>
              <span className="text-gray-700">50+ Projects Completed</span>
            </div>
            <div className="flex items-center">
              <div className="h-1 w-8 bg-teal-500 mr-3"></div>
              <span className="text-gray-700">30+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-gray-700" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;