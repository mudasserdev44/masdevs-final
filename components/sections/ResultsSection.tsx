
import React from 'react';
import { Star } from 'lucide-react';
import { siteConfig } from '../../siteConfig';

/**
 * ResultsSection - Customer testimonials and success stories.
 */
export const ResultsSection: React.FC = () => {
  const { results } = siteConfig;

  return (
    <section id="results" className="relative py-24 px-6 bg-white/[0.02] scroll-mt-20 z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-20 uppercase tracking-tight italic">
          {results.title} <span className="text-[#30f797]">{results.highlight}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {results.testimonials.map((t, i) => (
            <div key={i} className="p-12 rounded-[2.5rem] border border-white/5 bg-[#1A1D2D] hover:border-[#30f797]/20 transition-all group shadow-2xl">
              <div className="flex text-[#30f797] mb-8">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={20} fill="currentColor" />)}
              </div>
              <p className="text-xl md:text-2xl italic mb-10 leading-relaxed font-light text-white/80 tracking-tight">"{t.quote}"</p>
              <div>
                <div className="text-lg font-black group-hover:text-[#30f797] transition-colors uppercase italic tracking-tight">— {t.name}</div>
                <div className="text-[10px] text-white/30 font-black uppercase tracking-[0.3em] mt-1">{t.niche}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
