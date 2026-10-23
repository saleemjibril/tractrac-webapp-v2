import { asset } from "@/lib/asset";

/** Poster frame for the homepage hero video, served from the media API. */
export const HERO_POSTER =
  "https://api.tractrac.co/media/images/a8e310e0-d23f-442a-b21d-87f3c77ffce2.jpg";

export type HomeStat = {
  count: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  accent?: boolean;
  icon: "sprout" | "book" | "wrench" | "people" | "banknote";
};

export const HOME_STATS: HomeStat[] = [
  { count: 500, suffix: "K+", label: "Farmers reached", icon: "sprout" },
  { count: 6000, suffix: "+", label: "People trained", icon: "book" },
  { count: 3000, suffix: "+", label: "Jobs created", icon: "wrench" },
  { count: 566, label: "Cooperatives established", icon: "people" },
  { count: 2, prefix: "₦", suffix: "B+", label: "Investment catalysed", icon: "banknote", accent: true },
];

export const ECOSYSTEM_ROLES = [
  {
    number: "01",
    title: "Equipment Owners",
    body: "Keep machinery available and working.",
  },
  {
    number: "02",
    title: "Farmers",
    body: "Need mechanisation services and request the service.",
  },
  {
    number: "03",
    title: "Booking Agents",
    body: "Bring nearby farmer demand together.",
  },
  {
    number: "04",
    title: "Mechanisation Service Providers",
    body: "Take the job and deliver it on the ground.",
  },
];

export const ENABLING_ENVIRONMENT = [
  { title: "Cooperatives", body: "Organise local mechanisation businesses." },
  { title: "Finance & Investors", body: "Put capital behind machinery." },
  { title: "Government & Regulators", body: "Shape the operating environment." },
  { title: "Development Partners", body: "Help effective models grow." },
];

export const EQUIPMENT = [
  {
    title: "Land preparation",
    body: "Ploughing, harrowing and ridging with tractor mounted implements.",
    image: asset("uploads/Copy of DSC07693.jpg"),
    alt: "Disc plough turning soil during land preparation",
  },
  {
    title: "Planting",
    body: "Seeding and planting with matched implements.",
    image: asset("uploads/WhatsApp Image 2026-09-03 at 11.09.38 (5).jpeg"),
    alt: "Rows of new TracTrac ISSAM manual seed planters ready for distribution",
  },
  {
    title: "Spraying",
    body: "Crop protection with smaller powered equipment.",
    image: asset("uploads/WhatsApp Image 2026-09-03 at 11.09.37 (1).jpeg"),
    alt: "A solar powered knapsack sprayer with its panel set up in a field",
  },
  {
    title: "Irrigation and fertiliser application",
    body: "Keeping the crop supplied through the season.",
    image: asset("uploads/WhatsApp Image 2026-09-03 at 11.09.37 (2).jpeg"),
    alt: "A 25 litre backpack fertiliser applicator branded TracTrac ISSAM",
  },
  {
    title: "Harvest and post harvest",
    body: "Harvesting, threshing and soil testing services.",
    image: asset("uploads/WhatsApp Image 2026-09-03 at 11.09.38 (1).jpeg"),
    alt: "A petrol powered thresher demonstrated in front of a farmer group",
  },
  {
    title: "Haulage and transport",
    body: "Moving inputs to the farm and produce to market.",
    image: asset("uploads/WhatsApp Image 2026-09-03 at 11.09.38 (6).jpeg"),
    alt: "A yard of new orange TracTrac ISSAM tractor trailers",
  },
];

export const MARQUEE_ITEMS = [
  "Live equipment tracking",
  "Smart farm mapping",
  "Equipment discovery",
  "Location based search",
  "Book ahead",
  "Operational updates",
];

