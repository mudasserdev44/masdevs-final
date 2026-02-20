
import React from 'react';
import { siteConfig } from '../../siteConfig';

/**
 * TechStackSection - Horizontal display of the company's tech capabilities.
 */
export const TechStackSection: React.FC = () => {
  const { techStack } = siteConfig;

  return (
    <section className="relative py-24 px-6 border-y border-white/5 z-10">
      <div className="container mx-auto max-w-6xl">
         <div className="flex flex-col md:flex-row items-center gap-12 justify-between">
            <div className="md:w-1/3 text-center md:text-left">
              <h3 className="text-2xl font-black uppercase italic mb-2 tracking-tight">Our <span className="text-[#30f797]">{techStack.title}</span></h3>
              <p className="text-white/40 font-medium uppercase tracking-widest text-xs">{techStack.subtitle}</p>
            </div>
            <div className="md:w-2/3 flex flex-wrap gap-3 justify-center md:justify-end">
              {techStack.items.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-[#30f797] transition-all cursor-default hover:border-[#30f797]/30"
                >
                  {tech}
                </span>
              ))}
            </div>
         </div>
      </div>
    </section>
  );
};
