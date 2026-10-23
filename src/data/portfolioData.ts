import type {
  Project,
  CareerMilestone,
  PhilosophyPrinciple,
  CapabilityGroup,
  ToolCategory,
  MetricItem
} from '@/types/portfolio';

export const PERSONAL_CONTENT = {
  hero: {
    overline: 'PRODUCT DESIGNER / INDIA',
    headlineStart: 'Designing digital',
    headlineMiddle: 'experiences with',
    headlineEnd: 'clarity, craft, and',
    headlineAccent: 'curiosity.',
    bio: "I'm Midhun — over a decade of product design spanning fintech, healthcare, and enterprise. I help teams get from vague concepts to shipped products that work.",
    primaryCta: 'Explore my work →',
    secondaryCta: 'Read my CV',
    resumeUrl: '/Midhun_M_Resume.pdf',
    portrait: '/images/designer-portrait.png',
    portraitTag: 'Senior UI/UX & Product Designer'
  },
  philosophy: {
    sectionTag: '01 / PHILOSOPHY',
    lead: 'Good design starts with people, not pixels. I spend as much time understanding the work as I do shaping the screen.',
    principles: [
      {
        title: 'Listen first',
        description: 'Every problem begins with understanding before drawing a single line.'
      },
      {
        title: 'Stay curious',
        description: "Question assumptions, explore edge cases, and never accept 'that's how it's always been done'."
      },
      {
        title: 'Ship & learn',
        description: 'Real users beat boardroom debates. Get designs in front of people fast, iterate often.'
      },
      {
        title: 'Systemize early',
        description: "A design system isn't red tape — it's the foundation for speed and consistency."
      },
      {
        title: 'Bridge the gap',
        description: 'Designers who code build better products. I design with technical reality in mind.'
      },
      {
        title: 'Keep it simple',
        description: 'Complexity is easy. Simplicity takes ruthless editing and deep empathy.'
      }
    ] as PhilosophyPrinciple[]
  },
  career: {
    sectionTag: '02 / CAREER',
    pixelTitle: 'Fourteen years, Four teams.',
    milestones: [
      {
        id: 'techgentsia',
        company: 'Techgentsia',
        period: '2020 – Present',
        role: 'Senior UI/UX & Product Designer',
        description: 'Leading end-to-end UX/UI for enterprise web & mobile platforms. Scaled design systems reducing frontend delivery time by 25%. Spearheaded AI-assisted design-to-code workflows.',
        highlights: ['500K+ European payment platform', 'Multi-brand design system governance', 'Vibe coding & AI prototyping']
      },
      {
        id: 'sasp',
        company: 'SASP',
        period: '2019 – 2020',
        role: 'Web Designer',
        description: 'Designed responsive digital platforms, cross-browser architectures, and high-fidelity interactive prototypes aligned with brand strategies.',
        highlights: ['Performance & viewport optimization', 'Interactive client prototypes']
      },
      {
        id: 'opesmount',
        company: 'Opesmount',
        period: '2016 – 2019',
        role: 'UI / UX Designer',
        description: 'Delivered user-centered solutions across multiple concurrent SaaS projects. Built component libraries and championed usability testing.',
        highlights: ['Design system & style guides', 'Collaborative developer handoff']
      },
      {
        id: 'rendeztech',
        company: 'Rendeztech',
        period: '2012 – 2015',
        role: 'Junior Webdesigner',
        description: 'Designed structured web layouts, visual interfaces, graphic assets, and cross-browser responsive viewport validation.',
        highlights: ['Layout fundamentals', 'SEO-conscious interface design']
      }
    ] as CareerMilestone[]
  },
  capabilities: {
    sectionTag: '03 / CAPABILITIES',
    groups: [
      {
        category: 'Product & UX design',
        details: 'User research, wireframes, user flows, journey mapping, usability testing'
      },
      {
        category: 'UI & visual systems',
        details: 'Interface design, typography, color systems, design tokens'
      },
      {
        category: 'Design systems & prototyping',
        details: 'Figma variables, component libraries, interactive prototypes'
      },
      {
        category: 'AI-assisted design & build',
        details: 'Rapid prototyping with AI, LLM prompting for design, full-stack prototyping'
      },
      {
        category: 'Collaboration & handoff',
        details: 'Design-to-code alignment, developer documentation, design QA'
      }
    ] as CapabilityGroup[],
    toolColumns: [
      {
        title: 'DESIGN',
        items: ['Figma', 'Adobe Creative Suite', 'Sketch']
      },
      {
        title: 'AI TOOLS',
        items: ['ChatGPT', 'Claude', 'Cursor']
      },
      {
        title: 'DEV & CODE',
        items: ['Antigravity', 'Google Stitch', 'Vue 3 / TypeScript']
      }
    ] as ToolCategory[]
  },
  metrics: [
    {
      value: '500K+',
      label: 'active users on fintech platform'
    },
    {
      value: '40%',
      label: 'reduction in booking drop-offs through UX redesign'
    },
    {
      value: '25%',
      label: 'faster dev handoff via unified design system'
    }
  ] as MetricItem[],
  legacy: {
    sectionTag: '02 — LEGACY',
    headlinePart1: 'We leave more than deliverables —',
    headlinePart2: 'we leave the ability to improve',
    statementLead: "Improvement shouldn't stop the moment an outside partner walks away.",
    statementDetail: 'The decision criteria, components, research findings, AI workflows and validation methods created during the project stay with your organisation in a form it can reuse.',
    marqueeRow1: [
      'How KPIs map to UX',
      'AI Skills, prompts and workflows',
      'Operating guidelines',
      'Production design tokens',
      'System architecture',
      'Rapid full-stack prototypes'
    ],
    marqueeRow2: [
      'Research & validation templates',
      'UI components',
      'Design system',
      'Design principles',
      'A record of problems, hypotheses and decisions',
      'A roadmap for what comes next'
    ]
  },
  about: {
    sectionTag: '04 / ABOUT',
    lead: 'I’ve been designing for screens since 2012 — long enough to see tools change many times, and to know that the essentials stay the same.',
    paragraph: "Who is this for? What are they trying to get done? Why isn't it working now? I like problems that don't have an obvious answer yet, and I like working in teams where the designers and developers share a common vocabulary. AI has become a central part of how I explore and prototype quickly, but design judgment and human empathy remain the filter for everything I ship."
  }
};

