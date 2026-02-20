
import React from 'react';
import { siteConfig } from '../../siteConfig';

/**
 * HowItWorksSection - Visualizes the 3-step engagement process.
 */
export const HowItWorksSection: React.FC = () => {
  const { howItWorks } = siteConfig;

  return (
    <section className="relative py-24 px-6 z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-20 uppercase tracking-tight italic">
          {howItWorks.title} <span className="text-[#30f797]">{howItWorks.highlight}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10"></div>
          {howItWorks.steps.map((item, i) => (
            <div key={i} className="bg-[#1A1D2D] p-10 rounded-3xl border border-white/10 relative shadow-xl hover:border-[#30f797]/30 transition-all group">
              <div className="text-6xl font-black text-[#30f797]/10 mb-6 group-hover:text-[#30f797]/20 transition-all">{item.step}</div>
              <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight text-white/90">{item.title}</h3>
              <p className="text-white/50 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
