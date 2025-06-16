import React, { useState, useEffect } from 'react';
import { testimonials } from '../../constants/testimonials';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
          <div className="h-1 w-20 bg-teal-500 mx-auto mt-4"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-gray-800 rounded-lg p-8 md:p-10 shadow-lg">
                  <div className="flex flex-col md:flex-row items-center mb-6">
                    <div className="mb-4 md:mb-0 md:mr-6">
                      <img src={testimonial.image} alt={testimonial.name} className="h-20 w-20 rounded-full object-cover border-2 border-teal-500" />
                    </div>
                    
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-gray-400">{testimonial.position}, {testimonial.company}</p>
                      <div className="flex items-center justify-center md:justify-start mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-300 text-lg italic relative">
                    <span className="absolute top-0 left-0 text-4xl text-teal-500 opacity-50">"</span>
                    <p className="pl-6">{testimonial.quote}</p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-teal-500' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4 z-10 pointer-events-none">
            <button
              onClick={() => setActiveIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length)}
              className="bg-gray-800/70 hover:bg-gray-700/70 text-white rounded-full p-2 pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
            </button>
            
            <button
              onClick={() => setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length)}
              className="bg-gray-800/70 hover:bg-gray-700/70 text-white rounded-full p-2 pointer-events-auto"
              aria-label="Next testimonial"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;