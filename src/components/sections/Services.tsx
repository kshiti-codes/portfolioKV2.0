import React, { useEffect, useRef, useState } from 'react';
import { services } from '../../constants/services';
import SlidingArrowButton from '../ui/SlidingArrowButton';
import { CheckCircle, Palette, Code, ShoppingCart, BarChart3, Bot, Settings, Smartphone } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="h-7 w-7 text-teal-600" />,
  Code: <Code className="h-7 w-7 text-teal-600" />,
  ShoppingCart: <ShoppingCart className="h-7 w-7 text-teal-600" />,
  BarChart3: <BarChart3 className="h-7 w-7 text-teal-600" />,
  Bot: <Bot className="h-7 w-7 text-teal-600" />,
  Settings: <Settings className="h-7 w-7 text-teal-600" />,
  Smartphone: <Smartphone className="h-7 w-7 text-teal-600" />,
};

const Services: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const animationRef = useRef<number>();

  // Add CSS to hide scrollbar
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .scroll-container::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Manual navigation functions
  const scrollToNext = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const cardWidth = 400;
    const currentScroll = scrollContainer.scrollLeft;
    const newPosition = currentScroll + cardWidth;
    
    scrollContainer.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    
    // Pause auto-scroll for 3 seconds after manual interaction
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const scrollToPrev = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const cardWidth = 400;
    const currentScroll = scrollContainer.scrollLeft;
    const newPosition = currentScroll - cardWidth;
    
    scrollContainer.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    
    // Pause auto-scroll for 3 seconds after manual interaction
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isAutoScrolling) return;

    let scrollAmount = 0;
    const cardWidth = 400; // 384px width (w-96) + 16px gap
    const totalWidth = services.length * cardWidth;

    const scrollStep = () => {
      if (scrollContainer && isAutoScrolling) {
        scrollAmount += 1.8; // Slower continuous scroll
        
        if (scrollAmount >= totalWidth) {
          scrollAmount = 0;
        }
        
        scrollContainer.scrollLeft = scrollAmount;
        animationRef.current = requestAnimationFrame(scrollStep);
      }
    };

    animationRef.current = requestAnimationFrame(scrollStep);

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
    
    const handleMouseLeave = () => {
      if (isAutoScrolling) {
        animationRef.current = requestAnimationFrame(scrollStep);
      }
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isAutoScrolling]);

  // Create duplicated services for seamless loop
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <section id="services" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services I Offer</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            I provide a range of web development services to help businesses establish a strong online presence.
          </p>
          <div className="h-1 w-20 bg-teal-500 mx-auto mt-4"></div>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-hidden gap-4 pb-4 scroll-container"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {duplicatedServices.map((service, index) => (
              <div 
                key={`${service.id}-${index}`}
                className="flex-shrink-0 w-80 sm:w-96 md:w-80 lg:w-96 xl:w-96 2xl:w-96"
              >
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl h-full">
                  <div className="bg-teal-50 p-3 sm:p-4 rounded-full inline-block mb-4 sm:mb-6">
                    {iconMap[service.icon]}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 text-justify">{service.description}</p>
                  
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* <div className="pt-3 sm:pt-4 border-t border-gray-100">
                    <p className="text-base sm:text-lg font-semibold text-gray-900">{service.price}</p>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays for fade effect */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
        <button className="cursor-pointer duration-200 hover:scale-125 active:scale-100" title="Go Back" onClick={scrollToPrev}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-blue-300">
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
          </svg>
        </button>
        <button className="cursor-pointer duration-200 hover:scale-125 active:scale-100 float-right" title="Go Forward" onClick={scrollToNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-blue-300">
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M13 6L19 12M19 12L13 18M19 12H5"></path>
          </svg>
        </button>
        {/* Call to Action */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a custom solution?</h3>
              <p className="text-gray-700 mb-6 lg:mb-0">
                If you have specific requirements or need a custom package tailored to your business needs, I'd be happy to discuss your project and provide a personalized quote.
              </p>
            </div>
            <SlidingArrowButton
              text="Get in Touch"
              onClick={scrollToContact}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;