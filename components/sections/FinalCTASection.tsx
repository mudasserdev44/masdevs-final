
import React from 'react';
import { PrimaryButton } from '../PrimaryButton';
import { siteConfig } from '../../siteConfig';

interface FinalCTASectionProps {
  /** Handler for the main action button */
  onCtaClick: () => void;
}

/**
 * FinalCTASection - Closing conversion block.
 * Uses siteConfig.finalCta for copy and scarcity labels.
 */
export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onCtaClick }) => {
  const { finalCta } = siteConfig;

  return (
    <section id="final-cta" className="relative py-16 md:py-24 px-6 scroll-mt-20 z-10">
      <div className="container mx-auto max-w-4xl">
        <div className="relative p-8 sm:p-12 md:p-24 rounded-[2rem] md:rounded-[4rem] overflow-hidden text-center border border-[#30f797]/20 bg-gradient-to-b from-[#1A1D2D] to-transparent shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-80 h-48 md:h-80 bg-[#30f797]/10 blur-[60px] md:blur-[120px] pointer-events-none"></div>
          
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-black mb-6 md:mb-10 relative z-10 leading-tight md:leading-none uppercase italic tracking-tighter">
            {finalCta.headline} <br className="hidden sm:block" />
            <span className="text-[#30f797]">{finalCta.highlight}</span>
          </h2>
          <p className="text-sm md:text-xl text-white/50 mb-10 md:mb-16 relative z-10 max-w-xl mx-auto font-medium px-2">
            {finalCta.subheadline}
          </p>
          
          <div className="flex flex-col items-center gap-8 md:gap-10 relative z-10">
            <PrimaryButton onClick={onCtaClick} className="w-full sm:w-auto">
              {finalCta.ctaText}
            </PrimaryButton>
            <div className="flex items-center gap-3 text-white/30 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              {finalCta.availabilityLabel}: {finalCta.slotsRemaining} Slots Left
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
