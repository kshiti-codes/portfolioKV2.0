import React from 'react';

export interface SlidingArrowButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const SlidingArrowButton: React.FC<SlidingArrowButtonProps> = ({
  text,
  onClick,
  className = ''
}) => {
  return (
    <div className={`text-center lg:text-right ${className}`}>
      <button 
        className="cursor-pointer float-right relative bg-white/10 py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-teal-600 transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px*5px*#00000080]"
        onClick={onClick}
      >
        <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
          <div className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"></div>
          <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset*1px*-1px_3px_0_black] h-full aspect-square bg-teal-600 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-white">
            <div className="size-[0.8rem] text-white group-hover:text-black group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="100%" width="100%">
                <path fill="currentColor" d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-white text-black">
          {text}
        </div>
      </button>
    </div>
  );
};

export default SlidingArrowButton;