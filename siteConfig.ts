
import { SiteConfig } from './types';

/**
 * CENTRAL SITE CONFIGURATION
 * All content, headlines, and branding assets are managed here.
 */
export const siteConfig: SiteConfig = {
  brand: {
    name: "MasDevs LLC",
    firstName: "MAS",
    lastName: "DEVS",
    logoUrl: "https://iili.io/qJfKdDG.png",
    faviconUrl: "https://drive.google.com/uc?id=17zhWLrmG2nnqszf9E_dGeK1mdE-MgDai",
    ceo: "Waqas Ahmed",
    location: "Missouri, USA"
  },
  navigation: [
    { label: "The Leak", targetId: "problem" },
    { label: "Industries", targetId: "niches" },
    { label: "Value", targetId: "value-props" },
    { label: "Systems", targetId: "solution" },
    { label: "Results", targetId: "results" }
  ],
  hero: {
    eyebrow: "Trusted by SMBs in Law, Real Estate, Healthcare & Home Services",
    headline: "Stop Losing High-Value Leads and Increase Revenue by 35%+ Using AI Automation — Without Hiring More Staff",
    subheadline: "Stop using broken CRMs, slow follow-ups, and manual admin work. Start using AI-powered systems that respond instantly, nurture leads, and book appointments 24/7.",
    ctaText: "Book Free Strategy Call",
    socialProofText: "Rated by Growing Businesses"
  },
  problem: {
    headline: "Your Business is a",
    highlight: "Leaky Bucket.",
    subheadline: "Every missed call is a lost sale. Every late follow-up sends your customer to a competitor. Here's what's draining your revenue:",
    items: [
      { icon: "PhoneOff", title: "After-Hours Silence", desc: "Your phone stops ringing at 5 PM, but your leads don't stop searching." },
      { icon: "Clock3", title: "Slow Speed-to-Lead", desc: "Leads fill out forms but never get contacted within the 'golden' 5 minutes." },
      { icon: "Users", title: "Ghosted Appointments", desc: "No-shows and lost follow-ups are quietly costing you thousands every month." },
      { icon: "Database", title: "Scattered Data", desc: "Lead info is stuck in spreadsheets and broken CRMs instead of driving sales." },
      { icon: "TrendingDown", title: "Inconsistent Reviews", desc: "You're missing out on vital social proof because your review process isn't automated." },
      { icon: "CheckCircle2", title: "The Solution", desc: "MasDevs plugs these holes with AI systems that qualify, nurture, and book 24/7.", isSolution: true }
    ]
  },
  niches: {
    eyebrow: "Built for Service Businesses",
    headline: "Industries We Scale",
    subheadline: "If your business depends on leads and appointments, MasDevs is engineered to dominate your market.",
    items: [
      { title: "Personal Injury Lawyers", tag: "24/7 INTAKE", description: "Instant qualification for accident leads before they call the next firm.", impactValue: "Never miss high-value accident cases.", icon: "⚖️" },
      { title: "Real Estate Agents", tag: "DATABASE REACTIVATION", description: "Automated nurturing to turn 'dead' leads into active listings.", impactValue: "12+ fresh listings from old leads.", icon: "🏡" },
      { title: "Dental & Med Spas", tag: "NO-SHOW REDUCTION", description: "Fill your calendar with automated reminders and instant rescheduling.", impactValue: "60% reduction in average no-shows.", icon: "💉" },
      { title: "HVAC & Roofing", tag: "PRE-QUALIFICATION", description: "AI identifies high-intent jobs so your team stops driving to junk appointments.", impactValue: "Save 40+ field hours per week.", icon: "🛠️" },
      { title: "Insurance Agencies", tag: "POLICY FOLLOW-UPS", description: "Reactivate old leads and automate renewals to increase lifetime value.", impactValue: "Double policy renewal rates automated.", icon: "🛡️" },
      { title: "Cleaning Companies", tag: "INSTANT BOOKING", description: "Respond to inquiries and book jobs instantly with automated workflows.", impactValue: "100% autonomous dispatch management.", icon: "🧹" }
    ]
  },
  valueProps: {
    headline: "Outcome-Driven",
    highlight: "Revenue Systems",
    subheadline: "We don't just build bots. We build the sales infrastructure your business has been missing.",
    items: [
      { icon: "Zap", title: "Never Miss Another Lead Again", description: "Every call, form, and message is captured and responded to instantly — so no opportunity slips through the cracks." },
      { icon: "UserPlus", title: "Turn Dead Leads Into Appointments", description: "Old and ignored leads are reactivated automatically with smart follow-ups that bring customers back." },
      { icon: "Shield", title: "Reduce No-Shows by Up to 60%", description: "Automated reminders via SMS, Email, and WhatsApp ensure clients actually show up." },
      { icon: "TrendingDown", title: "Save 90% of Admin Work", description: "Your team stops chasing leads and updating spreadsheets — everything runs automatically." },
      { icon: "BarChart3", title: "See Every Deal in One Place", description: "A live sales dashboard shows where each lead stands and how much revenue is coming in." },
      { icon: "CheckCircle2", title: "Qualify Leads Automatically", description: "Only serious prospects reach your sales team so you stop wasting time on junk appointments." }
    ]
  },
  aiSystems: {
    headline: "Business Infrastructure",
    highlight: "Beyond Automation.",
    services: [
      { title: "Autonomous AI Agents", description: "24/7 digital employees that qualify leads, answer questions, and book appointments automatically.", icon: "Cpu" },
      { title: "Custom Operations Hubs", description: "Real-time dashboards that eliminate 90% of manual admin work and give you total visibility.", icon: "Layout" },
      { title: "Cross-platform App Dev", description: "High-performance iOS & Android apps built to support internal growth and engagement.", icon: "Smartphone" }
    ],
    stats: {
      value: "24/7",
      label: "Revenue Generation",
      description: "Your business continues to capture, nurture, and close deals while you and your team are asleep."
    }
  },
  techStack: {
    title: "Arsenal",
    subtitle: "Enterprise-grade tech, custom-built for SMB results.",
    items: ["GoHighLevel", "Zoho", "Salesforce", "n8n", "OpenAI (GPT-4o)", "LangChain", "Next.js", "React Native", "Expo"]
  },
  comparison: {
    title: "The MasDevs",
    highlight: "Difference",
    rows: [
      { feature: "Response Speed", typical: "Leads reply late or never", masdevs: "Every lead gets instant response 24/7" },
      { feature: "Follow-up", typical: "Manual follow-ups", masdevs: "Automated AI follow-ups on autopilot" },
      { feature: "Lead Capture", typical: "Missed calls = lost sales", masdevs: "No lead is ever missed" },
      { feature: "Visibility", typical: "Messy spreadsheets & tools", masdevs: "One clear live revenue dashboard" },
      { feature: "Lead Quality", typical: "Unqualified time-wasters", masdevs: "Only serious, pre-qualified prospects reach you" },
      { feature: "Systems", typical: "Random processes", masdevs: "Industry-specific proven workflows" },
      { feature: "Attendance", typical: "High no-show rate", masdevs: "Automated reminders reduce no-shows by 60%" },
      { feature: "Efficiency", typical: "Team buried in admin work", masdevs: "90% admin work eliminated" },
      { feature: "Availability", typical: "Business stops after hours", masdevs: "System works 24/7 even while you sleep" }
    ]
  },
  howItWorks: {
    title: "Simple 3-Step",
    highlight: "Process",
    steps: [
      { step: "01", title: "Free Strategy Call", desc: "We learn about your business, lead sources, and current growth goals." },
      { step: "02", title: "Diagnose The Leak", desc: "We identify exactly where leads are being lost and where automation creates impact." },
      { step: "03", title: "Deploy & Scale", desc: "We build your custom AI system that captures, nurtures, and books automatically." }
    ]
  },
  results: {
    title: "Success Stories",
    highlight: "From The Field",
    testimonials: [
      { name: "James R.", niche: "Personal Injury Attorney", quote: "We were losing almost 30% of our leads because staff couldn't answer at night. MasDevs deployed an AI Intake Agent and now we book consultations 24/7. Game changer!" },
      { name: "Sarah M.", niche: "Real Estate Broker", quote: "The database reactivation turned 500 dead leads into 12 fresh listings in just 10 days. The ROI was instant." },
      { name: "Dr. Linda K.", niche: "Aesthetic Clinic", quote: "Our no-show rate dropped by 60% since using automated AI reminders. It's like having an extra receptionist who never sleeps." },
      { name: "Mark T.", niche: "HVAC CEO", quote: "MasDevs built a system that qualifies our leads before my guys even get in the truck. We've saved countless hours of driving to junk leads." }
    ]
  },
  trust: {
    items: [
      { icon: "CheckCircle2", text: "Free Strategy Call" },
      { icon: "ShieldCheck", text: "No Long-term Contract" },
      { icon: "ArrowRight", text: "Cancel Anytime" },
      { icon: "ShieldCheck", text: "Satisfaction Guaranteed" }
    ],
    guarantee: {
      label: "RISK REVERSAL",
      text: "You risk nothing. You gain a revenue system that works 24/7. Every day without automation is a day your competitors respond faster."
    }
  },
  finalCta: {
    headline: "Ready to Stop",
    highlight: "Losing Leads?",
    subheadline: "Every day without automation costs you money. Join service businesses using AI systems to scale without hiring more staff.",
    ctaText: "Book Your Free Strategy Call Now",
    slotsRemaining: 4,
    availabilityLabel: "Available Today"
  },
  quiz: {
    title: "Calculation Complete!",
    subheadline: "Your \"Leaky Bucket\" Score suggests an immediate 28-42% revenue increase is possible.",
    ctaText: "Book Free Strategy Call",
    questions: [
      { id: 1, question: "How many leads do you typically receive per month?", options: ["0-20", "21-50", "51-150", "150+"] },
      { id: 2, question: "What's your current speed-to-lead?", options: ["Under 5 mins", "1 hour", "Next day", "Whenever we can"] },
      { id: 3, question: "Do you reactivate old leads currently?", options: ["Yes, automated", "Yes, manual", "Not really", "What are old leads?"] },
      { id: 4, question: "What is your #1 goal?", options: ["More leads", "Higher quality", "Less admin", "Scaling revenue"] }
    ]
  }
};
