/**
 * LazerMoney Brand Configuration
 * ================================
 * Central source of truth for all brand-specific copy and data.
 * Edit this file to customize the entire application.
 */

const lazermoneyConfig = {
  // === Brand Identity ===
  brand: {
    name: 'LazerMoney',
    tagline: 'Lightning-Fast Personal Loans',
    description: 'Get the cash you need at the speed of light. Apply in minutes, funded within hours.',
    logo: '/src/assets/logo.png',
    founded: '2024',
  },

  // === Contact Information ===
  contact: {
    phone: '1-300-680-729',
    phoneDisplay: '1-300-680-729',
    email: 'info@lazermoney.com.au',
    address: {
      street: 'PO Box 1006',
      suite: '',
      city: 'Strawberry Hills',
      state: 'NSW',
      zip: '2012',
    },
    hours: {
      weekdays: '8:00 AM - 8:00 PM EST',
      saturday: '9:00 AM - 5:00 PM EST',
      sunday: 'Closed',
    },
  },

  // === Loan Products ===
  products: {
    minLoan: 1000,
    maxLoan: 50000,
    minTerm: 12,
    maxTerm: 60,
    apr: {
      min: 7.99,
      max: 29.99,
      average: 15.99,
    },
    originationFee: {
      min: 1,
      max: 5,
    },
  },

  // === Value Propositions ===
  valueProps: [
    {
      icon: 'Zap',
      title: 'Instant Decisions',
      description: 'Get approved in as fast as 60 seconds with our AI-powered underwriting.',
    },
    {
      icon: 'Shield',
      title: 'Bank-Level Security',
      description: '256-bit encryption protects your data. We never sell your information.',
    },
    {
      icon: 'Clock',
      title: 'Same-Day Funding',
      description: 'Approved by noon? Get your funds deposited the same business day.',
    },
    {
      icon: 'Percent',
      title: 'Competitive Rates',
      description: 'Rates starting at 7.99% APR for qualified borrowers. No hidden fees.',
    },
  ],

  // === How It Works Steps ===
  howItWorks: [
    {
      step: 1,
      title: 'Check Your Rate',
      description: 'Takes just 2 minutes. No impact to your credit score.',
      duration: '2 min',
    },
    {
      step: 2,
      title: 'Choose Your Offer',
      description: 'Compare personalized offers and select the best one for you.',
      duration: '5 min',
    },
    {
      step: 3,
      title: 'Verify Identity',
      description: 'Quick ID verification to protect against fraud.',
      duration: '3 min',
    },
    {
      step: 4,
      title: 'Get Funded',
      description: 'Sign digitally and receive funds as fast as the same day.',
      duration: 'Same Day',
    },
  ],

  // === Costs & Fees Table ===
  costs: {
    interestRates: [
      { creditTier: 'Excellent (720+)', aprRange: '7.99% - 12.99%' },
      { creditTier: 'Good (680-719)', aprRange: '12.99% - 18.99%' },
      { creditTier: 'Fair (640-679)', aprRange: '18.99% - 24.99%' },
      { creditTier: 'Building (580-639)', aprRange: '24.99% - 29.99%' },
    ],
    fees: [
      { name: 'Origination Fee', amount: '1% - 5%', note: 'Deducted from loan proceeds' },
      { name: 'Late Payment Fee', amount: '$15 or 5%', note: 'Whichever is greater' },
      { name: 'NSF Fee', amount: '$15', note: 'Per returned payment' },
      { name: 'Prepayment Penalty', amount: '$0', note: 'Pay off anytime, no penalty' },
    ],
    example: {
      amount: 10000,
      apr: 15.99,
      term: 36,
      monthlyPayment: 351.94,
      totalInterest: 2669.84,
      totalPayment: 12669.84,
    },
  },

  // === FAQ Content ===
  faqs: [
    {
      category: 'Application',
      questions: [
        {
          q: 'How long does the application take?',
          a: 'Most applicants complete our online application in under 5 minutes. You\'ll receive an instant decision in most cases.',
        },
        {
          q: 'Will checking my rate affect my credit score?',
          a: 'No! We use a soft credit pull to check your rate, which doesn\'t impact your credit score. A hard inquiry only occurs if you accept an offer and proceed.',
        },
        {
          q: 'What documents do I need?',
          a: 'You\'ll need a valid government ID, proof of income (pay stubs or tax returns), and bank account information for funding.',
        },
      ],
    },
    {
      category: 'Rates & Terms',
      questions: [
        {
          q: 'What determines my interest rate?',
          a: 'Your rate is based on your credit score, income, debt-to-income ratio, and loan amount. Better credit typically means lower rates.',
        },
        {
          q: 'Can I pay off my loan early?',
          a: 'Absolutely! We never charge prepayment penalties. Pay off your loan anytime without extra fees.',
        },
        {
          q: 'Are there any hidden fees?',
          a: 'No hidden fees ever. Our only fees are the origination fee (disclosed upfront) and late/NSF fees if applicable.',
        },
      ],
    },
    {
      category: 'Funding',
      questions: [
        {
          q: 'How fast will I receive my funds?',
          a: 'If approved and verified by noon EST, you could receive same-day funding. Otherwise, expect funds within 1-2 business days.',
        },
        {
          q: 'What bank accounts can I use?',
          a: 'We can deposit to any U.S. checking or savings account. We cannot fund to prepaid cards or international accounts.',
        },
      ],
    },
  ],

  // === Legal & Compliance ===
  legal: {
    licenses: 'LazerMoney is a licensed lender in all 50 states. NMLS #1234567.',
    disclaimer: 'All loans are subject to credit approval. Your actual rate depends upon credit score, loan amount, loan term, and credit usage and history. The APR ranges from 7.99% to 29.99%. Loans are originated by LazerMoney, LLC.',
    privacy: 'Your privacy is important to us. We use bank-level encryption and never sell your personal information.',
    copyright: `© ${new Date().getFullYear()} LazerMoney, LLC. All rights reserved.`,
  },

  // === Social Links ===
  social: {
    twitter: 'https://twitter.com/lazermoney',
    facebook: 'https://facebook.com/lazermoney',
    instagram: 'https://instagram.com/lazermoney',
    linkedin: 'https://linkedin.com/company/lazermoney',
  },

  // === Navigation ===
  navigation: {
    main: [
      { label: 'Home', path: '/' },
      { label: 'How It Works', path: '/how-it-works' },
      { label: 'Costs', path: '/costs' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact', path: '/contact' },
    ],
    footer: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Licenses', path: '/licenses' },
    ],
  },
};

export default lazermoneyConfig;