export const TECH_STEPS = [
  {
    number: "01",
    kicker: "01 · Find",
    title: "Find the right machinery near you.",
    lead: "See available tractors and equipment around you.",
    body: "Search by location, equipment type, capacity and availability, and filter down to what actually fits the job.",
    screen: asset("uploads/Hire a tractor.png"),
    screenAlt:
      "TracTrac Plus Hire a Tractor screen showing map based machinery discovery and equipment listings",
  },
  {
    number: "02",
    kicker: "02 · Book",
    title: "Choose the service and make the request.",
    lead: "Walk the boundary. Your phone maps the farm.",
    body: "Accurate farm size means accurate pricing, so you can request the service now or plan ahead for when the work needs to happen.",
    screen: asset("uploads/Farm Measurement.png"),
    screenAlt:
      "TracTrac Plus farm measurement screen mapping a farm boundary before a booking",
  },
  {
    number: "03",
    kicker: "03 · Follow",
    title: "Track what happens next.",
    lead: "Bookings, payments and field activity in one place.",
    body: "Agents can also capture information in low connectivity areas and sync it when a connection comes back, so the work is never held up.",
    screen: asset("uploads/Notification.png"),
    screenAlt:
      "TracTrac Plus notifications screen showing invoice and operation updates",
  },
];

export const STORY_CARDS = [
  {
    category: "Service providers",
    title: "What it really costs to keep a machine working.",
    excerpt: "Keana LGA — on fuel, repairs, idle weeks and the jobs that never get paid.",
    image: asset("uploads/Existing MSP Interview Keana LGA.jpg"),
    position: "50% 40%",
    alt: "A mechanisation service provider in a TracTrac shirt talking with a researcher at the roadside in Keana LGA",
    href: "/stories/service-providers",
  },
  {
    category: "Farmers",
    title: "Who you call when the rains arrive early.",
    excerpt:
      "Lafia LGA — how land preparation gets arranged when the window is only days long.",
    image: asset("uploads/Existing MSP Interview Lafia LGA.jpg"),
    position: "50% 40%",
    alt: "A farmer speaking with a TracTrac field researcher on a bench under a tree in Lafia LGA",
    href: "/stories/farmers",
  },
  {
    category: "Women in farming",
    title: "Access is not the same for everyone.",
    excerpt:
      "Women farmers describe a different set of barriers to getting machinery on their plots.",
    image: asset("uploads/IMG-20260824-WA0164.jpg"),
    position: "50% 40%",
    alt: "A woman farmer being interviewed by a TracTrac researcher outside her home",
    href: "/stories/women-in-farming",
  },
  {
    category: "Booking agents",
    title: "The people behind every request.",
    excerpt:
      "Agents translate a phone call in a village into a booking a machine owner can act on.",
    image: asset("uploads/IMG-20260824-WA0147.jpg"),
    position: "50% 40%",
    alt: "A TracTrac booking agent in a branded shirt being interviewed on a bench",
    href: "/stories/booking-agents",
  },
];

export const HOME_INSIGHTS = [
  {
    category: "Programme updates",
    title:
      "Operators’ Training and Community Demo Events Strengthen Mechanization Ecosystems Across Nasarawa — ISSAM Project",
    excerpt:
      "Over 28,000 farmers were reached in April and May as the ISSAM project drives operator training and community demo events with year 1 MSPs across Nasarawa state.",
    image: asset("uploads/Copy of DSC08699.jpg"),
    position: "50% 45%",
    alt: "ISSAM programme trainees gathered around machinery during a practical session",
    href: "https://tractrac.co/blog",
  },
  {
    category: "Sector perspective",
    title:
      "Nigeria’s Mechanization Shift: What It Means for Farmers and the Future of Farming",
    excerpt:
      "There is a growing understanding that agricultural mechanization in Nigeria cannot succeed as a government-only effort.",
    image: asset("uploads/DSC02329.jpg"),
    position: "50% 45%",
    alt: "TracTrac and government stakeholders at a national mechanisation event",
    href: "https://tractrac.co/blog/nigerias-mechanization-shift-what-it-means-for-farmers-and-the-future-of-farming",
  },
  {
    category: "Practical guidance",
    title: "Top 5 Tractors for Farming in Nigeria and Their Prices",
    excerpt:
      "Buying a tractor in Nigeria is more than choosing a popular brand. We sat with our expert on farm mechanization to discuss the best options, prices and things to consider.",
    image: asset("uploads/Copy of DSC07691.jpg"),
    position: "50% 45%",
    alt: "A TracTrac tryctor at work on farmland in Nasarawa State",
    href: "https://tractrac.co/blog/top-5-tractors-for-farming-in-nigeria-and-their-prices",
  },
];

