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
    dept: "Programs and MERL",
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
      "Alero Otis is a development and research specialist with extensive experience in program implementation, policy advocacy, and strategic partnerships.",
      "At TracTrac, she leads the design and execution of large-scale initiatives that strengthen agricultural systems, expand mechanisation access, and empower smallholder farmers across Nigeria.",
    ],
  },
  {
    id: "samuel-olanikepun",
    name: "Samuel Olanikepun",
    title: "MERL Team Lead",
    dept: "Programs and MERL",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/b8b136e0-100b-4358-9dc9-fb66ebec99be.jpg",
    leadership: true,
    bio: [
      "Samuel leads Monitoring, Evaluation, Research, and Learning (MERL) at TracTrac, ensuring that programs deliver measurable impact and continuous improvement.",
      "He oversees data-driven program evaluation and impact measurement across TracTrac initiatives.",
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
      "Her work ensures that TracTrac’s mission, programs, and partnerships reach the audiences that matter.",
    ],
  },
  {
    id: "john-olanrewaju",
    name: "John Olaseye Olanrewaju",
    title: "Engineering Lead",
    dept: "Engineering, Product and IT",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/5acf5490-e290-4d7a-b533-966993660604.jpg",
    leadership: true,
    bio: [
      "Olanrewaju leads engineering and mechanisation systems development, ensuring the deployment of equipment tailored to the needs of farmers across operational states.",
      "He brings deep expertise in agricultural engineering and mechanisation infrastructure.",
    ],
  },
  {
    id: "israel-olatunde",
    name: "Israel Feranmi Olatunde",
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
    photo: "https://api.tractrac.co/media/images/35f08b9d-0794-4a9d-909e-60d47904b767.jpg",
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
    linkedin: "https://www.linkedin.com/in/chukwunyebendu-nnolum-bright-36105499/",
    photo: "https://api.tractrac.co/media/images/8ee37f84-ed45-48c6-9a1e-849695b9e33d.png",
    leadership: true,
    bio: [
      "Ekene Nnolum is a Finance and Operations professional with over 10 years of experience in financial management, donor compliance, budgeting, and risk management across international development and humanitarian programs.",
      "At TracTrac MSL, he oversees financial planning, reporting, cash flow, internal controls, and donor compliance, supporting accountability and value for money in the ISSAM program funded by the Mastercard Foundation.",
      "He is a Certified National Accountant with an MBA in Finance and Investment from Ahmadu Bello University, Zaria, and a certificate in Sustainable Development from the University of Leicester. He is passionate about strengthening financial systems, optimising resources, and enabling programs to achieve sustainable impact.",
    ],
  },
  {
    id: "ojoma-okwute",
    name: "Ojoma Okwute",
    title: "Head of Operations",
    dept: "Operations and Finance",
    linkedin: "",
    photo: "",
    leadership: true,
    bio: [
      "Ojoma Okwute leads operational strategy and execution across TracTrac programs.",
      "She ensures efficiency, compliance, and successful delivery of mechanisation services across operational regions.",
    ],
  },
  {
    id: "jemimah-jennifer-justus",
    name: "Jemimah Jennifer Justus",
    title:
      "Investment and Asset Management, Gender, Diversity and Social Inclusion (GEDSI) Lead",
    dept: "Investment, Asset Management and GEDSI",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/052d5cb8-dae3-4cc9-a285-c532d379fd9a.jpeg",
    leadership: true,
    bio: [
      "Jemimah Jennifer Justus manages investment and assets at TracTrac, overseeing the organisation’s equipment portfolio and the financing arrangements that put tractors and implements in the hands of mechanisation service providers.",
      "She works with financial partners and program teams to structure asset ownership models, track asset performance, and ensure that investment in mechanisation delivers lasting value for service providers and the farmers they serve.",
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
    name: "Afolashade Sophie Ajibola-Adeyinka",
    title: "Communications, Media and Digital Marketing Specialist",
    dept: "Partnerships and Communications",
    linkedin: "https://www.linkedin.com/in/folaajibola",
    photo: "https://api.tractrac.co/media/images/a795deee-3ce6-4839-9d71-64e455a0e56d.jpg",
    leadership: false,
    bio: [
      "Afolashade is a Communications, Media and Digital Marketing Specialist at TracTrac MSL. She works across storytelling, content and product marketing, SEO, growth, digital channels and internal communications.",
    ],
  },
  {
    id: "isaiah-ogede",
    name: "Isaiah Ogede",
    title: "Documentary Photographer, Cinematographer and Visual Storyteller",
    dept: "Partnerships and Communications",
    linkedin: "https://www.linkedin.com/in/isaiah-ogede/",
    photo: "https://api.tractrac.co/media/images/0f4cca2b-243b-4c6f-b1b0-988dbaa01bc3.jpg",
    leadership: false,
    bio: [
      "Isaiah Ogede is a documentary photographer, cinematographer, visual storyteller, and clinical psychologist.",
      "His work spans documentary filmmaking, photography, and creative direction, with a focus on telling compelling stories that capture authentic human experiences, communicate ideas, and create meaningful connections.",
    ],
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
    title: "MERL Associate",
    dept: "Programs and MERL",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/d57bc579-4d37-47ef-aaf8-ecd39cddc52b.jpg",
    leadership: false,
    bio: [
      "Ashey Matthew Osebi is a MERL Associate at TracTrac MSL, supporting program monitoring, data management, reporting, and learning to strengthen the implementation of agricultural mechanisation initiatives.",
      "He works closely with project teams and MSP cooperatives to track performance, document results, and generate insights that improve service delivery, promote accountability, and support sustainable access to agricultural mechanisation services for smallholder farmers.",
    ],
  },
  {
    id: "betini-akarandut",
    name: "Betini Akarandut",
    title: "Lead Backend/DevOps Engineer",
    dept: "Engineering, Product and IT",
    linkedin: "https://www.linkedin.com/in/betiniakarandut/",
    photo: "https://api.tractrac.co/media/images/c1f9672e-0c80-4419-864b-e1b5a3796800.jpg",
    leadership: false,
    bio: [
      "Betini Akarandut is a Lead Backend/DevOps Engineer at TracTrac MSL, responsible for designing, developing, and maintaining scalable backend systems and reliable cloud infrastructure. He leads API development, database management, system integrations, and deployment operations, supporting TracTrac’s digital agricultural solutions.",
      "His work focuses on building secure, high-performance, and resilient systems that power tractor hiring, farm logistics, digital payments, and GPS-based tracking, enabling efficient and technology-driven agricultural operations.",
    ],
  },
  {
    id: "bridget-augustine",
    name: "Bridget Augustine",
    title: "",
    dept: "Our team",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/93df5c98-28df-4e0c-8988-4c063a8a0e45.jpg",
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
    name: "Grace Wata John",
    title: "Finance Officer",
    dept: "Operations and Finance",
    linkedin: "https://www.linkedin.com/in/grace-wata-john-4b598136b",
    photo: "https://api.tractrac.co/media/images/75322280-feb1-4d66-92a2-9e1287924034.jpg",
    leadership: false,
    bio: [
      "Grace Wata John is a Chartered Accountant working as a Finance Officer at TracTrac MSL, supporting the organisation’s financial management and resource allocation processes to promote accountability, transparency, and operational efficiency.",
      "Her responsibilities include financial documentation, transaction processing, bookkeeping, bank reconciliations, payment reviews, and ensuring compliance with established financial policies and procedures.",
    ],
  },
  {
    id: "israel-ayeni",
    name: "Israel Ayeni",
    title: "",
    dept: "Our team",
    linkedin: "https://www.linkedin.com/in/ayeni-israel-96a9b4268",
    photo: "https://api.tractrac.co/media/images/bf80a01a-73ae-40ab-b080-d7ec5769ef87.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "ikenna-nnorom",
    name: "Ikenna Nnorom",
    title: "",
    dept: "Our team",
    linkedin: "https://www.linkedin.com/in/ikenna-nnorom-916135145/",
    photo: "https://api.tractrac.co/media/images/03d30b9e-011b-4b72-be6d-ee73d5accb88.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "larai-tumba-sini",
    name: "Larai Tumba Sini",
    title: "Programs Associate/Relationship Officer",
    dept: "Programs and MERL",
    linkedin: "https://www.linkedin.com/in/larai-tumba-bb6918288",
    photo: "https://api.tractrac.co/media/images/0b6d6adb-cc35-414b-8f1c-50a69872d092.jpg",
    leadership: false,
    bio: [
      "Larai Tumba Sini is a Programs Associate/Relationship Officer at TracTrac MSL, contributing to initiatives that expand access to agricultural mechanisation services. She works closely with Mechanisation Service Providers (MSPs), rural entrepreneurs, and other stakeholders to strengthen partnerships, support field operations, and drive effective program implementation.",
      "With a background in Agricultural Economics and Extension, she brings an understanding of rural livelihoods and agricultural development to her work. She is passionate about youth empowerment, building strong stakeholder relationships, and promoting sustainable opportunities that enable rural communities to thrive.",
    ],
  },
  {
    id: "magdalene-osagie",
    name: "Magdalene Osagie Omohze",
    title: "Gender, Disability and Social Inclusion (GEDSI) Associate",
    dept: "Investment, Asset Management and GEDSI",
    linkedin: "https://www.linkedin.com/in/magdalene-osagie-9a5164421",
    photo: "https://api.tractrac.co/media/images/2cd77493-27c5-4235-9b3b-63dc73faee55.jpg",
    leadership: false,
    bio: [
      "Magdalene Osagie Omohze is a Gender, Disability and Social Inclusion (GEDSI) professional at TracTrac MSL. She works within the Investment and Asset Management and GEDSI Department, supporting initiatives that promote gender equality, social inclusion, and equitable access to agricultural mechanisation opportunities.",
      "Her work focuses on engaging communities and advancing the participation of women, young people, and other underserved groups in agricultural development.",
    ],
  },
  {
    id: "martha-peter",
    name: "Martha Peter Aladi",
    title: "Project Associate and Relationship Officer",
    dept: "Programs and MERL",
    linkedin: "https://www.linkedin.com/in/marthapeteraladi",
    photo: "https://api.tractrac.co/media/images/e5715d6c-9c1c-4e72-9a88-7c96ece22f63.jpg",
    leadership: false,
    bio: [
      "Martha Peter Aladi is a Project Associate and Relationship Officer at TracTrac MSL, dedicated to driving rural economic growth and sustainable agricultural development. Working directly with Mechanisation Service Providers across diverse rural communities, she focuses on business development, capacity building, and strengthening agricultural cooperatives.",
      "Through structured coaching, field governance, and strategic mentorship, she empowers local farmers, women, and youth to build resilient, market-ready, and sustainable cooperative enterprises.",
    ],
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
    name: "Samson Ugbebor",
    title: "Loan Recovery Manager",
    dept: "Investment, Asset Management and GEDSI",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/4eec5df9-dddd-4a98-a985-69f0959963a0.jpg",
    leadership: false,
    bio: [
      "Samson Ugbebor serves in a dual capacity within the Investment and Asset Management team as Loan Recovery Manager. He actively manages cooperative financial portfolios and monitors revenue-expense streams to achieve 100% loan repayment compliance.",
      "His role bridges financial sustainability and operational continuity by enforcing optimal equipment maintenance standards and leading the insurance claim process for damaged assets.",
    ],
  },
  {
    id: "thankgod-onugwu",
    name: "ThankGod Izuchukwu Onugwu",
    title: "Program Associate/Relationship Officer",
    dept: "Programs and MERL",
    linkedin: "https://www.linkedin.com/in/izuchukwu-onugwu-6722a1247",
    photo: "https://api.tractrac.co/media/images/216086e7-5095-413e-85cc-3bdfa46346d6.jpg",
    leadership: false,
    bio: [
      "ThankGod Izuchukwu Onugwu is a Program Associate/Relationship Officer at TracTrac MSL. He works closely with Mechanisation Service Provider (MSP) cooperatives to strengthen their operations, build stakeholder relationships, and improve access to agricultural mechanisation services for smallholder farmers.",
      "His work focuses on supporting program delivery and helping cooperatives grow into more effective and sustainable service providers.",
    ],
  },
  {
    id: "yahaya-emmanuel",
    name: "Yahaya Emmanuel Ojonugwa",
    title: "Program Associate and Relationship Officer",
    dept: "Programs and MERL",
    linkedin: "",
    photo: "https://api.tractrac.co/media/images/30b436e9-2f68-4fa2-ba58-83e6d48869d4.jpg",
    leadership: false,
    bio: [
      "Yahaya Emmanuel Ojonugwa is a Program Associate and Relationship Officer at TracTrac MSL, where he works with Mechanisation Service Provider (MSP) cooperatives to improve their operations and expand access to agricultural mechanisation services for smallholder farmers.",
      "He supports program implementation, strengthens partnerships, and helps cooperatives develop into more efficient, reliable, and sustainable service providers. His work reflects his passion for agriculture, rural development, and improving farmers’ access to the services they need to grow.",
    ],
  },
  {
    id: "godwin-okokoro",
    name: "Godwin Okokoro",
    title: "MERL Associate",
    dept: "Programs and MERL",
    linkedin: "https://www.linkedin.com/in/godwin-okokoro",
    photo: "https://api.tractrac.co/media/images/15b84ea4-52d2-4746-ba13-570979922a51.jpg",
    leadership: false,
    bio: [
      "Godwin Okokoro is a Monitoring, Evaluation, Research and Learning (MERL) professional with over five years of experience in development programs, data systems, and project management. He specialises in digital data collection, performance monitoring, data analysis, dashboards, knowledge management, and SharePoint administration.",
      "He holds a Master’s degree in Information Management from Ahmadu Bello University and combines his MERL expertise with a strong background in IT support and systems administration to strengthen data-driven decision-making and program delivery.",
    ],
  },
  {
    id: "faith-amanata",
    name: "Faith Amanata",
    title: "YPiM National Coordinator",
    dept: "Programs and MERL",
    linkedin: "https://www.linkedin.com/in/faith-amanata-316895274",
    photo: "https://api.tractrac.co/media/images/5acfd5c0-ad0b-4671-b589-73e4f5a417bd.jpeg",
    leadership: false,
    bio: [
      "Faith Amanata coordinates the activities of Young People in Mechanisation (YPiM) nationwide, supporting efforts to engage young Nigerians in agricultural mechanisation.",
      "She is passionate about youth development, creating pathways to skills and opportunities, and promoting youth participation in Nigeria’s agricultural mechanisation ecosystem.",
    ],
  },
  {
    id: "margaret-thomas",
    name: "Margaret Thomas",
    title: "Regional Business Development Officer, North East",
    dept: "Partnerships and Communications",
    linkedin:
      "https://www.linkedin.com/in/margaret-thomas-acihrm-cpm-pgd-hrm-pgdm-314a46202",
    photo: "https://api.tractrac.co/media/images/30db0230-fd7e-48f8-b3a4-432bddd31a25.jpg",
    leadership: false,
    bio: [
      "Margaret Thomas is a Regional Business Development Officer for the North East at TracTrac MSL. She has experience in agricultural mechanisation, field operations, stakeholder engagement, data management, and community development.",
      "Her work focuses on building strategic partnerships, expanding access to agricultural mechanisation services, and engaging young people and smallholder farmers in agricultural development. She is passionate about youth empowerment, agricultural innovation, and creating sustainable opportunities that improve livelihoods and support inclusive economic growth in rural communities.",
    ],
  },
];

export const TEAM_DEPARTMENTS = [
  "CEO",
  "Investment, Asset Management and GEDSI",
  "Operations and Finance",
  "Programs and MERL",
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
