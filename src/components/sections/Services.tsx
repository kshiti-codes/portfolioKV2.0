import React from 'react';
import { services } from '../../constants/services';
import { CheckCircle, PaintBucket, Code, ShoppingCart, FileText } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  PaintBucket: <PaintBucket className="h-7 w-7 text-teal-600" />,
  Code: <Code className="h-7 w-7 text-teal-600" />,
  ShoppingCart: <ShoppingCart className="h-7 w-7 text-teal-600" />,
  FileText: <FileText className="h-7 w-7 text-teal-600" />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services I Offer</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            I provide a range of web development services to help businesses establish a strong online presence.
          </p>
          <div className="h-1 w-20 bg-teal-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <div 
              key={service.id}
              className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 transition-transform duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="bg-teal-50 p-4 rounded-full inline-block mb-6">
                {iconMap[service.icon]}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-gray-100">
                <p className="text-lg font-semibold text-gray-900">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a custom solution?</h3>
              <p className="text-gray-700 mb-6 lg:mb-0">
                If you have specific requirements or need a custom package tailored to your business needs, I'd be happy to discuss your project and provide a personalized quote.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;