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
      { label: "For Mechanization Service Providers", href: "/solutions#msp" },
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
    label: "Programs",
    wide: true,
    href: "/programmes",
    feature: { label: "All programs →", href: "/programmes", description: "Overview" },
    links: [
      {
        label: "ISSAM",
        href: "/programmes/issam",
        description: "Smallholder access to small-scale mechanization",
      },
      {
        label: "Young People in Mechanization",
        href: "/programmes/young-people-in-mechanisation",
        description: "Skills and careers in mechanization",
      },
      {
        label: "TRAxCelerate",
        href: "/programmes/traxcellerate",
        description: "Program design and delivery",
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
    label: "Stories",
    href: "/stories",
  },
  {
    label: "Partners",
    href: "/partners",
  },
  {
    label: "Resources",
    href: "/blog",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Research and report", href: "/resources" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
];

export const CTAS = {
  secondary: { label: "Partner With Us", href: "/partners#contact" },
  primary: { label: "Access Farm Machinery", href: "/technology#download" },
};

export const BRAND = {
  logo: asset("uploads/tractrac logo png 4.png"),
  googlePlay: asset("uploads/google-play-badge-logo_svgrepo.com.png"),
  googlePlayWhite: "/badges/google-play-badge-white.svg",
  appStoreWhite: "/badges/app-store-badge-white.svg",
  googlePlayUrl: "https://play.google.com/store/apps/details?id=com.tractrac.plus",
  appStoreUrl: "https://apps.apple.com/ng/app/tractrac-plus/id6754968082",
  blurb:
    "Making mechanization easier to access for farmers, equipment owners, agents and service providers.",
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
      { label: "Stories from the Field", href: "/stories" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Get Mechanization",
    links: [
      { label: "For Farmers", href: "/solutions#farmers" },
      { label: "For Equipment Owners", href: "/solutions#owners" },
      { label: "For Booking Agents", href: "/solutions#agents" },
      { label: "For Mechanization Service Providers", href: "/solutions#msp" },
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
    title: "Programs",
    links: [
      { label: "All programs", href: "/programmes" },
      { label: "ISSAM", href: "/programmes/issam" },
      {
        label: "Young People in Mechanization",
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
      { label: "Blog", href: "/blog" },
      { label: "Research and report", href: "/resources" },
      { label: "FAQs", href: "/#faq" },
    ],
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];

export const SOCIAL_LINKS: NavLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/tractracglobal/" },
  { label: "X", href: "https://x.com/tractracglobal" },
  { label: "Facebook", href: "https://www.facebook.com/tractracglobal" },
  { label: "YouTube", href: "https://www.youtube.com/@tractrac" },
];

export const SITE = {
  name: "TracTrac",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tractrac.co",
  description:
    "TracTrac connects farmers to tractors and other equipment when they need them, while giving equipment owners, agents and service providers the tools to keep those machines working.",
};
