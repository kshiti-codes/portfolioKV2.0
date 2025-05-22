import React, { useState } from 'react';
import { skills } from '../../constants/skills';

const Skills: React.FC = () => {
  const [category, setCategory] = useState<string>('all');
  
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

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            I've acquired a diverse set of skills throughout my career as a web developer, allowing me to handle projects from concept to completion.
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
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map(skill => (
            <div key={skill.id} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-teal-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Skills</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['SEO Optimization', 'Web Accessibility', 'Performance Tuning', 'Cross-Browser Testing', 'Agile Methodology', 'Mobile-First Design', 'REST API Development', 'Server Management', 'CI/CD Implementation', 'Unit Testing'].map((skill, index) => (
              <span 
                key={index}
                className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm shadow-sm border border-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;