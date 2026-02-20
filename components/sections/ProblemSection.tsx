
import React from 'react';
import { PhoneOff, Clock3, Users, Database, TrendingDown, CheckCircle2, LucideIcon } from 'lucide-react';
import { siteConfig } from '../../siteConfig';

const ICON_MAP: Record<string, LucideIcon> = {
  PhoneOff,
  Clock3,
  Users,
  Database,
  TrendingDown,
  CheckCircle2
};

/**
 * ProblemSection - Displays the "Leaky Bucket" pain points.
 * Optimized for mobile: centered content on small screens, improved spacing.
 */
export const ProblemSection: React.FC = () => {
  const { problem } = siteConfig;

  return (
    <section id="problem" className="relative py-20 md:py-32 px-6 bg-white/[0.02] scroll-mt-20 z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight italic leading-tight">
            {problem.headline} <span className="text-[#30f797]">{problem.highlight}</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
            {problem.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problem.items.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || CheckCircle2;
            return (
              <div 
                key={i} 
                className={`flex flex-col items-center text-center sm:items-start sm:text-left p-8 md:p-10 rounded-3xl border ${item.isSolution ? 'border-[#30f797]/30 bg-[#30f797]/5' : 'border-white/10 bg-white/5'} backdrop-blur-sm transition-all hover:bg-white/[0.07]`}
              >
                <div className="mb-6">
                  <Icon className={item.isSolution ? "text-[#30f797]" : "text-red-500"} size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-tight italic leading-tight">{item.title}</h3>
                <p className="text-base md:text-lg text-white/50 leading-relaxed font-medium">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
