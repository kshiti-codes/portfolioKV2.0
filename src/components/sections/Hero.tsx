import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';
import SlidingArrowButton from '../ui/SlidingArrowButton';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  
  const fullText = "Frontend Developer Who Speaks AI\nBuilding Scalable, Secure, and User-Centric Applications";

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Start typewriter effect after main heading animation completes
    const startDelay = 800; // Start after heading animation
    const typingSpeed = 50; // milliseconds per character
    
    const typewriterTimer = setTimeout(() => {
      setShowCursor(true); // Show cursor when typing starts
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypewriterText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          // Hide cursor after a brief pause when typing completes
          setTimeout(() => setShowCursor(false), 1000);
        }
      }, typingSpeed);
      
      return () => clearInterval(typeInterval);
    }, startDelay);
    
    return () => clearTimeout(typewriterTimer);
  }, [fullText]);

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
            <span 
              className={`inline-block transition-all duration-700 ease-out ${
                isLoaded 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              Transforming Businesses
            </span>
            <br />
            <span 
              className={`inline-block transition-all duration-700 ease-out ${
                isLoaded 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              with
            </span> {' '}
            <span 
              className={`inline-block text-teal-600 transition-all duration-700 ease-out ${
                isLoaded 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              AI Powered
            </span>
            <br />
            <span 
              className={`inline-block transition-all duration-700 ease-out ${
                isLoaded 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Web Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed min-h-[3.5rem]">
            {typewriterText.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < typewriterText.split('\n').length - 1 && <br />}
              </span>
            ))}
            {showCursor && <span className="animate-pulse text-teal-600">|</span>}
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 ease-out ${
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <AnimatedButton 
              variant="primary" 
              size="md" 
              onClick={scrollToProjects}
              showArrow={true}
            >
              View My Work
            </AnimatedButton>
            
            <SlidingArrowButton
              text="Get in Touch"
              onClick={scrollToContact}
            />
          </div>
          
          <div 
            className={`mt-12 mb-20 flex flex-wrap justify-center gap-6 transition-all duration-700 ease-out ${
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <div className="flex items-center">
              <div className="h-1 w-8 bg-teal-500 mr-3"></div>
              <span className="text-gray-700">6+ Years Experience</span>
            </div>
            <div className="flex items-center">
              <div className="h-1 w-8 bg-teal-500 mr-3"></div>
              <span className="text-gray-700">20+ Projects Completed</span>
            </div>
            <div className="flex items-center">
              <div className="h-1 w-8 bg-teal-500 mr-3"></div>
              <span className="text-gray-700">20+ Happy Clients</span>
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