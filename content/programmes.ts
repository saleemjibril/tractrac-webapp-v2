import { asset } from "@/lib/asset";

export type ProgrammeSlug =
  | "issam"
  | "young-people-in-mechanisation"
  | "traxcellerate"
  | "tracinvest"
  | "h2o"
  | "rise7";

export type ProgrammeCard = {
  slug: ProgrammeSlug;
  name: string;
  shortName: string;
  category: string;
  description: string;
  image: string;
  alt: string;
};

export const PROGRAMMES: ProgrammeCard[] = [
  {
    slug: "issam",
    name: "ISSAM",
    shortName: "ISSAM",
    category: "Mechanisation access",
    description:
      "Improving how smallholder farmers in Nigeria access affordable and reliable mechanisation services, in partnership with the Mastercard Foundation.",
    image: asset("img/prog-1.jpg"),
    alt: "An operator ploughing with an orange ISSAM tryctor",
  },
  {
    slug: "young-people-in-mechanisation",
    name: "Young People in Mechanisation",
    shortName: "Young People in Mechanisation",
    category: "Youth and careers",
    description:
      "Nigeria's first youth-focused mechanisation movement, equipping 18 to 35 year-olds with practical skills, mentorship and opportunities.",
    image: asset("img/ypim-1.jpg"),
    alt: "Young people in orange and green shirts cheering with Youth in Mechanization signs",
  },
  {
    slug: "traxcellerate",
    name: "TRAxCelerate",
    shortName: "TRAxCelerate",
    category: "Programme delivery",
    description:
      "TracTrac's programme design and delivery arm, training, certifying, equipping and organising MSPs into cooperatives.",
    image: asset("uploads/imageye___-_imgi_3_2dd4a135-c846-4e1b-81fc-918e6868a96f.png"),
    alt: "TRAxCelerate key visual with photos of trainees in orange TracTrac shirts",
  },
  {
    slug: "tracinvest",
    name: "TRACINVEST",
    shortName: "TRACINVEST",
    category: "Investment",
    description: "Invest in One Tractor and Own the Future of Food.",
    image: asset("uploads/imageye___-_imgi_4_8ce43617-deca-4a0b-b705-ca53e9cfb9bc.png"),
    alt: "TRACINVEST key visual showing an orange tractor with coins",
  },
  {
    slug: "h2o",
    name: "H₂O: Half-Way to Ownership",
    shortName: "H₂O",
    category: "Financing instrument",
    description: "A financing instrument connected to TRAxCelerate.",
    image: asset("uploads/imageye___-_imgi_5_306bf8f8-99e7-464c-bd43-19329bf435d3.png"),
    alt: "H2O Half-Way to Ownership key visual with a handshake",
  },
  {
    slug: "rise7",
    name: "Rise7: Empowering Seven to Scale",
    shortName: "Rise7",
    category: "Financing instrument",
    description: "A financing instrument connected to TRAxCelerate.",
    image: asset("uploads/imageye___-_imgi_6_b70413d1-ddd7-46a4-a5b7-8556bbb6694f.png"),
    alt: "Rise7 Empowering Seven to Scale key visual with a glowing arrow",
  },
];

export type IconName =
  | "recruitment"
  | "training"
  | "certificate"
  | "network"
  | "phone-check"
  | "chart"
  | "eye"
  | "tractor"
  | "factory"
  | "land"
  | "people"
  | "home"
  | "briefcase";

export type Stat = {
  count?: number;
  value: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  note?: string;
};

export type ProgrammeSection =
  | {
      kind: "cards";
      eyebrow: string;
      title: string;
      intro: string;
      background?: "white" | "cream";
      columns?: 3 | 4;
      cardSize?: "compact" | "roomy";
      bodyWidth?: 36 | 40;
      items: { icon: IconName; title: string; body: string }[];
    }
  | {
      kind: "rows";
      eyebrow: string;
      title: string;
      intro: string;
      background?: "white" | "cream";
      introSpacing?: "compact";
      items: { title: string; body: string }[];
    }
  | {
      kind: "statPair";
      eyebrow: string;
      title: string;
      stats: Stat[];
      background?: "white" | "cream";
    }
  | {
      kind: "statPanel";
      eyebrow: string;
      title: string;
      intro: string;
      big: Stat;
      items: { title: string; body: string }[];
    }
  | {
      kind: "benefits";
      eyebrow: string;
      title: string;
      intro: string;
      background?: "white" | "cream";
      items: { term: string; body: string }[];
    }
  | { kind: "contact" };

export type StandardProgramme = {
  slug: Exclude<ProgrammeSlug, "issam" | "young-people-in-mechanisation">;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  cta: { label: string; href: string };
  sections: ProgrammeSection[];
};

