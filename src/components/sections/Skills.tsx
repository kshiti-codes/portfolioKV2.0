import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../../constants/skills';

const Skills: React.FC = () => {
  const [category, setCategory] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' },
    { id: 'other', label: 'Other' }
  ];
  
  const filteredSkills = category === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === category);

  // Calculate wave delay based on distance from center
  const getWaveDelay = (index: number, totalSkills: number) => {
    const cols = Math.ceil(Math.sqrt(totalSkills));
    const row = Math.floor(index / cols);
    const col = index % cols;
    const centerRow = Math.floor(cols / 2);
    const centerCol = Math.floor(cols / 2);
    
    // Calculate distance from center
    const distance = Math.sqrt(Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2));
    return distance * 100; // 100ms per distance unit
  };

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  // Reset animation on category change
  useEffect(() => {
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 100);
  }, [category]);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technologies I Use
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            I work with a diverse set of modern technologies and tools to build exceptional web experiences.
          </p>
          <div className="h-1 w-20 bg-teal-500 mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                category === cat.id
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        <div 
          ref={skillsRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          {filteredSkills.map((skill, index) => {
            const waveDelay = getWaveDelay(index, filteredSkills.length);
            const IconComponent = skill.icon;
            
            return (
              <div 
                key={skill.id} 
                className={`group bg-white rounded-xl p-6 shadow-md border border-gray-100 transform transition-all duration-600 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-1 ${
                  isVisible 
                    ? 'scale-100 opacity-100 translate-y-0' 
                    : 'scale-75 opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${waveDelay}ms` : '0ms'
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-12 h-12 mb-3 transition-all duration-500 group-hover:scale-110 flex items-center justify-center"
                    style={{ 
                      color: isVisible ? skill.iconColor : '#D1D5DB'
                    }}
                  >
                    <IconComponent size={48} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div 
            className={`bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Always Learning</h3>
            <p className="text-gray-700 mb-6">
              Technology evolves rapidly, and I stay up-to-date with the latest trends and best practices. 
              Currently exploring new frameworks, cloud technologies, and development methodologies to deliver 
              cutting-edge solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js', 'AI/ML', 'Web3', 'Serverless', 'Microservices', 'JAMstack'].map((tech, index) => (
                <span 
                  key={index}
                  className={`bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium border border-teal-200`}
                  style={{
                    transitionDelay: isVisible ? `${getWaveDelay(filteredSkills.length - 1, filteredSkills.length) + 400 + index * 100}ms` : '0ms'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;