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
    photo: "https://api.tractrac.co/media/images/b0ed053e-bbd1-4606-bd7f-88cfb6b909d0.jpg",
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
    photo: "https://api.tractrac.co/media/images/53bf9786-dc8d-4005-a1a7-3a4147972c45.jpg",
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
    photo: "https://api.tractrac.co/media/images/b8b136e0-100b-4358-9dc9-fb66ebec99be.jpg",
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
    photo: "https://api.tractrac.co/media/images/5933a8c3-8a16-468c-aa4a-378e4eac593c.jpg",
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
    photo: "https://api.tractrac.co/media/images/5acf5490-e290-4d7a-b533-966993660604.jpg",
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
    photo: "https://api.tractrac.co/media/images/49f37230-0065-4d97-a19a-f51d1f959fdb.jpg",
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
    photo: "https://api.tractrac.co/media/images/209e1fb9-e2ea-4e97-920e-e0cd1db1f82c.jpg",
    leadership: true,
    bio: [
      "Jemaimah Jennifer Justice manages investment and assets at TracTrac, overseeing the organisation’s equipment portfolio and the financing arrangements that put tractors and implements in the hands of mechanisation service providers.",
      "She works with financial partners and programme teams to structure asset ownership models, track asset performance, and ensure that investment in mechanisation delivers lasting value for service providers and the farmers they serve.",
    ],
  },
  {
    id: "adedolapo-olupona",
    name: "Adedolapo Olupona",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/606e3e3d-f9f0-4cc6-a175-22fb4bcba5bb.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "adeyinka-adelusi",
    name: "Adeyinka Adelusi",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/e820b0c3-ebb5-4c0d-8767-170f01bc6937.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "ajibola-afolashade",
    name: "Ajibola Afolashade",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/7b40f821-e45b-4af6-8a7d-4476975a06f5.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "anthony-attoh",
    name: "Anthony Attoh",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/796ec410-32ae-40d4-a630-5ffe1ace24d0.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "ashey-matthew-osebi",
    name: "Ashey Matthew Osebi",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/d57bc579-4d37-47ef-aaf8-ecd39cddc52b.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "betini-akarandut",
    name: "Betini Akarandut",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/c1f9672e-0c80-4419-864b-e1b5a3796800.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "bridget-augustine",
    name: "Bridget Augustine",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/8259acfb-bf4d-4a9f-90df-92211df41d61.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "chidinma-ekwonu",
    name: "Chidinma Ekwonu",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/b00b805d-df8d-4a76-adbe-8ac9cddd42a1.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "eunice-ademakinwa",
    name: "Eunice Ademakinwa",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/a6d8409f-73ed-410e-a7bc-a4ee2eaaeeba.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "godsfavour-nyoyoko",
    name: "Godsfavour Nyoyoko",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/9eb8761f-108c-4c82-b37b-8bfaa425cad1.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "grace-john",
    name: "Grace John",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/c4831ba9-3c91-48ca-8cb9-f4be5e330ce8.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "ikenna-nnorom",
    name: "Ikenna Nnorom",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/03d30b9e-011b-4b72-be6d-ee73d5accb88.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "larai-tumba-sini",
    name: "Larai Tumba Sini",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/0b6d6adb-cc35-414b-8f1c-50a69872d092.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "magdalene-osagie",
    name: "Magdalene Osagie",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/2cd77493-27c5-4235-9b3b-63dc73faee55.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "martha-peter",
    name: "Martha Peter",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/e5715d6c-9c1c-4e72-9a88-7c96ece22f63.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "mercy-eduyubgbo",
    name: "Mercy Eduyubgbo",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/35f08b9d-0794-4a9d-909e-60d47904b767.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "peter-agbo",
    name: "Peter Agbo",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/f6d027d7-faf3-4e86-8ca2-d62ed3b56e4e.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "samson-ugbegbor",
    name: "Samson Ugbegbor",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/4eec5df9-dddd-4a98-a985-69f0959963a0.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "thankgod-onugwu",
    name: "ThankGod Onugwu",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/90ba42aa-ce7e-45c9-986c-7981ff78a480.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "yahaya-emmanuel",
    name: "Yahaya Emmanuel",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/30b436e9-2f68-4fa2-ba58-83e6d48869d4.jpg",
    leadership: false,
    bio: [],
  },
];

export const TEAM_DEPARTMENTS = [
  "CEO",
  "Operations and Finance",
  "Programmes and MERL",
  "Partnerships and Communications",
  "Engineering, Product and IT",
  "Our team",
];

export const LEADERSHIP = TEAM.filter((person) => person.leadership);

export function personAlt(person: TeamMember) {
  return person.title
    ? `Portrait of ${person.name}, ${person.title}`
    : `Portrait of ${person.name}`;
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
