
import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Layout, 
  Target, 
  UserPlus, 
  BarChart3,
  Smartphone,
  Cpu,
  Scale,
  Home,
  Stethoscope,
  Hammer,
  Shield,
  Sparkles
} from 'lucide-react';
import { Testimonial, ValueProp, ComparisonRow, QuizQuestion, TargetNiche } from './types';

export const COMPANY_NAME = "MasDevs LLC";
export const PRIMARY_CTA_TEXT = "Book Free Strategy Call (No Credit Card Required)";

export const TARGET_NICHES: TargetNiche[] = [
  {
    title: "Personal Injury Lawyers",
    tag: "24/7 INTAKE & SPEED-TO-LEAD",
    description: "Instant automated qualification for accident leads before they call the next firm.",
    impactValue: "Eliminate missed night/weekend cases.",
    icon: "⚖️"
  },
  {
    title: "Real Estate Agents",
    tag: "LEAD NURTURING & REACTIVATION",
    description: "Turn your old database into fresh listings with intelligent follow-up sequences.",
    impactValue: "12+ fresh listings from 'dead' leads.",
    icon: "🏠"
  },
  {
    title: "Dental & Med Spas",
    tag: "APPOINTMENT & NO-SHOW REDUCTION",
    description: "Automated confirmations and rescheduling to maximize your clinic's billable hours.",
    impactValue: "60% reduction in average no-show rates.",
    icon: "🦷"
  },
  {
    title: "HVAC & Roofing",
    tag: "PRE-QUALIFICATION & QUOTING",
    description: "AI identifies high-intent leads before you ever roll a truck to a job site.",
    impactValue: "Save 40+ field hours per week.",
    icon: "🛠️"
  },
  {
    title: "Insurance Agencies",
    tag: "OLD LEAD REACTIVATION",
    description: "Revive dead policies and cold prospects through personalized AI-driven outreach.",
    impactValue: "Double policy renewal rates automated.",
    icon: "🛡️"
  },
  {
    title: "Cleaning Companies",
    tag: "AUTOMATED BOOKING & DISPATCH",
    description: "Frictionless scheduling and real-time dispatch updates without a back-office team.",
    impactValue: "100% autonomous dispatch management.",
    icon: "🧹"
  }
];

export const TECH_STACK = [
  "GoHighLevel", "Zoho", "Salesforce", "n8n", "OpenAI (GPT-4o)", 
  "LangChain", "Custom AI Agents", "MERN Stack", "Next.js", 
  "React Native", "Expo"
];

export const ADDITIONAL_SERVICES = [
  {
    title: "Autonomous AI Agents",
    description: "24/7 digital employees for lead qualification & booking that never sleep, quit, or complain.",
    icon: <Cpu className="w-6 h-6 text-neon" />
  },
  {
    title: "Custom Operations Hubs",
    description: "Tailored revenue dashboards that eliminate 90% of manual admin work and busy-work.",
    icon: <Layout className="w-6 h-6 text-neon" />
  },
  {
    title: "Cross-platform App Dev",
    description: "High-performance iOS & Android applications built with React Native and Expo.",
    icon: <Smartphone className="w-6 h-6 text-neon" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "James R.",
    niche: "Personal Injury Attorney",
    quote: "We were losing almost 30% of our accident leads because of slow response times. Since implementing MasDevs AI agents, our speed-to-lead is under 30 seconds. Game changer!"
  },
  {
    name: "Sarah M.",
    niche: "Real Estate Broker",
    quote: "Turned 500 dead leads into 12 fresh listings in just 10 days using their database reactivation sequence. The ROI was immediate."
  },
  {
    name: "Dr. Linda K.",
    niche: "Medical Spa Owner",
    quote: "Our no-show rate dropped by 60%. The AI handles reminders and rescheduling so my staff can focus on patients, not phone calls."
  },
  {
    name: "Mark T.",
    niche: "HVAC CEO",
    quote: "The system qualifies leads before my guys even get in the truck. No more wasting time on tire-kickers or service calls that don't fit our profile."
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "Never Miss Another Lead",
    description: "24/7 AI intake ensures every inquiry is answered instantly, even at 3 AM on a Sunday.",
    icon: "Clock"
  },
  {
    title: "Revive Dead CRM Leads",
    description: "Our autonomous agents breathe life into old databases, turning ignored leads into booked appointments.",
    icon: "UserPlus"
  },
  {
    title: "90% Less Admin Chaos",
    description: "Custom operations hubs eliminate manual data entry and busy work, freeing your team for high-value tasks.",
    icon: "Layout"
  },
  {
    title: "Scale Without Headcount",
    description: "Increase your output by 35%+ using digital employees that don't need benefits, breaks, or sleep.",
    icon: "TrendingUp"
  },
  {
    title: "Total Dashboard Control",
    description: "Real-time visibility into your revenue pipeline. Know exactly which leads are closing and why.",
    icon: "BarChart3"
  },
  {
    title: "Speed-to-Lead Dominance",
    description: "Reach prospects while they're still hot. Our AI qualifies and books appointments in seconds.",
    icon: "Zap"
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  { feature: "Lead Follow-up", typical: "Manual / Delayed", masdevs: "Autonomous AI (Instant)" },
  { feature: "CRM Setup", typical: "Generic / Basic", masdevs: "Custom Revenue Systems" },
  { feature: "Accountability", typical: "Zero / Guesswork", masdevs: "Real-time Dashboards" },
  { feature: "Response Time", typical: "Slow / 2-4 Hours", masdevs: "Speed-to-Lead (Seconds)" },
  { feature: "Contracts", typical: "Long-term Lock-in", masdevs: "Cancel Anytime" }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "How many leads do you typically receive per month?",
    options: ["0-20", "21-50", "51-150", "150+"]
  },
  {
    id: 2,
    question: "What's your current speed-to-lead (how fast you call a new lead)?",
    options: ["Under 5 mins", "1 hour", "Next day", "Whenever we can"]
  },
  {
    id: 3,
    question: "Do you have a system to reactivate old leads currently?",
    options: ["Yes, automated", "Yes, manual", "Not really", "What are old leads?"]
  },
  {
    id: 4,
    question: "What is your #1 goal for the next 90 days?",
    options: ["More leads", "Higher quality leads", "Less admin work", "Scaling revenue"]
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-6 h-6 text-neon" />,
  UserPlus: <UserPlus className="w-6 h-6 text-neon" />,
  Layout: <Layout className="w-6 h-6 text-neon" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-neon" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-neon" />,
  Zap: <Zap className="w-6 h-6 text-neon" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-neon" />,
  Target: <Target className="w-6 h-6 text-neon" />
};
