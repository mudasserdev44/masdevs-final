
import React from 'react';

interface PrimaryButtonProps {
  /** Callback function triggered on click */
  onClick?: () => void;
  /** Primary label text of the button */
  children?: React.ReactNode;
  /** Optional tailwind classes for customization */
  className?: string;
  /** Supporting text displayed below the main label */
  subText?: string;
}

/**
 * PrimaryButton - Standardized neon green CTA button.
 * Responsively sized for both desktop and mobile.
 */
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  onClick, 
  children, 
  className = "", 
  subText = "(NO CREDIT CARD REQUIRED)" 
}) => (
  <button 
    onClick={onClick}
    className={`bg-[#30f797] text-[#121420] py-3.5 md:py-6 px-6 md:px-12 rounded-[2rem] md:rounded-[3rem] transform transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(48,247,151,0.3)] md:shadow-[0_0_40px_rgba(48,247,151,0.4)] flex flex-col items-center justify-center gap-0.5 md:gap-1 group ${className}`}
  >
    <span className="text-sm md:text-2xl font-black tracking-tight leading-tight uppercase">{children}</span>
    {subText && (
      <span className="text-[7px] md:text-[11px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] opacity-80">{subText}</span>
    )}
  </button>
);
