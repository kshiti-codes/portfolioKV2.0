import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Slack, Mail, Code, ArrowUp, MapPin, Phone } from 'lucide-react';
import { useLenis } from '../../hooks/useLenis';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const lenisRef = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, {
        offset: 0,
        duration: 1.2,
      });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-teal-500 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-amber-500 filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-purple-500 filter blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center group">
                <a href="/" className="flex items-center">
                <img src="./images/logo.png" alt="logo" className="h-8 w-8 mr-2 rounded-lg object-cover" />
                <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  Kshiti Patel
                </span>
                </a>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Transforming businesses with AI-powered web solutions. Building scalable, secure, and user-centric applications.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Slack, href: "https://kshitis-worspace.slack.com/team/U090PREEWLD", label: "Slack" },
                  { icon: Github, href: "https://github.com/kshiti-codes", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/kshitipatel1999/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:ktp.fiverr@gmail.com", label: "Email" }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="group bg-gray-800 p-3 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-teal-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {['home', 'about', 'projects', 'services', 'testimonial'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="text-gray-400 hover:text-teal-400 capitalize transition-all duration-300 hover:translate-x-2 inline-block group"
                    >
                      <span className="border-b border-transparent group-hover:border-teal-400 transition-all duration-300">
                        {item}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative">
                Services
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-teal-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  'Website Development',
                  'AI Integration & Automation',
                  'E-commerce Solutions',
                  'Website Maintenance & Support',
                  'Interactive UI/UX Design',
                  'Custom Analytics & Business Dashboards',
                ].map((service) => (
                  <li key={service}>
                    <span className="text-gray-400 hover:text-teal-400 transition-colors duration-300 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative">
                Get In Touch
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-teal-500 rounded-full"></div>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-teal-600 transition-colors duration-300">
                    <Mail className="h-4 w-4 text-teal-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:kshiti.de@gmail.com" className="text-white hover:text-teal-400 transition-colors duration-300">
                      kshiti.de@gmail.com
                    </a><br></br>
                    <a href="mailto:ktp.fiverr@gmail.com" className="text-white hover:text-teal-400 transition-colors duration-300">
                      ktp.fiverr@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group">
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-teal-600 transition-colors duration-300">
                    <MapPin className="h-4 w-4 text-teal-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <span className="text-white">Hamburg, Germany</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Kshiti Patel. All rights reserved.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>Made with</span>
                  <span className="text-red-500 animate-pulse">❤️</span>
                  <span>and lots of</span>
                  <span className="text-amber-500">☕</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                
                {/* Scroll to Top Button */}
                <button
                  onClick={scrollToTop}
                  className={`bg-teal-600 hover:bg-teal-500 text-white p-2 rounded-full transition-all duration-300 transform ${
                    showScrollTop 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
                  }`}
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;