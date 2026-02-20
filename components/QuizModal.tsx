
import React, { useState, useMemo } from 'react';
import { XCircle, CheckCircle2, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { PrimaryButton } from './PrimaryButton';

interface QuizModalProps {
  /** Callback to close the modal */
  onClose: () => void;
  /** Callback to claim the audit (usually scrolls to final CTA) */
  onAuditClaim: () => void;
}

/**
 * QuizModal - ROI Calculator tool with dynamic scoring logic.
 * Calculates 'Leaky Bucket Score' based on user inputs.
 */
export const QuizModal: React.FC<QuizModalProps> = ({ onClose, onAuditClaim }) => {
  const { quiz } = siteConfig;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  // Simple scoring logic: 
  // Each answer index (0-3) contributes to the "Leakage Score".
  // Higher indices generally represent worse situations (e.g. "Whenever we can" for speed-to-lead).
  const scoreData = useMemo(() => {
    if (!finished) return { leakage: 0, opportunity: 0 };
    
    // Weighted points based on the quiz structure
    // Speed to lead (Q2) and Reactivation (Q3) are high-impact
    const weights = [10, 30, 40, 20]; 
    const totalScore = answers.reduce((acc, curr, idx) => acc + (curr * weights[idx]), 0);
    
    // Normalize to 0-100 range (Max possible is 3 * 100 = 300 points)
    const normalizedLeakage = Math.min(Math.round((totalScore / 300) * 100), 98);
    // Potential revenue increase (mock calculation based on leakage)
    const revenueOpportunity = Math.round(normalizedLeakage * 0.45 + 15);

    return { 
      leakage: normalizedLeakage, 
      opportunity: revenueOpportunity 
    };
  }, [finished, answers]);

  const handleSelect = (index: number) => {
    const newAnswers = [...answers, index];
    setAnswers(newAnswers);
    
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 bg-[#121420]/95 backdrop-blur-xl">
      <div className="bg-[#1A1D2D] border border-white/10 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] max-w-2xl w-full relative shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Background Accent */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#30f797]/5 rounded-full blur-[80px] pointer-events-none"></div>
        
        <button onClick={onClose} className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-20">
          <XCircle size={32} />
        </button>

        {!finished ? (
          <div className="relative z-10">
            <div className="mb-10">
              <div className="flex justify-between items-end mb-4">
                <span className="text-[#30f797] font-black text-[10px] md:text-xs tracking-[0.3em] uppercase italic">
                  Analyzing Business Infrastructure
                </span>
                <span className="text-white/30 font-bold text-xs">
                  {currentQuestion + 1} / {quiz.questions.length}
                </span>
              </div>
              <div className="h-1.5 bg-white/5 w-full rounded-full overflow-hidden border border-white/5">
                <div 
                  className="h-full bg-[#30f797] transition-all duration-700 ease-out shadow-[0_0_15px_rgba(48,247,151,0.5)]" 
                  style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h3 className="text-2xl md:text-4xl font-black mb-10 uppercase italic tracking-tighter leading-tight text-white/90">
              {quiz.questions[currentQuestion].question}
            </h3>

            <div className="grid gap-4">
              {quiz.questions[currentQuestion].options.map((opt, i) => (
                <button 
                  key={i} 
                  onClick={() => handleSelect(i)} 
                  className="group relative p-6 text-left rounded-2xl border border-white/10 hover:border-[#30f797]/40 hover:bg-[#30f797]/5 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-black uppercase tracking-wide text-sm md:text-base text-white/60 group-hover:text-white transition-colors">
                      {opt}
                    </span>
                    <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#30f797]/50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[#30f797] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-4 relative z-10">
            {/* Success Header */}
            <div className="flex flex-col items-center mb-10">
              <div className="w-20 h-20 bg-[#30f797]/10 rounded-full flex items-center justify-center mb-6 border border-[#30f797]/30 shadow-[0_0_30px_rgba(48,247,151,0.1)]">
                <CheckCircle2 size={40} className="text-[#30f797]" />
              </div>
              <h3 className="text-3xl md:text-5xl font-black mb-2 uppercase italic tracking-tighter">
                {quiz.title}
              </h3>
              <p className="text-white/40 text-xs md:text-sm font-black uppercase tracking-[0.4em]">Audit Successful</p>
            </div>

            {/* Score Card Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <div className="p-8 rounded-[2rem] bg-red-500/[0.03] border border-red-500/10 flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle size={14} className="text-red-500/50" />
                  <span className="text-red-500/50 text-[10px] font-black uppercase tracking-widest">Leaky Bucket Score</span>
                </div>
                <div className="text-5xl md:text-6xl font-black text-red-500 tracking-tighter mb-1">
                  {scoreData.leakage}%
                </div>
                <span className="text-white/30 text-[10px] font-bold uppercase">Leakage Found</span>
              </div>

              <div className="p-8 rounded-[2rem] bg-[#30f797]/[0.03] border border-[#30f797]/10 flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={14} className="text-[#30f797]/50" />
                  <span className="text-[#30f797]/50 text-[10px] font-black uppercase tracking-widest">Revenue Impact</span>
                </div>
                <div className="text-5xl md:text-6xl font-black text-[#30f797] tracking-tighter mb-1">
                  +{scoreData.opportunity}%
                </div>
                <span className="text-white/30 text-[10px] font-bold uppercase">Growth Potential</span>
              </div>
            </div>

            {/* Opportunity Text */}
            <div className="max-w-md mx-auto mb-12">
              <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed">
                Your current infrastructure is losing high-value leads. Our systems can plug these leaks and scale your revenue <span className="text-[#30f797] font-black italic">immediately.</span>
              </p>
            </div>

            {/* Centered CTA */}
            <div className="flex justify-center">
              <PrimaryButton onClick={onAuditClaim}>
                {quiz.ctaText}
              </PrimaryButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
