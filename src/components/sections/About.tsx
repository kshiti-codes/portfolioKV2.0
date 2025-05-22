import React from 'react';
import { FileText, Award, Globe, Coffee } from 'lucide-react';

const About: React.FC = () => {
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
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Developer working on a laptop" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-teal-100 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-amber-100 rounded-lg -z-10"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-teal-600">Alex</span>, a passionate web developer
            </h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              With over 5 years of experience in web development, I've had the pleasure of working with businesses
              across various industries to create impactful digital experiences. My approach combines clean code,
              thoughtful design, and a focus on user experience to deliver websites that not only look great but
              also perform exceptionally well.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              I specialize in responsive design, e-commerce solutions, and content management systems that make it
              easy for my clients to manage their online presence. My goal is to help businesses establish a strong
              digital foundation that supports their growth and connects with their audience.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <FileText className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Education</h4>
                  <p className="text-gray-700">BSc in Computer Science</p>
                </div>
              </div>
              
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
                  <p className="text-gray-700">50+ Completed</p>
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
                href="#" 
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
      </div>
    </section>
  );
};

export default About;