import { asset } from "@/lib/asset";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href?: string;
  links?: NavLink[];
  feature?: NavLink;
  wide?: boolean;
};

export const NAV: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    links: [
      { label: "For Farmers", href: "/solutions#farmers" },
      { label: "For Equipment Owners", href: "/solutions#owners" },
      { label: "For Booking Agents", href: "/solutions#agents" },
      { label: "For Mechanisation Service Providers", href: "/solutions#msp" },
    ],
  },
  {
    label: "Technology",
    href: "/technology",
    links: [
      { label: "TracTrac Plus", href: "/technology" },
      { label: "TracTrac Agent", href: "/technology#agent" },
    ],
  },
  {
    label: "Programmes",
    wide: true,
    href: "/programmes",
    feature: { label: "All programmes →", href: "/programmes", description: "Overview" },
    links: [
      {
        label: "ISSAM",
        href: "/programmes/issam",
        description: "Smallholder access to small-scale mechanisation",
      },
      {
        label: "Young People in Mechanisation",
        href: "/programmes/young-people-in-mechanisation",
        description: "Skills and careers in mechanisation",
      },
      {
        label: "TRAxCelerate",
        href: "/programmes/traxcellerate",
        description: "Programme design and delivery",
      },
      {
        label: "TRACINVEST",
        href: "/programmes/tracinvest",
        description: "Asset-backed tractor investment",
      },
      { label: "H₂O", href: "/programmes/h2o", description: "Half-Way to Ownership" },
      { label: "Rise7", href: "/programmes/rise7", description: "Empowering Seven to Scale" },
    ],
  },
  {
    label: "Impact",
    href: "/impact",
    links: [
      { label: "Our Impact", href: "/impact" },
      { label: "Stories from the Field", href: "/stories" },
    ],
  },
  {
    label: "Partners",
    href: "/partners",
    links: [
      { label: "Work With Us", href: "/partners#work-with-us" },
      { label: "Finance and Investment", href: "/partners#finance" },
      { label: "Development Partners", href: "/partners#development-partners" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    links: [
      { label: "Stories and News", href: "/blog" },
      { label: "Research and Resources", href: "/blog" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
];

export const CTAS = {
  secondary: { label: "Partner With Us", href: "/partners#contact" },
  primary: { label: "Find Mechanisation", href: "/#final" },
};

export const BRAND = {
  logo: asset("uploads/tractrac logo png 4.png"),
  googlePlay: asset("uploads/google-play-badge-logo_svgrepo.com.png"),
  googlePlayUrl: "https://play.google.com/store/apps/details?id=com.tractrac.plus",
  appStoreUrl: "https://apps.apple.com/ng/app/tractrac-plus/id6754968082",
  blurb:
    "Making mechanisation easier to access for farmers, equipment owners, agents and service providers.",
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "TracTrac",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Impact", href: "/impact" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/#final" },
    ],
  },
  {
    title: "Get Mechanisation",
    links: [
      { label: "For Farmers", href: "/solutions#farmers" },
      { label: "For Equipment Owners", href: "/solutions#owners" },
      { label: "For Booking Agents", href: "/solutions#agents" },
      { label: "For Mechanisation Service Providers", href: "/solutions#msp" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "TracTrac Plus", href: "/technology" },
      { label: "TracTrac Agent", href: "/technology#agent" },
    ],
  },
  {
    title: "Programmes",
    links: [
      { label: "All programmes", href: "/programmes" },
      { label: "ISSAM", href: "/programmes/issam" },
      {
        label: "Young People in Mechanisation",
        href: "/programmes/young-people-in-mechanisation",
      },
      { label: "TRAxCelerate", href: "/programmes/traxcellerate" },
      { label: "TRACINVEST", href: "/programmes/tracinvest" },
      { label: "H₂O: Half-Way to Ownership", href: "/programmes/h2o" },
      { label: "Rise7: Empowering Seven to Scale", href: "/programmes/rise7" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "Work With Us", href: "/partners#work-with-us" },
      { label: "Finance and Investment", href: "/partners#finance" },
      { label: "Government and Regulators", href: "/partners" },
      { label: "Development Partners", href: "/partners#development-partners" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Stories and News", href: "/blog" },
      { label: "Research and Resources", href: "/blog" },
      { label: "FAQs", href: "/#faq" },
    ],
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];

export const SOCIAL_LINKS: NavLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/tractrac/" },
  { label: "Instagram", href: "https://www.instagram.com/tractracglobal/" },
  { label: "X", href: "https://x.com/tractracglobal" },
  { label: "Facebook", href: "https://www.facebook.com/tractracglobal" },
  { label: "YouTube", href: "https://www.youtube.com/@tractrac" },
];

export const SITE = {
  name: "TracTrac",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tractrac.co",
  description:
    "TracTrac helps farmers find tractors and other equipment when they need them, while giving equipment owners, agents and service providers the tools to keep those machines working.",
};
