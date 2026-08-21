import React from 'react';

interface Props {
  className?: string;
}

export const GardenMotifDivider: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center my-8 md:my-12 ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-[#9cbcae] to-transparent w-24 sm:w-32 md:w-48"></div>
      <div className="mx-4 flex items-center gap-2 text-[#557c6b]">
        {/* Leaf SVG Motif */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#c59b27]">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
        <span className="w-1.5 h-1.5 rounded-full bg-[#557c6b]"></span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#557c6b]">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#9cbcae] to-transparent w-24 sm:w-32 md:w-48"></div>
    </div>
  );
};
