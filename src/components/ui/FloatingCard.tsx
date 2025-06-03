import React, { useMemo } from 'react';

export interface FloatingCardProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animationSpeed?: 'slow' | 'normal' | 'fast';
  hoverEffect?: boolean;
  gradient?: 'primary' | 'secondary' | 'accent' | 'rainbow';
  className?: string;
  delay?: number; // Animation delay in seconds
  onClick?: () => void;
  borderWidth?: 'thin' | 'medium' | 'thick';
  randomAngle?: boolean; // Enable random rotation angle
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  size = 'md',
  animationSpeed = 'slow',
  hoverEffect = true,
  gradient = 'primary',
  className = '',
  delay = 0,
  onClick,
  borderWidth = 'medium',
  randomAngle = true
}) => {
  // Generate random rotation angle for each card instance
  const randomRotation = useMemo(() => {
    if (!randomAngle) return 0;
    return Math.random() * 30 - 15; // Random angle between -15 and +15 degrees
  }, [randomAngle]);
  // Size classes
  const sizeClasses = {
    sm: 'p-4 rounded-lg',
    md: 'p-6 rounded-xl',
    lg: 'p-8 rounded-2xl',
    xl: 'p-10 rounded-3xl'
  };

  // Animation speed classes
  const animationClasses = {
    slow: 'animate-bounce-slow',
    normal: 'animate-bounce-normal', 
    fast: 'animate-bounce-fast'
  };

  // Gradient options for borders
  const gradientClasses = {
    primary: 'bg-gradient-to-r from-teal-200 via-amber-100 to-orange-200',
    secondary: 'bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500',
    accent: 'bg-gradient-to-r from-teal-400 via-amber-400 to-orange-500',
    rainbow: 'bg-gradient-to-r from-purple-400 via-pink-400 via-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 to-indigo-400'
  };

  // Border width classes
  const borderClasses = {
    thin: 'p-[1px]',
    medium: 'p-[2px]',
    thick: 'p-[3px]'
  };

  const hoverClasses = hoverEffect 
    ? 'hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer' 
    : '';

  return (
    <div 
      className={`
        relative group animate-pulse
        ${animationClasses[animationSpeed]}
        ${hoverClasses}
        ${className}
      `}
      style={{
        animationDelay: `${delay}s`,
        transform: `rotate(${randomRotation}deg)`,
        transformOrigin: 'center center'
      }}
      onClick={onClick}
    >
      {/* Floating glow effects */}
      <div className="absolute -top-2 -left-2 w-1/3 h-1/3 bg-teal-400/20 rounded-full blur-xl filter animate-pulse" />
      <div className="absolute -bottom-2 -right-2 w-1/3 h-1/3 bg-amber-400/20 rounded-full blur-xl filter animate-pulse" 
           style={{ animationDelay: '1s' }} />
      
      {/* Gradient border container */}
      <div className={`
        relative
        ${gradientClasses[gradient]}
        ${borderClasses[borderWidth]}
        ${sizeClasses[size]}
        backdrop-blur-sm
        group-hover:shadow-lg
        group-hover:shadow-teal-500/25
      `}>
        {/* Transparent inner container */}
        <div className={`
          relative z-10
          bg-transparent
          backdrop-blur-sm
          ${sizeClasses[size]}
          border-0
          h-full w-full
        `}>
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-white/5 rounded-[inherit]" />
          
          {/* Content */}
          <div className="relative z-20 font-sans text-gray-800">
            {children}
          </div>
        </div>
      </div>
      
      {/* Additional hover glow */}
      {hoverEffect && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute -top-4 -left-4 w-1/2 h-1/2 bg-teal-400/30 rounded-full blur-2xl filter" />
          <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 bg-amber-400/30 rounded-full blur-2xl filter" />
        </div>
      )}
    </div>
  );
};

// Custom CSS animations - Add this to your global CSS or tailwind.config.js
const bounceAnimations = `
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0px) scaleY(1);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(-25px) scaleY(1.05);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

@keyframes bounce-normal {
  0%, 100% {
    transform: translateY(0px) scaleY(1);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(-20px) scaleY(1.04);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

@keyframes bounce-fast {
  0%, 100% {
    transform: translateY(0px) scaleY(1);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(-15px) scaleY(1.03);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

.animate-bounce-normal {
  animation: bounce-normal 2s ease-in-out infinite;
}

.animate-bounce-fast {
  animation: bounce-fast 1.5s ease-in-out infinite;
}
`;

export default FloatingCard;
export { bounceAnimations };