export const PARTNER_LOGOS = [
  {
    name: "Mastercard Foundation",
    src: asset("uploads/Full Colour Negative 2 1.png"),
    width: 301,
    height: 308,
    maxHeight: 130,
  },
  {
    name: "Federal Ministry of Agriculture and Food Security",
    src: asset("uploads/Group 1000005124.png"),
    width: 1279,
    height: 287,
    maxHeight: 74,
  },
  {
    name: "National Centre for Agricultural Mechanization",
    src: asset("uploads/freepik_br_3d0c3a9a-6a2a-4afb-8645-a81911e4a668 1.png"),
    width: 327,
    height: 310,
    maxHeight: 112,
  },
  { name: "AMTA", src: asset("uploads/imageye___-_imgi_1_AMTA c 1.png"),
    width: 401,
    height: 401, maxHeight: 110 },
  {
    name: "Women in Mechanized Agriculture",
    src: asset("uploads/WIMA LOGO 1.png"),
    width: 367,
    height: 344,
    maxHeight: 112,
  },
  { name: "Ikore", src: asset("uploads/Ikore 1.png"),
    width: 549,
    height: 375, maxHeight: 92 },
  {
    name: "Sane Konsult International Limited",
    src: asset("uploads/imageye___-_imgi_1_logo-final 1.png"),
    width: 625,
    height: 209,
    maxHeight: 80,
  },
];

export const SHOWCASES = [
  {
    name: "ISSAM",
    title: "Building local businesses around mechanisation.",
    subtitle:
      "Improving Smallholder Farmers' Access to Small Scale Agricultural Mechanisation Services",
    paragraphs: [
      "Through ISSAM, TracTrac and Mastercard Foundation are supporting young people to build businesses that bring agricultural machinery closer to farming communities.",
      "Youth led cooperatives receive machinery alongside technical training and business support, helping them provide mechanisation services while building sustainable livelihoods.",
    ],
    flow: [
      "Machinery",
      "Skills",
      "Youth led cooperatives",
      "Mechanisation businesses",
      "Farmers served",
    ],
    slides: [
      {
        image: asset("uploads/Copy of DSC07683.jpg"),
        alt: "ISSAM participants working with tractors and implements in the field",
      },
      {
        image: asset("uploads/Copy of DSC08208.jpg"),
        alt: "ISSAM trainees on a tractor during a practical session",
      },
      {
        image: asset("uploads/Copy of DSC08699.jpg"),
        alt: "A young operator in ISSAM coveralls working farmland with a tryctor",
      },
      {
        image: asset("uploads/IMG_9824.JPEG"),
        alt: "Rows of new ISSAM machinery lined up before handover to youth led cooperatives",
      },
    ],
    href: "/programmes/issam",
    cta: "Learn About ISSAM",
  },
  {
    name: "YPiM",
    title: "Agriculture needs people who know how to make machines work.",
    subtitle: "Young People in Mechanisation",
    paragraphs: [
      "Young People in Mechanisation creates pathways for young Nigerians to learn practical skills, meet mentors and explore careers and businesses within agricultural mechanisation.",
      "It is about helping young people see mechanisation as somewhere they can build a career, a business and a future.",
    ],
    flow: [],
    slides: [
      {
        image: asset("uploads/Copy of DSC07682.jpg"),
        alt: "A young operator learning to work a field with a tractor",
      },
    ],
    href: "/programmes/young-people-in-mechanisation",
    cta: "Discover YPiM",
  },
];
