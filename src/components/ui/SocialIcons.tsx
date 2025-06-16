// Alternative version using react-icons library
// First install: npm install react-icons

import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaHackerrank, 
  FaCodepen, 
  FaDribbble,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaPinterest,
  FaSlack,
} from 'react-icons/fa';
import { 
  SiLeetcode, 
  SiMedium, 
  SiHashnode,
  SiDevdotto,
  SiStackoverflow
} from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { HiDocumentText } from 'react-icons/hi';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color?: string;
}

export interface SocialIconsProps {
  links: SocialLink[];
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'glow' | 'minimal';
  className?: string;
}

const SocialIconsReactIcons: React.FC<SocialIconsProps> = ({
  links,
  size = 'md',
  variant = 'default',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-base',
    md: 'w-10 h-10 text-lg',
    lg: 'w-12 h-12 text-xl'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  // Icon mapping for react-icons
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      github: <FaGithub size={iconSizes[size]} />,
      linkedin: <FaLinkedin size={iconSizes[size]} />,
      twitter: <FaTwitter size={iconSizes[size]} />,
      email: <MdEmail size={iconSizes[size]} />,
      portfolio: <CgWebsite size={iconSizes[size]} />,
      resume: <HiDocumentText size={iconSizes[size]} />,
      hackerrank: <FaHackerrank size={iconSizes[size]} />,
      leetcode: <SiLeetcode size={iconSizes[size]} />,
      codepen: <FaCodepen size={iconSizes[size]} />,
      dribbble: <FaDribbble size={iconSizes[size]} />,
      medium: <SiMedium size={iconSizes[size]} />,
      hashnode: <SiHashnode size={iconSizes[size]} />,
      devto: <SiDevdotto size={iconSizes[size]} />,
      stackoverflow: <SiStackoverflow size={iconSizes[size]} />,
      instagram: <FaInstagram size={iconSizes[size]} />,
      youtube: <FaYoutube size={iconSizes[size]} />,
      facebook: <FaFacebook size={iconSizes[size]} />,
      pinterest: <FaPinterest size={iconSizes[size]} />,
      slack: <FaSlack size={iconSizes[size]} />,
    };
    
    return iconMap[iconName.toLowerCase()] || <CgWebsite size={iconSizes[size]} />;
  };

  // Enhanced color mapping for different platforms
  const getHoverColor = (iconName: string, customColor?: string) => {
    if (customColor) return customColor;
    
    const colorMap: Record<string, string> = {
      github: 'hover:text-gray-900 hover:bg-gray-100',
      linkedin: 'hover:text-blue-600 hover:bg-blue-50',
      twitter: 'hover:text-sky-500 hover:bg-sky-50',
      email: 'hover:text-teal-600 hover:bg-teal-50',
      portfolio: 'hover:text-emerald-600 hover:bg-emerald-50',
      resume: 'hover:text-amber-600 hover:bg-amber-50',
      hackerrank: 'hover:text-green-600 hover:bg-green-50',
      leetcode: 'hover:text-orange-600 hover:bg-orange-50',
      codepen: 'hover:text-gray-900 hover:bg-gray-100',
      dribbble: 'hover:text-pink-600 hover:bg-pink-50',
      medium: 'hover:text-gray-900 hover:bg-gray-100',
      hashnode: 'hover:text-blue-600 hover:bg-blue-50',
      devto: 'hover:text-gray-900 hover:bg-gray-100',
      stackoverflow: 'hover:text-orange-600 hover:bg-orange-50',
      instagram: 'hover:text-pink-600 hover:bg-pink-50',
      youtube: 'hover:text-red-600 hover:bg-red-50',
      facebook: 'hover:text-blue-600 hover:bg-blue-50',
      pinterest: 'hover:text-red-600 hover:bg-red-50',
      slack: 'hover:text-purple-600 hover:bg-purple-50',
    };
    
    return colorMap[iconName.toLowerCase()] || 'hover:text-teal-600 hover:bg-teal-50';
  };

  const renderIcon = (link: SocialLink, index: number) => {
    const baseClasses = `${sizeClasses[size]} flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer text-gray-600`;
    
    let variantClasses = '';
    let hoverClasses = getHoverColor(link.icon, link.color);
    
    switch (variant) {
      case 'glow':
        variantClasses = 'bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1';
        hoverClasses += ' hover:shadow-lg';
        break;
      case 'minimal':
        variantClasses = 'hover:scale-110 hover:-translate-y-1';
        break;
      default:
        variantClasses = 'bg-white border border-gray-200 shadow-sm hover:shadow-md hover:scale-105 hover:-translate-y-0.5';
        break;
    }

    return (
      <a
        key={index}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        title={link.name}
        className={`${baseClasses} ${variantClasses} ${hoverClasses} group`}
        style={{
          animationDelay: `${index * 100}ms`,
        }}
      >
        {/* Gradient glow effect for glow variant */}
        {variant === 'glow' && (
          <>
            <div className="absolute -top-1 -left-1 w-3/4 h-3/4 bg-teal-400/30 rounded-full blur-lg filter transition-all duration-500 group-hover:bg-teal-400/50" />
            <div className="absolute -bottom-1 -right-1 w-3/4 h-3/4 bg-amber-400/30 rounded-full blur-lg filter transition-all duration-500 group-hover:bg-amber-400/50" />
          </>
        )}
        
        <div className="relative z-10 transition-transform duration-300 group-hover:rotate-12">
          {getIcon(link.icon)}
        </div>
      </a>
    );
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link, index) => renderIcon(link, index))}
    </div>
  );
};

export default SocialIconsReactIcons;