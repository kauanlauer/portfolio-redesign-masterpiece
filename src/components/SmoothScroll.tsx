
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SmoothScrollProps {
  targetId: string;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ targetId }) => {
  const scrollToTarget = () => {
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button 
      onClick={scrollToTarget}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-arrow"
      aria-label="Rolar para baixo"
    >
      <ChevronDown className="h-8 w-8 text-white/80 animate-bounce" />
    </button>
  );
};

export default SmoothScroll;
