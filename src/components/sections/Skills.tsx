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
      <section id="skills" className="py-20 px-4">
        <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(0px); }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: inline-flex;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        <div className="mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Skills & Technologies</h2>
          <div className="relative overflow-hidden">
            <div className="flex whitespace-nowrap animate-scroll" ref={skillsRef}>
              {/* First set */}
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={`first-${index}`}
                    className="inline-flex items-center justify-center mx-8 text-6xl opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
                    title={skill.name}
                    style={{ color: skill.iconColor }}
                  >
                    <Icon />
                  </div>
                );
              })}
              {/* Duplicate set for seamless loop */}
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={`second-${index}`}
                    className="inline-flex items-center justify-center mx-8 text-6xl opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
                    title={skill.name}
                    style={{ color: skill.iconColor }}
                  >
                    <Icon />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Skills;