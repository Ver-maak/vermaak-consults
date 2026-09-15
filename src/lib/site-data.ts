export type ServicePillar = {
  slug: string;
  number: string;
  title: string;
  short: string;
  items: string[];
  cta: string;
};

export const servicePillars: ServicePillar[] = [
  {
    slug: "digital-transformation",
    number: "01",
    title: "Digital Transformation",
    short:
      "Digital strategy, technology adoption, digital products, workflow automation and digital systems.",
    items: [
      "Digital transformation strategy",
      "Digital readiness assessments",
      "Digital product development",
      "Website and web application development",
      "Digital workflow automation",
      "Technology adoption",
      "Data systems",
      "Digital platforms",
      "Dashboard development",
    ],
    cta: "Discuss a Digital Project",
  },
  {
    slug: "enterprise-innovation",
    number: "02",
    title: "Enterprise & Innovation",
    short:
      "SME development, business diagnostics, accelerator programmes, innovation ecosystems and investment readiness.",
    items: [
      "SME diagnostics",
      "Business development services",
      "Business model development",
      "Market-readiness assessments",
      "Investment-readiness assessments",
      "Accelerator and incubation programme design",
      "Innovation programme design",
      "Entrepreneurship development",
      "Startup ecosystem assessments",
    ],
    cta: "Build a Stronger Enterprise",
  },
  {
    slug: "creative-economy",
    number: "03",
    title: "Creative Economy",
    short:
      "Creative enterprise development, creator economy, cultural industries, creative entrepreneurship and monetisation strategies.",
    items: [
      "Creative enterprise development",
      "Creative economy research",
      "Creator economy strategy",
      "Creative business models",
      "Intellectual property awareness",
      "Creative-sector ecosystem mapping",
      "Cultural and creative industry programmes",
      "Monetisation strategies",
    ],
    cta: "Develop the Creative Economy",
  },
  {
    slug: "research-mel",
    number: "04",
    title: "Research, MEL & Knowledge",
    short:
      "Research, assessments, data analysis, monitoring and evaluation, learning systems, dashboards and knowledge products.",
    items: [
      "Baseline and endline studies",
      "KAP studies",
      "Market research",
      "Programme assessments",
      "Monitoring and evaluation frameworks",
      "Indicator frameworks",
      "Data collection tools",
      "Data analysis",
      "Power BI dashboards",
      "Learning agendas",
      "Outcome harvesting",
      "Case studies",
      "Learning briefs",
      "Knowledge management strategies",
      "Knowledge audits and needs assessments",
      "Knowledge-management systems and repositories",
      "Communities of practice and learning networks",
      "Knowledge capture and documentation",
      "Knowledge products and dissemination",
    ],
    cta: "Generate Better Insights",
  },
  {
    slug: "workforce-skills",
    number: "05",
    title: "Workforce & Skills",
    short:
      "Digital skills, employability, entrepreneurship, workforce development, training programmes and capacity building.",
    items: [
      "Digital skills training",
      "Employability programmes",
      "Youth workforce development",
      "Women's digital skills",
      "Entrepreneurship training",
      "Freelancing and remote-work readiness",
      "Training-of-trainers",
      "Curriculum development",
      "Career readiness programmes",
      "Capacity-building programmes",
    ],
    cta: "Build Future-Ready Talent",
  },
  {
    slug: "gender-inclusion",
    number: "06",
    title: "Gender & Inclusion",
    short:
      "Gender-responsive programme design, inclusion strategies, assessments and institutional capacity building.",
    items: [
      "Gender analysis and assessments",
      "Gender equality and social inclusion strategies",
      "Gender-responsive programme design",
      "Gender mainstreaming",
      "Gender action plans",
      "Gender-sensitive indicators and MEL frameworks",
      "Safeguarding and inclusion reviews",
      "Women's economic empowerment programmes",
      "Gender audits",
      "Institutional gender capacity building",
    ],
    cta: "Design a More Inclusive Programme",
  },
];

export const whyVermaak = [
  {
    title: "Africa-Centred",
    body: "Solutions designed around African markets, institutions, enterprises and communities.",
  },
  {
    title: "Technology-Enabled",
    body: "We use digital tools, data and technology to make programmes and organisations more effective.",
  },
  {
    title: "Creative by Design",
    body: "We combine consulting discipline with creativity, design and innovation.",
  },
  {
    title: "Implementation Focused",
    body: "We don't stop at recommendations. We help clients move from strategy to execution.",
  },
];

export const approachSteps = [
  {
    number: "01",
    title: "Understand",
    body: "We listen, research and diagnose the challenge.",
  },
  {
    number: "02",
    title: "Design",
    body: "We develop practical, evidence-based solutions.",
  },
  {
    number: "03",
    title: "Implement",
    body: "We work with partners to turn solutions into action.",
  },
  {
    number: "04",
    title: "Learn & Scale",
    body: "We measure results, capture learning and identify opportunities for scale.",
  },
];

export const ecosystem = [
  {
    title: "Vermaak Consults",
    body: "Consulting, research, strategy and implementation.",
  },
  {
    title: "Vermaak Academy",
    body: "Skills development, training and workforce development.",
  },
  {
    title: "EventSuite",
    body: "Digital event management and event technology.",
  },
  {
    title: "Creator House",
    body: "A platform supporting creators, creative enterprises and digital talent.",
  },
];

