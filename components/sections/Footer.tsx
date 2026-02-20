import React, { useState } from 'react';
import { Linkedin, Instagram, Facebook, MapPin, Globe, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../siteConfig';

/**
 * Footer - Professional SaaS footer pulling from siteConfig.
 */
export const Footer: React.FC = () => {
  const { brand, navigation } = siteConfig;
  const currentYear = new Date().getFullYear();
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="relative pt-24 pb-12 px-6 border-t border-white/5 z-10 bg-[#0B0D14]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-16 md:gap-12 lg:gap-16 mb-24">
          
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center mb-8">
              {brand.logoUrl && !imgError ? (
                <img 
                  src={brand.logoUrl} 
                  alt={brand.name} 
                  onError={() => setImgError(true)}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              ) : (
                <div className="text-4xl font-black tracking-tighter flex items-center">
                  <span className="text-white">{brand.firstName}</span>
                  <span className="text-[#30f797] ml-1">{brand.lastName}</span>
                </div>
              )}
            </div>
            <p className="text-white/40 text-base md:text-sm font-medium leading-relaxed max-w-sm mb-10">
              Revolutionizing service businesses through autonomous AI operations and revenue infrastructure that works 24/7.
            </p>
            <div className="flex gap-5">
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-[#30f797] hover:text-[#30f797] transition-all" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-[#30f797] hover:text-[#30f797] transition-all" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-[#30f797] hover:text-[#30f797] transition-all" aria-label="Facebook"><Facebook size={20} /></a>
              <a 
                href="https://wa.me/+923075559805" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-[#30f797] hover:text-[#30f797] transition-all text-[#30f797]/80 hover:text-[#30f797]"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-black text-xs md:text-[11px] uppercase tracking-[0.4em] mb-10 opacity-60">Navigation</h4>
            <ul className="space-y-5">
              {navigation.map((item) => (
                <li key={item.targetId}>
                  <a href={`#${item.targetId}`} className="text-white/40 hover:text-[#30f797] text-base md:text-sm font-bold transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-black text-xs md:text-[11px] uppercase tracking-[0.4em] mb-10 opacity-60">Quick Links</h4>
            <ul className="space-y-5">
              <li><a href="#" className="text-white/40 hover:text-[#30f797] text-base md:text-sm font-bold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/40 hover:text-[#30f797] text-base md:text-sm font-bold transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start lg:col-span-1 text-center md:text-left">
             <h4 className="text-white font-black text-xs md:text-[11px] uppercase tracking-[0.4em] mb-10 opacity-60">Operations</h4>
             <div className="space-y-8 md:space-y-6">
                <div className="flex items-center gap-4 text-white/40 justify-center md:justify-start">
                  <MapPin size={18} className="text-[#30f797]" />
                  <span className="text-sm font-bold">{brand.location}</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-green-500/10 border border-green-500/20 shadow-inner">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[11px] font-black text-green-500 uppercase tracking-widest mt-0.5">Systems: Operational</span>
                </div>
             </div>
          </div>

        </div>

        <div className="w-full h-px bg-white/5 mb-16"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <p className="text-white/20 text-[11px] font-black uppercase tracking-[0.4em] text-center md:text-left leading-relaxed">
            © {currentYear} {brand.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/10 text-[10px] font-black uppercase tracking-[0.2em] italic">
            <span>Powered by GPT-4o</span>
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/10"></span>
            <span>n8n Integration</span>
          </div>
        </div>
      </div>
    </footer>
  );
};