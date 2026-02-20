
import React from 'react';

export interface Testimonial {
  name: string;
  niche: string;
  quote: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: string; 
}

export interface ComparisonRow {
  feature: string;
  typical: string;
  masdevs: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export interface TargetNiche {
  title: string;
  tag: string;
  description: string;
  impactValue: string;
  icon: string | React.ReactNode;
}

export interface AISystemService {
  title: string;
  description: string;
  icon: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    firstName: string;
    lastName: string;
    logoUrl: string;
    faviconUrl: string;
    ceo: string;
    location: string;
  };
  navigation: {
    label: string;
    targetId: string;
  }[];
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaText: string;
    socialProofText: string;
  };
  problem: {
    headline: string;
    highlight: string;
    subheadline: string;
    items: {
      icon: string;
      title: string;
      desc: string;
      isSolution?: boolean;
    }[];
  };
  niches: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    items: TargetNiche[];
  };
  valueProps: {
    headline: string;
    highlight: string;
    subheadline: string;
    items: ValueProp[];
  };
  aiSystems: {
    headline: string;
    highlight: string;
    services: AISystemService[];
    stats: {
      value: string;
      label: string;
      description: string;
    };
  };
  techStack: {
    title: string;
    subtitle: string;
    items: string[];
  };
  comparison: {
    title: string;
    highlight: string;
    rows: ComparisonRow[];
  };
  howItWorks: {
    title: string;
    highlight: string;
    steps: {
      step: string;
      title: string;
      desc: string;
    }[];
  };
  results: {
    title: string;
    highlight: string;
    testimonials: Testimonial[];
  };
  trust: {
    items: {
      icon: string;
      text: string;
    }[];
    guarantee: {
      label: string;
      text: string;
    };
  };
  finalCta: {
    headline: string;
    highlight: string;
    subheadline: string;
    ctaText: string;
    slotsRemaining: number;
    availabilityLabel: string;
  };
  quiz: {
    title: string;
    subheadline: string;
    ctaText: string;
    questions: QuizQuestion[];
  };
}