export const sectors = [
  {
    title: "Government & Public Sector",
    body: "Digital government, policy support, programme design and institutional capability building.",
  },
  {
    title: "Development & NGOs",
    body: "Programme design, research, MEL systems and digital tools for development delivery.",
  },
  {
    title: "Energy & Climate",
    body: "Clean energy enterprise support, green skills and data systems for climate programmes.",
  },
  {
    title: "Agriculture & Agribusiness",
    body: "Agri-SME development, value-chain research and digital tools for farmer-facing services.",
  },
  {
    title: "Financial Inclusion",
    body: "Digital finance adoption, inclusion research and enterprise finance readiness.",
  },
  {
    title: "Youth & Employment",
    body: "Employability pathways, youth enterprise support and job-readiness programmes.",
  },
  {
    title: "Women & Economic Empowerment",
    body: "Women-led enterprise growth, digital skills and inclusive programme design.",
  },
  {
    title: "Creative Industries",
    body: "Creative enterprise growth, creator economy strategy and cultural industry programmes.",
  },
  {
    title: "Technology & Innovation",
    body: "Product development, innovation programmes and startup ecosystem strengthening.",
  },
  {
    title: "SMEs & Entrepreneurship",
    body: "Business diagnostics, growth support, market and investment readiness.",
  },
  {
    title: "Education & Skills Development",
    body: "Curriculum design, training delivery, digital learning and institutional capacity.",
  },
];

export type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
};

export const insightCategories = [
  "Digital Transformation",
  "Creative Economy",
  "Entrepreneurship",
  "Workforce Development",
  "Research & Insights",
  "Innovation",
  "Development",
];

export const insights: Insight[] = [
  {
    slug: "future-of-africas-creative-economy",
    category: "Creative Economy",
    title: "The Future of Africa's Creative Economy",
    excerpt:
      "Africa's creators are building businesses, not just content. What it takes to turn cultural energy into durable enterprises, jobs and export value.",
    date: "12 August 2026",
  },
  {
    slug: "digital-transformation-beyond-technology",
    category: "Digital Transformation",
    title: "Why Digital Transformation Must Go Beyond Technology",
    excerpt:
      "Most transformation efforts stall because tools arrive before processes, people and data governance. A practical sequence that works for African institutions.",
    date: "24 July 2026",
  },
  {
    slug: "building-future-ready-african-workforces",
    category: "Workforce Development",
    title: "Building Future-Ready African Workforces",
    excerpt:
      "From digital skills to remote-work readiness — how employers, training providers and programmes can close the gap between training and real opportunity.",
    date: "03 June 2026",
  },
];

export const serviceOptions = [
  "Digital Transformation",
  "Enterprise & Innovation",
  "Creative Economy",
  "Research, MEL & Knowledge",
  "Workforce & Skills",
  "Gender & Inclusion",
  "Other",
];

export const marqueeWords = [
  "Strategy",
  "Technology",
  "Creativity",
  "Impact",
  "Research",
  "Enterprise",
  "Skills",
  "Innovation",
];

export const impactStats = [
  { value: 6, suffix: "", label: "Practice areas" },
  { value: 11, suffix: "", label: "Sectors served" },
  { value: 50, suffix: "+", label: "Service offerings" },
  { value: 4, suffix: "", label: "Ecosystem arms" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They did not hand us a strategy document and disappear. Vermaak stayed through the build, trained our team and left us with dashboards we actually use every week.",
    name: "Programme Director",
    role: "Regional development programme, East Africa",
  },
  {
    quote:
      "The diagnostic was sharp and honest. Within a quarter we had a clearer business model, an investor-ready pack and a pipeline we could defend.",
    name: "Founder & CEO",
    role: "Agri-tech SME, Uganda",
  },
  {
    quote:
      "Their creative economy work reframed how we fund creators — from grants for projects to support for businesses. That shift changed our results.",
    name: "Head of Partnerships",
    role: "Cultural fund, Africa",
  },
  {
    quote:
      "Digital skills training that led to real work, not certificates. The employability outcomes spoke for themselves at endline.",
    name: "Skills Lead",
    role: "Youth employment initiative",
  },
];

export const faqs = [
  {
    question: "What kinds of organisations do you work with?",
    answer:
      "Governments and public institutions, development organisations and NGOs, private-sector companies, SMEs and startups, creative enterprises, and youth and women's programmes. If the challenge sits where technology, enterprise, creativity and capability meet, it is our territory.",
  },
  {
    question: "Do you only advise, or do you also implement?",
    answer:
      "Both. Many engagements start with research, diagnostics or strategy and continue into build and delivery — digital products, dashboards, training programmes and MEL systems. We are accountable to what gets used, not just what gets written.",
  },
  {
    question: "Can we engage you for a single piece of work?",
    answer:
      "Yes. Engagements range from a focused study or a single digital product to multi-year programme partnerships covering design, delivery, measurement and learning.",
  },
  {
    question: "Where do you work?",
    answer:
      "We are based in Kampala, Uganda and work across Africa — remotely and in-country, on our own or alongside partner teams and local consultants.",
  },
  {
    question: "How do engagements usually start?",
    answer:
      "With a conversation. Tell us the challenge and we will come back with a proposed approach, the mix of skills required, indicative timelines and a clear scope before any commitment.",
  },
];
