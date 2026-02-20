
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Core Components
import { Navbar } from './components/Navbar';
import { QuizModal } from './components/QuizModal';

// Modular Sections
import { Hero } from './components/sections/Hero';
import { ProblemSection } from './components/sections/ProblemSection';
import { TargetNiches } from './components/TargetNiches';
import { AISystemsSection } from './components/sections/AISystemsSection';
import { TechStackSection } from './components/sections/TechStackSection';
import { ComparisonSection } from './components/sections/ComparisonSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { ResultsSection } from './components/sections/ResultsSection';
import { TrustSection } from './components/sections/TrustSection';
import { FinalCTASection } from './components/sections/FinalCTASection';
import { ValuePropsSection } from './components/sections/ValuePropsSection';
import { Footer } from './components/sections/Footer';

/**
 * LANDING PAGE ORCHESTRATOR
 * Optimized for mobile-first responsiveness and high-conversion flow.
 */
const App: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen bg-[#0A0B14] text-white selection:bg-[#30f797] selection:text-[#121420] relative overflow-x-hidden">
      {/* IMPROVED BACKGROUND SYSTEM */}

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Subtle Grain/Noise Texture */}
        <div className="absolute inset-0 noise-bg opacity-[0.03]"></div>
        
        {/* Layer 2: Drifting Atmospheric Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#30f797]/[0.07] rounded-full blur-[120px] animate-drift"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/[0.05] rounded-full blur-[120px] animate-drift-slow"></div>
        
        {/* Layer 3: Radial Masked Grid */}
        <div 
          className="absolute inset-0 opacity-[0.08]" 
          style={{ 
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, 
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
          }}
        ></div>
      </div>

      <Navbar onScrollTo={scrollToId} />

      <main className="relative z-10">
        <Hero onCtaClick={() => scrollToId('final-cta')} />
        <ProblemSection />
        <TargetNiches />
        <ValuePropsSection />
        <AISystemsSection onCtaClick={() => scrollToId('final-cta')} />
        <TechStackSection />
        <ComparisonSection />
        <HowItWorksSection />
        <ResultsSection />
        <TrustSection />
        <FinalCTASection onCtaClick={() => window.location.href = 'https://calendar.app.google/7YC1Yj7sV6UBYwPh6'} />
      </main>

      <Footer />

      {showQuiz && (
        <QuizModal 
          onClose={() => setShowQuiz(false)} 
          onAuditClaim={() => {
            setShowQuiz(false); 
            scrollToId('final-cta');
          }} 
        />
      )}

      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40">
        <button 
          onClick={() => setShowQuiz(true)} 
          className="bg-[#1A1D2D]/90 border border-white/10 backdrop-blur-xl p-3 md:p-5 rounded-2xl md:rounded-3xl hover:bg-[#1A1D2D] transition-all flex items-center gap-3 md:gap-4 group shadow-2xl"
        >
          <div className="bg-[#30f797] text-[#121420] px-2 py-1 md:p-2.5 rounded-lg md:rounded-xl font-black text-[8px] md:text-[9px] uppercase tracking-widest">
            Score
          </div>
          <span className="font-black text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/80 hidden xs:inline">
            Check ROI
          </span>
          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white/20 group-hover:text-[#30f797] group-hover:translate-x-1 transition-all" />
        </button>
      </div>
    </div>
  );
};

export default App;