export const STANDARD_PROGRAMMES: Record<string, StandardProgramme> = {
  traxcellerate: {
    slug: "traxcellerate",
    eyebrow: "TRAxCelerate",
    title: "Building the Human Infrastructure for Nigeria’s Mechanisation Revolution",
    subtitle:
      "The TRAxCelerate program is TracTrac’s flagship initiative to train, certify, and deploy 2,000 mechanisation service providers, operators, agents, and mechanics across Nigeria.",
    heroImage: asset("img/prog-7.jpg"),
    heroAlt: "Trainees in orange TracTrac shirts working on tablets in a training hall",
    cta: { label: "Join us to build the workforce", href: "#contact" },
    sections: [
      {
        kind: "cards",
        eyebrow: "How It Works",
        title: "Product Design",
        intro: "The TracTrac MSP Model is built on four pillars.",
        background: "cream",
        columns: 4,
        cardSize: "compact",
        bodyWidth: 36,
        items: [
          {
            icon: "recruitment",
            title: "Recruitment and Mobilisation",
            body: "Identification and screening of suitable youth and women across partner states.",
          },
          {
            icon: "training",
            title: "Training Delivery",
            body: "A hands-on, 3–4 week hybrid program combining classroom instruction, field practicals, and digital learning modules.",
          },
          {
            icon: "certificate",
            title: "Certification and Onboarding",
            body: "Graduates receive official TracTrac MSP certification and are integrated into TracTracPlus and the operational digital platform for job placement, bookings, and service monitoring.",
          },
          {
            icon: "network",
            title: "Post-Training Support",
            body: "Continuous mentorship, refresher courses, and integration into cooperatives and private service delivery networks.",
          },
        ],
      },
      {
        kind: "statPanel",
        eyebrow: "Impact",
        title: "TracTracMSL is Building the Workforce Powering Mechanisation",
        intro:
          "The TRAxCelerate program builds skilled service providers to drive mechanisation, create jobs, and strengthen MSMEs across Nigeria.",
        big: {
          count: 2000,
          value: "2,000",
          label: "MSP Training & Certification",
          note: "Train and certify 2,000 service providers.",
        },
        items: [
          { title: "Service Efficiency", body: "Improve mechanisation reach and performance." },
          { title: "Ecosystem Growth", body: "Strengthen local systems and MSME value chains." },
          {
            title: "Youth Empowerment",
            body: "Promote jobs, entrepreneurship, and digital skills.",
          },
        ],
      },
      { kind: "contact" },
    ],
  },
  tracinvest: {
    slug: "tracinvest",
    eyebrow: "TRACINVEST",
    title: "Accelerating Mechanisation Investment in Nigeria",
    subtitle:
      "A Gateway for Private and Institutional Investors into Nigeria’s Tractors-for-Development Revolution",
    heroImage: asset("uploads/WhatsApp Image 2026-09-03 at 11.09.38 (6).jpeg"),
    heroAlt: "A yard of new orange TracTrac ISSAM tractor trailers",
    cta: { label: "Join us to build the workforce", href: "#contact" },
    sections: [
      {
        kind: "rows",
        eyebrow: "Feature",
        title: "Investor Benefit",
        intro:
          "TRACINVEST offers investors a blend of financial return and measurable social impact. Each feature is designed to maximise efficiency, reduce risk, and ensure transparent performance.",
        background: "white",
        items: [
          {
            title: "Digital Deployment via TracTracPlus",
            body: "Access to verified farmer demand and service clusters across Nigeria.",
          },
          {
            title: "Data-Driven ROI",
            body: "Transparent dashboard showing tractor utilization, revenue, and performance.",
          },
          {
            title: "Reduced Operational Risk",
            body: "Centralized operator management, maintenance scheduling, and service tracking.",
          },
          {
            title: "Assured Market Access",
            body: "Guaranteed booking support within high-demand clusters.",
          },
          {
            title: "Impact Branding",
            body: "Each investor contributes to national food security, rural jobs, and youth engagement.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Why Invest",
        title: "Key Advantages",
        intro:
          "TRACINVEST uses technology and data to enhance transparency, reduce risk, and deliver measurable returns.",
        background: "cream",
        columns: 3,
        cardSize: "roomy",
        bodyWidth: 40,
        items: [
          {
            icon: "phone-check",
            title: "Proven Platform",
            body: "TracTracPlus is an established ecosystem solution for booking, monitoring, and performance management.",
          },
          {
            icon: "network",
            title: "Ecosystem Support",
            body: "Access to a growing network of 2,000+ trained MSPs, mechanics, and operators.",
          },
          {
            icon: "chart",
            title: "Impact & Return",
            body: "Combines financial ROI with social and developmental impact.",
          },
          {
            icon: "eye",
            title: "Transparency",
            body: "Real-time performance dashboard and quarterly investor reports.",
          },
        ],
      },
      { kind: "contact" },
    ],
  },
  h2o: {
    slug: "h2o",
    eyebrow: "Half-Way to Ownership",
    title: "Empowering Youth and Women for Sustainable Mechanisation Ownership",
    subtitle:
      "Across Nigeria, young people and women are ready to join the mechanisation sector, but limited access to finance holds them back.",
    heroImage: asset("img/prog-9.jpg"),
    heroAlt: "A woman MSP in a white cap driving an orange tryctor",
    cta: { label: "Join us to build the workforce", href: "#contact" },
    sections: [
      {
        kind: "cards",
        eyebrow: "Project Objectives",
        title: "Empowering People, Expanding Access",
        intro:
          "This initiative empowers youth and women, expands mechanisation access, and promotes inclusive ownership.",
        background: "cream",
        columns: 3,
        cardSize: "roomy",
        bodyWidth: 40,
        items: [
          {
            icon: "people",
            title: "Youth & Women Empowerment",
            body: "Support young people and women to become mechanisation service providers (MSPs).",
          },
          {
            icon: "tractor",
            title: "Find Mechanisation",
            body: "Expand affordable mechanisation services for smallholder farmers.",
          },
          {
            icon: "home",
            title: "Inclusive Ownership",
            body: "Build shared ownership pathways within the mechanisation ecosystem.",
          },
          {
            icon: "briefcase",
            title: "Job & Enterprise Growth",
            body: "Create decent jobs and boost rural enterprise development.",
          },
        ],
      },
      {
        kind: "benefits",
        eyebrow: "Key Benefits",
        title: "Key Advantages for Stakeholders",
        intro:
          "Each stakeholder benefits through targeted opportunities empowering youth, improving access, and driving measurable results across the mechanisation ecosystem.",
        background: "white",
        items: [
          {
            term: "Youth & Women",
            body: "Access to participant ownership opportunity, training, and mentorship.",
          },
          { term: "Farmers", body: "Affordable, timely and reliable mechanisation services." },
          {
            term: "Government",
            body: "Increased tractor density, local job creation, and poverty reduction.",
          },
          {
            term: "Private Sector",
            body: "Entry point for leasing, maintenance, and service partnerships.",
          },
        ],
      },
      { kind: "contact" },
    ],
  },
  rise7: {
    slug: "rise7",
    eyebrow: "Rise7",
    title: "Empowering Seven to Scale",
    subtitle:
      "Rise7 is TracTrac’s cooperative financing model that enables groups of seven farmers or entrepreneurs to jointly acquire tractors through affordable loan options, promoting shared ownership and inclusive access to mechanisation.",
    heroImage: asset("img/prog-5.jpg"),
    heroAlt: "An MSP driving a tryctor across an open field",
    cta: { label: "Join us to build the workforce", href: "#contact" },
    sections: [
      {
        kind: "statPair",
        eyebrow: "The model",
        title: "Shared ownership and inclusive access to mechanisation.",
        background: "white",
        stats: [
          {
            count: 7,
            value: "7",
            label: "farmers or entrepreneurs per cooperative",
          },
          {
            value: "₦50m",
            label: "up to ₦50 million for tractors and equipment",
          },
        ],
      },
      {
        kind: "rows",
        eyebrow: "Project Objectives",
        title: "Empowering Cooperatives for Inclusive Growth",
        intro:
          "Rise7 enables inclusive mechanisation finance and equitable participation through cooperatives.",
        background: "white",
        introSpacing: "compact",
        items: [
          {
            title: "Cooperative Financing Access",
            body: "Enable seven-member cooperatives to access up to ₦50 million for tractors and equipment.",
          },
          {
            title: "De-risked Lending",
            body: "Support financial institutions with cross-guarantees and structured repayment systems.",
          },
          {
            title: "Expanded Mechanisation Coverage",
            body: "Increase tractor availability and service reach nationwide.",
          },
          {
            title: "Rural Enterprise Growth",
            body: "Create jobs and strengthen inclusive agricultural enterprises.",
          },
          {
            title: "Gender Inclusion",
            body: "Encourage women-led and mixed cooperatives for equal participation.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Impact",
        title: "Measuring Progress and Real Results",
        intro:
          "Rise7 tracks measurable outcomes that show how the programme strengthens mechanisation, boosts productivity, and drives economic growth across rural communities.",
        background: "cream",
        columns: 4,
        cardSize: "roomy",
        bodyWidth: 36,
        items: [
          {
            icon: "tractor",
            title: "Tractor Availability",
            body: "Measure access and distribution across rural areas.",
          },
          {
            icon: "factory",
            title: "Job Creation",
            body: "Track direct and indirect employment per cooperative.",
          },
          {
            icon: "land",
            title: "Land Expansion",
            body: "Monitor increase in cultivated hectares.",
          },
          {
            icon: "chart",
            title: "Productivity Growth",
            body: "Assess annual output and income gains of beneficiaries.",
          },
        ],
      },
      { kind: "contact" },
    ],
  },
};
