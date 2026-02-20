
import React from 'react';
import { Star } from 'lucide-react';
import { PrimaryButton } from '../PrimaryButton';
import { siteConfig } from '../../siteConfig';

interface HeroProps {
  /** Callback to trigger the final CTA or scroll to target */
  onCtaClick: () => void;
}

/**
 * Hero component - High-impact entry point of the landing page.
 * Strictly follows siteConfig.hero for all visual content.
 */
export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const { hero } = siteConfig;

  // Split the headline for styling while preserving the exact string flow
  // Stop Losing High-Value Leads and Increase Revenue by 35%+ Using AI Automation — Without Hiring More Staff
  const headPrefix = "Stop Losing High-Value Leads and ";
  const headHighlight = "Increase Revenue by 35%+";
  const headSuffix = " Using AI Automation — Without Hiring More Staff";

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-6 overflow-hidden min-h-screen flex flex-col justify-center z-10">
      {/* Visual Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none opacity-20">
        <div className="absolute top-10 md:top-20 left-10 w-48 md:w-64 h-48 md:h-64 bg-[#30f797] rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-10 md:bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-blue-600 rounded-full blur-[100px] md:blur-[150px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        {/* Trust Stack - Badge */}
        <div className="mb-8 md:mb-12 flex justify-center animate-float">
          <div className="bg-white/5 backdrop-blur-md px-4 md:px-6 py-2 rounded-full border border-white/10 flex items-center gap-2 md:gap-3">
            <div className="flex -space-x-1.5 md:-space-x-2">
              {[1, 2, 3].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i + 50}/64/64`} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-[#121420]" alt="customer avatar" />
              ))}
            </div>
            <p className="text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.1em] text-white/80">
              {hero.eyebrow}
            </p>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-[1.2] md:leading-[1.1] tracking-tighter mb-6 md:mb-10 px-2 max-w-6xl mx-auto">
          <span className="opacity-90">{headPrefix}</span>
          <span className="text-[#30f797]">{headHighlight}</span>
          <span className="opacity-90">{headSuffix}</span>
        </h1>

        {/* Subheadline */}
        <div className="max-w-3xl mx-auto mb-10 md:mb-16 px-4">
          <p className="text-base md:text-xl lg:text-2xl text-white/70 font-medium leading-relaxed">
            {hero.subheadline}
          </p>
        </div>

        {/* Primary Interaction */}
        <div className="flex flex-col items-center gap-8 md:gap-10">
          <PrimaryButton onClick={onCtaClick} className="w-full sm:w-auto">
            {hero.ctaText}
          </PrimaryButton>
          
          <div className="flex items-center gap-3 md:gap-4 text-white/60 bg-white/5 px-6 py-2 rounded-full border border-white/10">
            <div className="flex text-[#30f797]">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />) }
            </div>
            <p className="text-[10px] md:text-sm font-black uppercase tracking-widest italic opacity-80">
              {hero.socialProofText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
