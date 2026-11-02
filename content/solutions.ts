import { asset } from "@/lib/asset";

export type SolutionPath = {
  id: string;
  number: string;
  label: string;
  title: string;
  lede: string;
  steps: string[];
  image: string;
  alt: string;
  cta: { label: string; href: string };
};

export const SOLUTIONS_HERO = {
  image: asset("uploads/DSC07701.jpg"),
  alt: "An operator ploughing a field with a TracTrac tractor",
  title: "One network, four ways in.",
  lede:
    "TracTrac connects the four roles that move machinery from the farmer who needs it to the field where the work happens. Find the one that fits you.",
};

export const SOLUTIONS: SolutionPath[] = [
  {
    id: "farmers",
    number: "01",
    label: "For Farmers",
    title: "Get the machinery your farm needs.",
    lede:
      "Find mechanisation services around you without having to buy and maintain expensive equipment yourself.",
    steps: [
      "Tell us what you need done, from ploughing and harrowing to planting, spraying and harvesting.",
      "A booking agent confirms the size and location of your plot so the price is clear before work starts.",
      "A verified operator arrives on the agreed date and you follow the job from booking to payment.",
    ],
    image: asset("uploads/Copy of DSC08691.jpg"),
    alt: "An operator working farmland with a TracTrac tractor and disc plough",
    cta: { label: "Access Farm Machinery", href: "/technology#download" },
  },
  {
    id: "owners",
    number: "02",
    label: "For Equipment Owners",
    title: "Put your machinery to work.",
    lede:
      "Enlist your equipment, complete verification and connect your machines to farmer demand.",
    steps: [
      "Add your tractors and implements with their location, type and condition.",
      "We check ownership and condition so farmers and agents know what they are booking.",
      "Requests from nearby farmers are grouped and sent to you, with bookings and payments recorded.",
    ],
    image: asset("uploads/Copy of DSC07693.jpg"),
    alt: "Close up of a disc plough turning soil behind a TracTrac tractor",
    cta: { label: "Enlist Your Equipment", href: "/technology#download" },
  },
  {
    id: "agents",
    number: "03",
    label: "For Booking Agents",
    title: "Get farmers around you connected.",
    lede:
      "Bring farmer demand together, connect communities to available services and earn while supporting the people around you.",
    steps: [
      "Sign up, complete onboarding and get set up with the TracTrac Agent app.",
      "Visit farms in your community, measure plots and capture requests, even with low connectivity.",
      "Group nearby requests into jobs and earn as services are delivered.",
    ],
    image: asset("uploads/IMG-20260824-WA0147.jpg"),
    alt: "A TracTrac booking agent in a branded shirt talking with a farmer",
    cta: { label: "Become a Booking Agent", href: "/technology#download" },
  },
  {
    id: "msp",
    number: "04",
    label: "For Mechanisation Service Providers",
    title: "Build a business around the work farmers need done.",
    lede:
      "Develop your skills, reach more farmers and grow a business providing mechanisation services.",
    steps: [
      "Train in operation, maintenance and running a mechanisation business through TracTrac programs.",
      "Receive bookings from agents and deliver services on the ground with owned or leased equipment.",
      "Use your job history to reach more farmers and access finance for more equipment.",
    ],
    image: asset("uploads/Copy of DSC08208.jpg"),
    alt: "Trainees operating a tractor during a practical session",
    cta: { label: "Get Started", href: "/technology#download" },
  },
];
