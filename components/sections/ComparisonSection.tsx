
import React, { useRef, useState, useEffect } from 'react';
import { CheckCircle2, XCircle, Zap, ShieldAlert, ArrowRightLeft } from 'lucide-react';
import { siteConfig } from '../../siteConfig';

/**
 * ComparisonSection - Competitive differentiator table with mobile scroll progress slider.
 */
export const ComparisonSection: React.FC = () => {
  const { comparison } = siteConfig;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(isNaN(progress) ? 0 : progress);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    return () => el?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="comparison" className="relative py-24 md:py-32 px-6 bg-[#0B0D14] overflow-hidden z-10 scroll-mt-20">
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#30f797]/10 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight italic mb-6 leading-tight">
            {comparison.title} <span className="text-[#30f797]">{comparison.highlight}</span>
          </h2>
          <p className="text-white/40 font-black uppercase tracking-[0.5em] text-xs md:text-sm">Side-by-Side ROI Analysis</p>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollRef}
            className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide focus:outline-none mb-8 md:mb-0"
          >
            <div className="min-w-[700px] md:min-w-full overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-white/10 bg-[#121420]/50 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <table className="w-full text-left border-collapse table-fixed">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="py-8 md:py-10 px-6 md:px-10 text-white/30 font-black uppercase tracking-[0.3em] text-[9px] md:text-xs w-[24%]">Feature</th>
                    <th className="py-8 md:py-10 px-6 md:px-8 w-[38%] border-r border-white/5">
                      <div className="flex flex-col items-center gap-2">
                        <ShieldAlert size={16} className="text-red-500/50" />
                        <span className="text-white/40 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs text-center">Typical Business</span>
                      </div>
                    </th>
                    <th className="py-8 md:py-10 px-6 md:px-8 w-[38%] bg-[#30f797]/[0.02] relative text-center">
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#30f797]/50 to-transparent"></div>
                      <div className="flex flex-col items-center gap-2">
                        <Zap size={16} className="text-[#30f797]" />
                        <span className="text-[#30f797] font-black uppercase tracking-[0.2em] text-[10px] md:text-xs text-center">With MasDevs</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparison.rows.map((row, i) => (
                    <tr key={i} className="group hover:bg-white/[0.02] transition-all">
                      <td className="py-6 md:py-8 px-6 md:px-10">
                        <span className="text-white/40 group-hover:text-white/60 font-black text-[10px] md:text-sm uppercase tracking-widest">{row.feature}</span>
                      </td>
                      <td className="py-6 md:py-8 px-6 md:px-8 border-r border-white/5 text-center">
                        <div className="flex items-center gap-3 justify-center">
                          <XCircle size={12} className="text-red-500/40" />
                          <span className="font-bold text-xs md:text-lg text-white/50">{row.typical}</span>
                        </div>
                      </td>
                      <td className="py-6 md:py-8 px-6 md:px-8 bg-[#30f797]/[0.01] group-hover:bg-[#30f797]/[0.03] text-right">
                        <div className="flex items-center gap-3 justify-end">
                          <span className="font-black text-[#30f797] text-xs md:text-lg italic">{row.masdevs}</span>
                          <CheckCircle2 size={14} className="text-[#30f797]" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="md:hidden flex flex-col items-center gap-6 mt-4">
            <div className="w-48 h-1 bg-white/5 rounded-full relative overflow-hidden">
               <div 
                className="absolute top-0 bottom-0 bg-[#30f797] shadow-[0_0_10px_rgba(48,247,151,0.5)] transition-all duration-100"
                style={{ left: `${scrollProgress * 0.75}%`, width: '25%' }}
               />
            </div>
            <div className="flex items-center gap-3 py-3 px-6 bg-white/10 backdrop-blur-xl rounded-full border border-white/10">
              <ArrowRightLeft size={14} className="text-[#30f797]" />
              <span className="text-[#30f797] text-[10px] font-black uppercase tracking-[0.25em] whitespace-nowrap">Swipe to Compare</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
