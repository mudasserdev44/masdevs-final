
import React from 'react';
import { Cpu, Layout, Smartphone, LucideIcon } from 'lucide-react';
import { PrimaryButton } from '../PrimaryButton';
import { siteConfig } from '../../siteConfig';

const ICON_MAP: Record<string, LucideIcon> = {
  Cpu,
  Layout,
  Smartphone
};

interface AISystemsSectionProps {
  onCtaClick: () => void;
}

/**
 * AISystemsSection - Highlights the core AI products and ROI stats.
 * Responsively stacked layout for mobile.
 */
export const AISystemsSection: React.FC<AISystemsSectionProps> = ({ onCtaClick }) => {
  const { aiSystems } = siteConfig;

  return (
    <section id="solution" className="relative py-16 md:py-24 px-6 scroll-mt-20 bg-white/[0.02] z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-10 md:mb-12 leading-tight uppercase tracking-tight italic">
              {aiSystems.headline} <span className="text-[#30f797]">{aiSystems.highlight}</span>
            </h2>
            <div className="space-y-8 md:space-y-12">
              {aiSystems.services.map((service, i) => {
                const Icon = ICON_MAP[service.icon] || Cpu;
                return (
                  <div key={i} className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center sm:items-start group text-center sm:text-left">
                    <div className="flex-shrink-0">
                      <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-[#30f797]/10 border border-[#30f797]/20 group-hover:bg-[#30f797]/20 transition-all">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#30f797]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black mb-1 md:mb-2 text-white/90 uppercase italic tracking-tight">{service.title}</h3>
                      <p className="text-sm md:text-lg text-white/50 leading-relaxed max-w-md font-medium mx-auto sm:mx-0">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative group mt-8 lg:mt-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#30f797] to-blue-600 rounded-[2rem] md:rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#1A1D2D] p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-white/5 flex flex-col items-center justify-center text-center shadow-2xl">
                <div className="text-6xl md:text-8xl font-black text-[#30f797] mb-2 md:mb-4 tracking-tighter">{aiSystems.stats.value}</div>
                <div className="text-xl md:text-2xl text-white font-black uppercase tracking-widest italic mb-6 md:mb-8">{aiSystems.stats.label}</div>
                <p className="text-white/40 text-xs md:text-sm max-w-xs mb-8 font-medium">
                  {aiSystems.stats.description}
                </p>
                <PrimaryButton onClick={onCtaClick} className="w-full">Get Your Audit</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
