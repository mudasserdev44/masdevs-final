
import React from 'react';
import { Zap, UserPlus, Layout, TrendingDown, BarChart3, CheckCircle2, Shield, LucideIcon } from 'lucide-react';
import { siteConfig } from '../../siteConfig';

const ICON_MAP: Record<string, LucideIcon> = {
  Zap,
  UserPlus,
  Shield,
  TrendingDown,
  BarChart3,
  CheckCircle2,
  Layout
};

/**
 * ValuePropsSection - Grid of core benefits.
 * Optimized for mobile: centered content on small screens, better spacing.
 */
export const ValuePropsSection: React.FC = () => {
  const { valueProps } = siteConfig;

  return (
    <section id="value-props" className="relative py-24 md:py-32 px-6 scroll-mt-20 z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-3xl md:text-6xl font-black mb-8 uppercase tracking-tight italic leading-tight">
            {valueProps.headline} <span className="text-[#30f797]">{valueProps.highlight}</span>
          </h2>
          <p className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">
            {valueProps.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.items.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || Zap;
            return (
              <div key={i} className="group p-10 md:p-12 rounded-[2.5rem] bg-[#1A1D2D] border border-white/5 hover:border-[#30f797]/20 transition-all flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="w-16 h-16 rounded-2xl bg-[#30f797]/10 flex items-center justify-center mb-8 border border-[#30f797]/20 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(48,247,151,0.1)]">
                  <Icon className="text-[#30f797]" size={32} />
                </div>
                <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tight leading-tight">{item.title}</h3>
                <p className="text-white/40 text-lg leading-relaxed font-medium">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
