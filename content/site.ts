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
    links: [
      { label: "For Farmers", href: "/#pathways" },
      { label: "For Equipment Owners", href: "/#pathways" },
      { label: "For Booking Agents", href: "/#pathways" },
      { label: "For Mechanisation Service Providers", href: "/#pathways" },
    ],
  },
  {
    label: "Technology",
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
    links: [
      { label: "Our Impact", href: "/impact" },
      { label: "Stories from the Field", href: "/insights" },
    ],
  },
  {
    label: "Partners",
    links: [
      { label: "Work With Us", href: "/partners" },
      { label: "Finance and Investment", href: "/partners" },
      { label: "Development Partners", href: "/partners" },
    ],
  },
  {
    label: "Insights",
    links: [
      { label: "Stories and News", href: "/insights" },
      { label: "Research and Resources", href: "/insights" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/#faq" },
];

export const CTAS = {
  secondary: { label: "Partner With Us", href: "/#partnership" },
  primary: { label: "Find Mechanisation", href: "/#final" },
};

export const BRAND = {
  logo: asset("uploads/tractrac logo png 4.png"),
  googlePlay: asset("uploads/google-play-badge-logo_svgrepo.com.png"),
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
      { label: "For Farmers", href: "/#pathways" },
      { label: "For Equipment Owners", href: "/#pathways" },
      { label: "For Booking Agents", href: "/#pathways" },
      { label: "For Mechanisation Service Providers", href: "/#pathways" },
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
      { label: "Work With Us", href: "/partners" },
      { label: "Finance and Investment", href: "/partners" },
      { label: "Government and Regulators", href: "/partners" },
      { label: "Development Partners", href: "/partners" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Stories and News", href: "/insights" },
      { label: "Research and Resources", href: "/insights" },
      { label: "FAQs", href: "/#faq" },
    ],
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/" },
  { label: "Terms and Conditions", href: "/" },
];

export const SOCIAL_LINKS: NavLink[] = [
  { label: "LinkedIn", href: "/" },
  { label: "Instagram", href: "/" },
  { label: "X", href: "/" },
  { label: "Facebook", href: "/" },
  { label: "YouTube", href: "/" },
];

export const SITE = {
  name: "TracTrac",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tractrac.co",
  description:
    "TracTrac helps farmers find tractors and other equipment when they need them, while giving equipment owners, agents and service providers the tools to keep those machines working.",
};
