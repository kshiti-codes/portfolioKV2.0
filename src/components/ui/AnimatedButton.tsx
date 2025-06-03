import React from 'react';

export interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  showArrow?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  showArrow = true,
  className = '',
  type = 'button'
}) => {
  const baseClasses = "group relative inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-8 py-3 text-base rounded-xl",
    lg: "px-10 py-4 text-lg rounded-xl"
  };
  
  const variantClasses = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30 focus:ring-teal-500",
    secondary: "bg-teal-600 text-white hover:bg-teal-700 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-teal-600/30 focus:ring-teal-500",
    outline: "bg-transparent text-teal-600 border-2 border-teal-600 hover:bg-teal-600 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-600/30 focus:ring-teal-500"
  };
  
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  const content = (
    <>
      {children}
      {showArrow && (
        <svg 
          aria-hidden="true" 
          viewBox="0 0 10 10" 
          height={10} 
          width={10} 
          fill="none" 
          className="mt-0.5 ml-2 -mr-1 stroke-current stroke-2"
        >
          <path 
            d="M0 5h7" 
            className="transition opacity-0 group-hover:opacity-100" 
          />
          <path 
            d="M1 1l4 4-4 4" 
            className="transition group-hover:translate-x-[3px]" 
          />
        </svg>
      )}
    </>
  );
  
  if (href && !disabled) {
    return (
      <div className="relative inline-flex items-center justify-center group">
        <div className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-teal-500 via-amber-500 to-pink-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200" />
        <a
          role="button"
          className={combinedClasses}
          href={href}
          title={typeof children === 'string' ? children : 'Button'}
        >
          {content}
        </a>
      </div>
    );
  }
  
  return (
    <div className="relative inline-flex items-center justify-center group">
      <div className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-teal-500 via-amber-500 to-pink-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200" />
      <button
        type={type}
        className={combinedClasses}
        onClick={onClick}
        disabled={disabled}
        title={typeof children === 'string' ? children : 'Button'}
      >
        {content}
      </button>
    </div>
  );
};

export default AnimatedButton;