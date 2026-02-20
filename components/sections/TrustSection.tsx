
import React from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, LucideIcon, ShieldAlert, Award } from 'lucide-react';
import { siteConfig } from '../../siteConfig';

const ICON_MAP: Record<string, LucideIcon> = {
  CheckCircle2,
  ShieldCheck,
  ArrowRight
};

/**
 * TrustSection - High-trust risk reversal section.
 * Features:
 * - Interactive badge grid with glassmorphism
 * - Premium 'Risk Reversal' seal design
 * - Subtle background grid integration
 */
export const TrustSection: React.FC = () => {
  const { trust } = siteConfig;

  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden z-10">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
      </div>

      <div className="container mx-auto max-w-6xl relative">
        {/* Trust Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24">
          {trust.items.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || ShieldCheck;
            return (
              <div key={i} className="group relative flex flex-col items-center gap-6 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-[#30f797]/30 transition-all duration-500">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#30f797]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="p-4 bg-[#30f797]/10 rounded-2xl border border-[#30f797]/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(48,247,151,0.2)] transition-all duration-500">
                  <Icon className="text-[#30f797]" size={28} />
                </div>
                <span className="font-black text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/40 group-hover:text-[#30f797] text-center transition-colors">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
        
        {/* Risk Reversal Premium Box */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#30f797]/20 to-blue-500/20 rounded-[2.5rem] blur-xl opacity-50"></div>
          <div className="relative bg-[#1A1D2D] border border-white/10 p-10 md:p-16 rounded-[2.5rem] text-center overflow-hidden shadow-2xl">
            {/* Visual Accents */}
            <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
              <Award size={120} className="text-[#30f797]" />
            </div>
            
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#30f797]/10 border border-[#30f797]/30 rounded-full mb-8">
              <ShieldAlert size={14} className="text-[#30f797]" />
              <span className="text-[#30f797] text-[10px] font-black uppercase tracking-[0.4em] leading-none mt-0.5">
                {trust.guarantee.label}
              </span>
            </div>
            
            <p className="text-lg md:text-2xl text-white/60 font-medium leading-relaxed italic max-w-3xl mx-auto relative z-10">
              "{trust.guarantee.text}"
            </p>

            <div className="mt-12 flex justify-center gap-4 opacity-20">
              <div className="w-12 h-px bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-12 h-px bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
