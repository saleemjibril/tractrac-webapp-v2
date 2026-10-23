export type TeamMember = {
  id: string;
  name: string;
  title: string;
  dept: string;
  linkedin: string;
  photo: string;
  leadership: boolean;
  bio: string[];
};

export const TEAM: TeamMember[] = [
  {
    id: "godson-ohuruogu",
    name: "Godson Ohuruogu",
    title: "Chief Executive Officer",
    dept: "CEO",
    linkedin: "",
    photo: "",
    leadership: true,
    bio: [
      "Godson Ohuruogu is an agribusiness and private sector development expert with over 17 years of experience in value chain development, SME growth, rural transformation, and climate-smart agriculture.",
      "He holds an MBA from the University of Leeds (UK) and a BSc in Industrial and Production Engineering from the University of Ibadan (Nigeria).",
      "At TracTrac, he leads the strategic vision to accelerate mechanisation access and build scalable agricultural systems that empower smallholder farmers.",
    ],
  },
  {
    id: "stephen-aguebor",
    name: "Stephen Aguebor",
    title: "Deputy Team Lead, ISSAM Project",
    dept: "Programmes and MERL",
    linkedin: "",
    photo: "",
    leadership: true,
    bio: [
      "Stephen Aguebor is a seasoned development and humanitarian specialist with over 12 years of experience designing and managing high-impact projects in agricultural livelihoods, financial inclusion, climate-smart agriculture, and market systems development.",
      "At TracTrac, he supports the implementation of the ISSAM Project, empowering youth- and women-led mechanisation businesses across Nigeria.",
    ],
  },
  {
    id: "alero-otis",
    name: "Alero Otis",
    title: "Head of Projects & Partnerships",
    dept: "Partnerships and Communications",
    linkedin: "",
    photo: "",
    leadership: true,
    bio: [
      "Alero Otis is a development and research specialist with extensive experience in programme implementation, policy advocacy, and strategic partnerships.",
      "At TracTrac, she leads the design and execution of large-scale initiatives that strengthen agricultural systems, expand mechanisation access, and empower smallholder farmers across Nigeria.",
    ],
  },
  {
    id: "samuel-olanikepun",
    name: "Samuel Olanikepun",
    title: "MERL Team Lead",
    dept: "Programmes and MERL",
    linkedin: "",
    photo: "",
    leadership: true,
    bio: [
      "Samuel leads Monitoring, Evaluation, Research, and Learning (MERL) at TracTrac, ensuring that programmes deliver measurable impact and continuous improvement.",
      "He oversees data-driven programme evaluation and impact measurement across TracTrac initiatives.",
    ],
  },
  {
    id: "adanna-atounwu",
    name: "Adanna Atounwu",
    title: "Communications Lead",
    dept: "Partnerships and Communications",
    linkedin: "",
    photo: "",
    leadership: true,
    bio: [
      "Adanna leads TracTrac’s communications strategy, shaping how the organisation tells its story, amplifies its impact, and engages stakeholders across the agricultural ecosystem.",
      "Her work ensures that TracTrac’s mission, programmes, and partnerships reach the audiences that matter.",
    ],
  },
  {
    id: "john-olanrewaju",
    name: "Dr. Engr. John Olaseye Olanrewaju",
    title: "Engineering Lead",
    dept: "Engineering, Product and IT",
    linkedin: "",
    photo: "",
    leadership: true,
    bio: [
      "Dr. Olanrewaju leads engineering and mechanisation systems development, ensuring the deployment of equipment tailored to the needs of farmers across operational states.",
      "He brings deep expertise in agricultural engineering and mechanisation infrastructure.",
    ],
  },
  {
    id: "israel-olatunde",
    name: "Israel Olatunde",
    title: "IT Lead",
    dept: "Engineering, Product and IT",
    linkedin: "",
    photo: "",
    leadership: true,
    bio: [
      "Israel leads the development and management of TracTrac’s digital infrastructure, including platforms that connect farmers, mechanisation service providers, and partners.",
      "His work powers the technology systems behind TracTrac’s mechanisation ecosystem.",
    ],
  },
  {
    id: "mercy-balogun",
    name: "Mercy Balogun",
    title: "Product Manager",
    dept: "Engineering, Product and IT",
    linkedin: "",
    photo: "",
    leadership: true,
    bio: [
      "Mercy Balogun is a product and design professional with over eight years of experience in product design, digital experiences, and technology-driven solutions across agriculture, fintech, SaaS, and other sectors.",
      "At TracTrac, she leads product planning, design, and development coordination across the organisation’s digital platforms, translating operational and user needs into practical digital solutions. She works closely with Technology and other teams to shape products that improve access to agricultural mechanisation and strengthen the digital systems supporting TracTrac’s operations.",
    ],
  },
  {
    id: "ekene-chukwunyebendu-nnolum",
    name: "Ekene Chukwunyebendu-Nnolum",
    title: "Finance Manager",
    dept: "Operations and Finance",
    linkedin: "",
    photo: "",
    leadership: true,
    bio: [
      "Ekene leads financial management at TracTrac, overseeing budgeting, financial reporting, and controls across the organisation’s programmes and operations.",
      "His work ensures that resources are managed responsibly and transparently, supporting TracTrac’s partners and the delivery of mechanisation services to farmers.",
    ],
  },
  {
    id: "ojoma-okwute",
    name: "Barr. Ojoma Okwute",
    title: "Head of Operations",
    dept: "Operations and Finance",
    linkedin: "",
    photo: "",
    leadership: true,
    bio: [
      "Barrister Ojoma Okwute leads operational strategy and execution across TracTrac programmes.",
      "She ensures efficiency, compliance, and successful delivery of mechanisation services across operational regions.",
    ],
  },
  {
    id: "jemaimah-jennifer-justice",
    name: "Jemaimah Jennifer Justice",
    title: "Investment and Asset Manager",
    dept: "Operations and Finance",
    linkedin: "",
    photo: "",
    leadership: true,
    bio: [
      "Jemaimah Jennifer Justice manages investment and assets at TracTrac, overseeing the organisation’s equipment portfolio and the financing arrangements that put tractors and implements in the hands of mechanisation service providers.",
      "She works with financial partners and programme teams to structure asset ownership models, track asset performance, and ensure that investment in mechanisation delivers lasting value for service providers and the farmers they serve.",
    ],
  },
];

export const TEAM_DEPARTMENTS = [
  "CEO",
  "Operations and Finance",
  "Programmes and MERL",
  "Partnerships and Communications",
  "Engineering, Product and IT",
];

export const LEADERSHIP = TEAM.filter((person) => person.leadership);

export function personAlt(person: TeamMember) {
  return `Portrait of ${person.name}, ${person.title}`;
}

export function initials(name: string) {
  return name
    .replace(/^(Dr\.|Engr\.|Barr\.)\s+/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function personAnchor(person: TeamMember) {
  return `p-${person.id}`;
}
