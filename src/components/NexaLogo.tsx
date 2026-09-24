import React from 'react';

interface NexaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
  showSubtitle?: boolean;
}

export const NexaLogo: React.FC<NexaLogoProps> = ({
  className = '',
  theme = 'light',
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* 
        The NEXA logo, wordmark, and symbol have been completely removed.
        Only the subtitle "CONCEPT SELECTION" is shown.
      */}
      <span
        className={`text-sm sm:text-base font-bold tracking-[0.2em] uppercase leading-none whitespace-nowrap ${
          isDark ? 'text-slate-300' : 'text-[#313639]'
        }`}
      >
        Concept Selection
      </span>
    </div>
  );
};
export default NexaLogo;