export const WORKS_CONTENT = {
  hero: {
    overline: 'PRODUCT DESIGN / DIGITAL EXPERIENCES / AI-ASSISTED DEVELOPMENT',
    headlineStart: 'Selected work — from',
    headlineMiddle: 'payment flows to the',
    headlineAccent: 'systems behind them.',
    lead: 'Products with real stakes, complex journeys, and teams who needed design to be dependable. Each piece below starts with a problem worth solving.'
  },
  featuredProject: {
    id: 'payment-platform',
    slug: 'payment-platform',
    number: '01 / SAAS PLATFORM',
    actionLabel: 'FULL CASE STUDY →',
    pixelWord: 'Payment',
    title: 'Payment platform',
    summary: 'Making everyday payments feel calm and legible for a large, varied audience.',
    tags: ['Product UX', 'UI & UX Design', 'Case study in progress'],
    theme: 'dark' as const,
    inProgress: true,
    featured: true,
    caseStudy: {
      title: 'European Online Payment Platform',
      subtitle: 'Designing high-volume transaction interfaces with clarity and trust for 500K+ European users.',
      role: 'Lead UI/UX Designer',
      timeline: '2021 – 2023',
      overview: 'Conceptualized the UI/UX architecture from initial wireframes to high-fidelity production for an online financial platform deployed across multiple European markets.',
      challenge: 'Users faced significant cognitive overload when verifying complex cross-border payment details, leading to abandoned transactions and support escalations.',
      researchAndInsights: [
        'User testing revealed that 43% of drop-offs happened during invoice itemization checks.',
        'Clear confirmation steps increased user completion confidence by over 30%.'
      ],
      keyDecisions: [
        {
          title: 'Progressive Disclosure of Fees',
          detail: 'Separated base amounts, exchange rates, and banking fees into predictable visual tiers.'
        },
        {
          title: 'High-Contrast Verification State',
          detail: 'Introduced an unmistakable pre-authorization modal with explicit tactile confirmation.'
        }
      ],
      solution: 'A calm, legible transaction flow featuring transparent breakdown cards, instant currency conversion feedback, and accessibility-first contrast compliance.',
      metrics: [
        { label: 'Active Users', value: '500K+' },
        { label: 'Client Recognition', value: 'Formal Commendation' }
      ],
      takeaways: 'When dealing with people’s money, visual restraint and unambiguous validation states matter far more than decorative flourishes.'
    }
  } as Project,
  projects: [
    {
      id: 'product-design-system',
      slug: 'product-design-system',
      number: '02 / DESIGN SYSTEMS',
      actionLabel: 'DESIGN SYSTEM →',
      pixelWord: 'Product',
      title: 'Product design system',
      summary: 'A shared component universe built so 10+ teams don’t reinvent the wheel.',
      tags: ['Design systems', 'UI/UX Designer', 'Case study in progress'],
      theme: 'dark' as const,
      inProgress: true,
      caseStudy: {
        title: 'Multi-Brand Enterprise Design System',
        subtitle: 'Scaling reusable UI primitives, tokens, and governance across 10+ engineering teams.',
        role: 'Design System Lead',
        timeline: '2022 – Present',
        overview: 'Engineered a unified design token architecture in Tokens Studio and Figma Variables, mapped directly to Vue and React component implementations.',
        challenge: 'Inconsistent design patterns across distributed teams caused duplicated engineering efforts, broken accessibility standards, and slow product releases.',
        keyDecisions: [
          {
            title: 'Three-Layer Token Hierarchy',
            detail: 'Separated primitive values (palette) from semantic tokens (intent) and component tokens (button-bg).'
          },
          {
            title: 'Automated Token Sync',
            detail: 'Connected Figma variables with GitHub PR pipelines via JSON token exports.'
          }
        ],
        solution: 'Over 80 rigorously documented UI components with WCAG AA compliance, dark/light theme support, and interactive Storybook demos.',
        metrics: [
          { label: 'Frontend Time Saved', value: '25%' },
          { label: 'Teams Supported', value: '10+' }
        ]
      }
    },
    {
      id: 'hospitality-booking-flow',
      slug: 'hospitality-booking-flow',
      number: '03 / PRODUCT UX',
      actionLabel: 'PRODUCT UX / REDESIGN →',
      pixelWord: 'Hospitality',
      title: 'Hospitality booking flow',
      summary: 'Untangling a multi-step booking journey so fewer guests give up halfway.',
      tags: ['Product UX', 'Case study in progress'],
      theme: 'terracotta' as const,
      inProgress: true,
      caseStudy: {
        title: 'Hospitality Booking & Menu Platform UX',
        subtitle: 'Eliminating friction points in hotel ordering and reservation journeys.',
        role: 'Senior UX Designer',
        timeline: '2021',
        overview: 'Redesigned the guest ordering and room-service flow for a premier hotel chain, simplifying item customisation and checkout.',
        challenge: 'Guests found the existing ordering portal confusing on mobile devices, resulting in high abandonment and frustrated front-desk inquiries.',
        keyDecisions: [
          {
            title: 'One-Thumb Mobile Architecture',
            detail: 'Anchored cart progress and payment actions to the bottom safe-area of the screen.'
          },
          {
            title: 'Instant Dietary Filtering',
            detail: 'Introduced tactile, one-tap filters for allergies, vegan, and halal preferences.'
          }
        ],
        solution: 'A frictionless mobile-first ordering experience with visual receipt confirmations and live preparation trackers.',
        metrics: [
          { label: 'Drop-off Reduction', value: '40%' },
          { label: 'Executive Award', value: 'CEO Recognition' }
        ]
      }
    },
    {
      id: 'this-portfolio',
      slug: 'this-portfolio',
      number: '04 / FRONTEND EXPERIMENT',
      actionLabel: 'CASE STUDY →',
      pixelWord: 'This',
      title: 'This portfolio',
      summary: 'Designed in Figma, tokenized in Tokens Studio, built with AI-assisted development.',
      tags: ['Frontend experiment', 'Vue or Next.js'],
      theme: 'stone' as const,
      inProgress: false,
      caseStudy: {
        title: 'Two-Mode Editorial Portfolio',
        subtitle: 'Crafting a dual-experience digital identity connecting Personal narrative and Works evidence.',
        role: 'Design Technologist & Lead Developer',
        timeline: '2024',
        overview: 'Engineered an editorial portfolio combining strict typographic hierarchy, warm paper aesthetics, retro pixel display accents, and instant client-side mode transitions.',
        challenge: 'Most portfolios force a compromise between recruiter-friendly biography and design-driven case study storytelling.',
        keyDecisions: [
          {
            title: 'Floating Segmented Switcher',
            detail: 'A persistent, accessible bottom capsule toggling Personal and Works states with synced URL query params.'
          },
          {
            title: 'Warm Editorial Design Tokens',
            detail: 'Curated paper canvas, ink typography, laterite accents, and retro bitmap headlines.'
          }
        ],
        solution: 'A Vue 3 + TypeScript architecture with zero layout shift, smooth physics, and complete accessibility.',
        metrics: [
          { label: 'Lighthouse Score', value: '100' },
          { label: 'Page Load', value: '<0.5s' }
        ]
      }
    },
    {
      id: 'marketing-website',
      slug: 'marketing-website',
      number: '05 / B2B SAAS',
      actionLabel: 'CASE STUDY →',
      pixelWord: 'Marketing',
      title: 'Marketing website',
      summary: 'Editorial-grade layout and responsive systems for a growing product agency.',
      tags: ['Web design', 'Case study in progress'],
      theme: 'dark' as const,
      inProgress: true,
      caseStudy: {
        title: 'B2B Product Agency Digital Experience',
        subtitle: 'Art-directing an authoritative web presence for an enterprise software studio.',
        role: 'Lead UI/UX Designer',
        timeline: '2022',
        overview: 'Developed the creative direction, typographic guidelines, and responsive layouts for a multi-page agency platform.',
        challenge: 'Communicating complex engineering capabilities without drowning visitors in technical jargon.',
        keyDecisions: [
          {
            title: 'Editorial Case Study Cards',
            detail: 'Used generous white space and bold pull quotes to showcase client outcomes.'
          }
        ],
        solution: 'A high-converting web platform with engaging interactive benchmarks and seamless contact funnels.',
        metrics: [
          { label: 'Inbound Inquiries', value: '+35%' }
        ]
      }
    }
  ] as Project[]
};

export const FOOTER_CONTENT = {
  overline: 'CONTACT',
  personal: {
    headline: "Let's work on something considered.",
    subtext: 'Open to product design roles, collaborations, and freelance projects.'
  },
  works: {
    headline: 'Have a thoughtful problem to solve?',
    subtext: 'Open to product design roles, collaborations, and freelance projects.'
  },
  email: 'mnairmidhun@gmail.com',
  phone: '+91 8921089470',
  location: 'Alappuzha, Kerala, India',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/mnairmidhun' },
    { label: 'Tiktok', href: 'https://tiktok.com' },
    { label: 'X (Twitter)', href: 'https://x.com' }
  ],
  copyright: '© 2024 Midhun M.',
  roleLabel: 'Product Designer'
};

