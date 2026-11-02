export type TeamMember = {
  id: string;
  name: string;
  title: string;
  dept: string;
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
    photo: "https://api.tractrac.co/media/images/b0ed053e-bbd1-4606-bd7f-88cfb6b909d0.jpg",
    leadership: true,
    bio: [
      "Godson Ohuruogu is an agribusiness and private sector development expert with over 17 years of experience in value chain development, SME growth, rural transformation, and climate-smart agriculture.",
      "He holds an MBA from the University of Leeds (UK) and a BSc in Industrial and Production Engineering from the University of Ibadan (Nigeria).",
      "At TracTrac, he leads the strategic vision to accelerate mechanization access and build scalable agricultural systems that empower smallholder farmers.",
    ],
  },
  {
    id: "stephen-aguebor",
    name: "Stephen Aguebor",
    title: "Deputy Team Lead, ISSAM Project",
    dept: "Programs",
    photo: "https://api.tractrac.co/media/images/53bf9786-dc8d-4005-a1a7-3a4147972c45.jpg",
    leadership: true,
    bio: [
      "Stephen Aguebor is a seasoned development and humanitarian specialist with over 12 years of experience designing and managing high-impact projects in agricultural livelihoods, financial inclusion, climate-smart agriculture, and market systems development.",
      "At TracTrac, he supports the implementation of the ISSAM Project, empowering youth- and women-led mechanization businesses across Nigeria.",
    ],
  },
  {
    id: "alero-otis",
    name: "Alero Otis",
    title: "Head of Projects and Partnerships",
    dept: "Partnerships",
    photo: "/staff/alero-otis.jpg",
    leadership: true,
    bio: [
      "Alero Otis is a development professional whose experience brings together strategic partnerships, research, programme delivery, communications and policy advocacy. Her work centres on connecting people, institutions and ideas to create practical opportunities for communities and businesses.",
      "As Deputy Team Lead, Growth and Partnerships at TracTrac Mechanization Services Limited, Alero leads partnership development and works across teams to advance the organisation’s growth and impact. Her responsibilities span government and partner engagement, strategic planning, programme coordination, funder reporting and organisational development. Through the Mastercard Foundation-supported ISSAM programme, she contributes to expanding smallholder farmers’ access to mechanization services and creating opportunities for young people, particularly women and persons with disabilities.",
      "Alero’s career spans media, corporate social responsibility, sustainability and humanitarian initiatives, with projects covering education, technology, food security and community development. Before her current role, she worked with A’Lime Media Limited, where she led projects and supported interventions for organisations including IHS Nigeria, the Telecommunications and Technology Sustainability Working Group, MTN Foundation and the Lagos State Technical and Vocational Education Board.",
      "She also led the implementation of the Access Bank Community Grant Scheme facilitated by ACT Foundation, and worked on initiatives for the HRM Abisogun II Foundation and the Renaissance Development Forum. Her research experience includes providing in-depth support to Ipsos Nigeria on assignments for clients including Ferrero and Nudge.",
      "Alero brings research, communication and relationship-building skills to complex development challenges. She holds a bachelor’s degree from Delta State University, Abraka, where she majored in French, with minors in German and Latin.",
    ],
  },
  {
    id: "samuel-olanikepun",
    name: "Samuel Olanikepun",
    title: "MERL Team Lead",
    dept: "MERL",
    photo: "https://api.tractrac.co/media/images/b8b136e0-100b-4358-9dc9-fb66ebec99be.jpg",
    leadership: true,
    bio: [
      "Samuel leads Monitoring, Evaluation, Research, and Learning (MERL) at TracTrac, ensuring that programs deliver measurable impact and continuous improvement.",
      "He oversees data-driven program evaluation and impact measurement across TracTrac initiatives.",
    ],
  },
  {
    id: "adanna-atounwu",
    name: "Adanna Atuonwu",
    title: "Communications Lead",
    dept: "Communications",
    photo: "https://api.tractrac.co/media/images/3b9fbaa2-3936-4345-a62e-01bc30b5d7d8.jpeg",
    leadership: true,
    bio: [
      "Adanna Atuonwu is a marketing and communications professional with over nine years of experience developing and executing strategic marketing, public relations and brand communications initiatives across B2B and B2C markets. Her expertise spans corporate communications, brand management, digital marketing, media relations, stakeholder engagement and integrated campaign management, with a track record of strengthening brand reputation, driving audience engagement and supporting business growth.",
      "She currently serves as Communications Lead at TracTrac MSL, where she leads communications strategy, media relations and stakeholder engagement to advance the adoption of agricultural mechanization services among smallholder farmers in Nigeria. Her work focuses on strategic storytelling, thought leadership, content development and integrated campaigns that strengthen the organisation’s visibility and position within the agricultural mechanization ecosystem.",
      "Previously, as Public Relations Lead at AFEX, Adanna led public relations and media engagement strategies across Nigeria, Kenya, Uganda and Côte d’Ivoire. She played an instrumental role in strengthening the company’s brand positioning and supporting its expansion into East Africa through strategic communications, media partnerships and high-impact campaigns. She also led marketing and communications initiatives for flagship projects, including CodeCashCrop and ComX, contributing to increased brand visibility, event participation and product adoption.",
      "Adanna holds a Master of Science in Media and Communications from Pan-Atlantic University and a Bachelor of Arts in Mass Communication from the University of Nigeria, Nsukka. Her professional interests lie at the intersection of strategic communications, brand building, storytelling and the use of marketing to drive organisational growth and impact.",
      "Beyond her professional work, she is passionate about mental health advocacy, travel and cultural exploration.",
    ],
  },
  {
    id: "john-olanrewaju",
    name: "John Olaseye Olanrewaju",
    title: "Engineering Lead",
    dept: "Engineering",
    photo: "https://api.tractrac.co/media/images/5acf5490-e290-4d7a-b533-966993660604.jpg",
    leadership: true,
    bio: [
      "Olanrewaju leads engineering and mechanization systems development, ensuring the deployment of equipment tailored to the needs of farmers across operational states.",
      "He brings deep expertise in agricultural engineering and mechanization infrastructure.",
    ],
  },
  {
    id: "israel-olatunde",
    name: "Israel Feranmi Olatunde",
    title: "IT Lead",
    dept: "IT and Designs",
    photo: "https://api.tractrac.co/media/images/252da971-8969-4c37-9e24-98877091547a.jpeg",
    leadership: true,
    bio: [
      "Israel leads the development and management of TracTrac’s digital infrastructure, including platforms that connect farmers, mechanization service providers, and partners.",
      "His work powers the technology systems behind TracTrac’s mechanization ecosystem.",
    ],
  },
  {
    id: "mercy-balogun",
    name: "Mercy Balogun",
    title: "Product Manager",
    dept: "IT and Designs",
    photo: "https://api.tractrac.co/media/images/35f08b9d-0794-4a9d-909e-60d47904b767.jpg",
    leadership: true,
    bio: [
      "Mercy Balogun is a product and design professional with over eight years of experience in product design, digital experiences, and technology-driven solutions across agriculture, fintech, SaaS, and other sectors.",
      "At TracTrac, she leads product planning, design, and development coordination across the organisation’s digital platforms, translating operational and user needs into practical digital solutions. She works closely with Technology and other teams to shape products that improve access to agricultural mechanization and strengthen the digital systems supporting TracTrac’s operations.",
    ],
  },
  {
    id: "ekene-chukwunyebendu-nnolum",
    name: "Ekene Chukwunyebendu-Nnolum",
    title: "Finance Manager",
    dept: "Finance",
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
    dept: "Operations",
    photo: "",
    leadership: true,
    bio: [
      "Ojoma Okwute leads operational strategy and execution across TracTrac programs.",
      "She ensures efficiency, compliance, and successful delivery of mechanization services across operational regions.",
    ],
  },
  {
    id: "jemimah-jennifer-justus",
    name: "Jemimah Jennifer Justus",
    title:
      "Investment and Asset Management, Gender, Diversity and Social Inclusion (GEDSI) Lead",
    dept: "Investment, Asset Management and GEDSI",
    photo: "https://api.tractrac.co/media/images/052d5cb8-dae3-4cc9-a285-c532d379fd9a.jpeg",
    leadership: true,
    bio: [
      "Jemimah Jennifer Justus is a development expert with over 8 years of experience in the agricultural development space and has worked across a great number of projects with various donors. As the Investment and Asset Management, Gender, Diversity and Social Inclusion (GEDSI) Lead at TracTrac, she drives initiatives that strengthen access to finance, cooperative enterprise development, asset management and inclusive participation in agricultural mechanization.",
      "She works at the intersection of investment, enterprise development and social inclusion, supporting mechanisms that enable Mechanization Service Providers (MSPs) and cooperatives to build sustainable businesses, access productive assets and deliver mechanization services. She also leads efforts to integrate gender equality, disability inclusion, diversity and safeguarding into programme design and implementation, ensuring that women, young people and persons with disabilities have equitable opportunities to participate in and benefit from the agricultural mechanization ecosystem.",
      "Through her work, Jemimah contributes to strengthening inclusive market systems, expanding economic opportunities and building sustainable pathways for agricultural enterprise development.",
    ],
  },
  {
    id: "chika-nelson",
    name: "Chika Nelson",
    title: "Policy Lead",
    dept: "Policy and Business Development",
    photo: "",
    leadership: true,
    bio: [
      "Chika Nelson is the Head of Policy at TracTrac, leading the organisation’s policy engagement, advocacy and stakeholder work across agricultural mechanization.",
      "She works with government, development partners and industry stakeholders to shape policy that expands access to mechanization for smallholder farmers and supports the growth of mechanization service providers.",
    ],
  },
  {
    id: "monday-orji",
    name: "Monday Ojih",
    title: "Regional Business Development Officer, North West",
    dept: "Policy and Business Development",
    photo: "",
    leadership: false,
    bio: [],
  },
  {
    id: "adedolapo-olupona",
    name: "Adedolapo Olupona",
    title: "Regional Business Development Officer, South South",
    dept: "Policy and Business Development",
    photo: "https://api.tractrac.co/media/images/606e3e3d-f9f0-4cc6-a175-22fb4bcba5bb.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "ajibola-afolashade",
    name: "Afolashade Sophie Ajibola-Adeyinka",
    title: "Communications, Media and Digital Marketing Specialist",
    dept: "Communications",
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
    dept: "Communications",
    photo: "https://api.tractrac.co/media/images/0f4cca2b-243b-4c6f-b1b0-988dbaa01bc3.jpg",
    leadership: false,
    bio: [
      "Isaiah Ogede is a documentary photographer, cinematographer, visual storyteller, and clinical psychologist.",
      "His work spans documentary filmmaking, photography, and creative direction, with a focus on telling compelling stories that capture authentic human experiences, communicate ideas, and create meaningful connections.",
    ],
  },
  {
    id: "ashey-matthew-osebi",
    name: "Ashey Matthew Osebi",
    title: "MERL Associate",
    dept: "MERL",
    photo: "https://api.tractrac.co/media/images/d57bc579-4d37-47ef-aaf8-ecd39cddc52b.jpg",
    leadership: false,
    bio: [
      "Ashey Matthew Osebi is a MERL Associate at TracTrac MSL, supporting program monitoring, data management, reporting, and learning to strengthen the implementation of agricultural mechanization initiatives.",
      "He works closely with project teams and MSP cooperatives to track performance, document results, and generate insights that improve service delivery, promote accountability, and support sustainable access to agricultural mechanization services for smallholder farmers.",
    ],
  },
  {
    id: "betini-akarandut",
    name: "Betini Akarandut",
    title: "Lead Backend/DevOps Engineer",
    dept: "IT and Designs",
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
    dept: "IT and Designs",
    photo: "https://api.tractrac.co/media/images/93df5c98-28df-4e0c-8988-4c063a8a0e45.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "chidinma-ekwonu",
    name: "Chidinma Ekwonu",
    title: "",
    dept: "Partnerships",
    photo: "https://api.tractrac.co/media/images/b00b805d-df8d-4a76-adbe-8ac9cddd42a1.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "godsfavour-nyoyoko",
    name: "Godsfavour Nyoyoko",
    title: "",
    dept: "Operations",
    photo: "https://api.tractrac.co/media/images/9eb8761f-108c-4c82-b37b-8bfaa425cad1.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "grace-john",
    name: "Grace Wata John",
    title: "Finance Officer",
    dept: "Finance",
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
    dept: "Programs",
    photo: "https://api.tractrac.co/media/images/bf80a01a-73ae-40ab-b080-d7ec5769ef87.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "ikenna-nnorom",
    name: "Ikenna Nnorom",
    title: "",
    dept: "Engineering",
    photo: "https://api.tractrac.co/media/images/03d30b9e-011b-4b72-be6d-ee73d5accb88.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "larai-tumba-sini",
    name: "Larai Tumba Sini",
    title: "Programs Associate/Relationship Officer",
    dept: "Programs",
    photo: "https://api.tractrac.co/media/images/0b6d6adb-cc35-414b-8f1c-50a69872d092.jpg",
    leadership: false,
    bio: [
      "Larai Tumba Sini is a Programs Associate/Relationship Officer at TracTrac MSL, contributing to initiatives that expand access to agricultural mechanization services. She works closely with Mechanization Service Providers (MSPs), rural entrepreneurs, and other stakeholders to strengthen partnerships, support field operations, and drive effective program implementation.",
      "With a background in Agricultural Economics and Extension, she brings an understanding of rural livelihoods and agricultural development to her work. She is passionate about youth empowerment, building strong stakeholder relationships, and promoting sustainable opportunities that enable rural communities to thrive.",
    ],
  },
  {
    id: "magdalene-osagie",
    name: "Magdalene Osagie Omohze",
    title: "Gender, Disability and Social Inclusion (GEDSI) Associate",
    dept: "Investment, Asset Management and GEDSI",
    photo: "https://api.tractrac.co/media/images/2cd77493-27c5-4235-9b3b-63dc73faee55.jpg",
    leadership: false,
    bio: [
      "Magdalene Osagie Omohze is a Gender, Disability and Social Inclusion (GEDSI) professional at TracTrac MSL. She works within the Investment and Asset Management and GEDSI Department, supporting initiatives that promote gender equality, social inclusion, and equitable access to agricultural mechanization opportunities.",
      "Her work focuses on engaging communities and advancing the participation of women, young people, and other underserved groups in agricultural development.",
    ],
  },
  {
    id: "martha-peter",
    name: "Martha Peter Aladi",
    title: "Project Associate and Relationship Officer",
    dept: "Programs",
    photo: "https://api.tractrac.co/media/images/e5715d6c-9c1c-4e72-9a88-7c96ece22f63.jpg",
    leadership: false,
    bio: [
      "Martha Peter Aladi is a Project Associate and Relationship Officer at TracTrac MSL, dedicated to driving rural economic growth and sustainable agricultural development. Working directly with Mechanization Service Providers across diverse rural communities, she focuses on business development, capacity building, and strengthening agricultural cooperatives.",
      "Through structured coaching, field governance, and strategic mentorship, she empowers local farmers, women, and youth to build resilient, market-ready, and sustainable cooperative enterprises.",
    ],
  },
  {
    id: "peter-agbo",
    name: "Peter Agbo",
    title: "",
    dept: "Operations",
    photo: "https://api.tractrac.co/media/images/f6d027d7-faf3-4e86-8ca2-d62ed3b56e4e.jpg",
    leadership: false,
    bio: [],
  },
  {
    id: "samson-ugbegbor",
    name: "Samson Ugbebor",
    title: "Loan Recovery Manager",
    dept: "Investment, Asset Management and GEDSI",
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
    dept: "Programs",
    photo: "https://api.tractrac.co/media/images/216086e7-5095-413e-85cc-3bdfa46346d6.jpg",
    leadership: false,
    bio: [
      "ThankGod Izuchukwu Onugwu is a Program Associate/Relationship Officer at TracTrac MSL. He works closely with Mechanization Service Provider (MSP) cooperatives to strengthen their operations, build stakeholder relationships, and improve access to agricultural mechanization services for smallholder farmers.",
      "His work focuses on supporting program delivery and helping cooperatives grow into more effective and sustainable service providers.",
    ],
  },
  {
    id: "yahaya-emmanuel",
    name: "Yahaya Emmanuel Ojonugwa",
    title: "Program Associate and Relationship Officer",
    dept: "Programs",
    photo: "https://api.tractrac.co/media/images/30b436e9-2f68-4fa2-ba58-83e6d48869d4.jpg",
    leadership: false,
    bio: [
      "Yahaya Emmanuel Ojonugwa is a Program Associate and Relationship Officer at TracTrac MSL, where he works with Mechanization Service Provider (MSP) cooperatives to improve their operations and expand access to agricultural mechanization services for smallholder farmers.",
      "He supports program implementation, strengthens partnerships, and helps cooperatives develop into more efficient, reliable, and sustainable service providers. His work reflects his passion for agriculture, rural development, and improving farmers’ access to the services they need to grow.",
    ],
  },
  {
    id: "godwin-okokoro",
    name: "Godwin Okokoro",
    title: "MERL Associate",
    dept: "MERL",
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
    dept: "Policy and Business Development",
    photo: "https://api.tractrac.co/media/images/5acfd5c0-ad0b-4671-b589-73e4f5a417bd.jpeg",
    leadership: false,
    bio: [
      "Faith Amanata coordinates the activities of Young People in Mechanization (YPiM) nationwide, supporting efforts to engage young Nigerians in agricultural mechanization.",
      "She is passionate about youth development, creating pathways to skills and opportunities, and promoting youth participation in Nigeria’s agricultural mechanization ecosystem.",
    ],
  },
  {
    id: "margaret-thomas",
    name: "Margaret Thomas",
    title: "Regional Business Development Officer, North East",
    dept: "Policy and Business Development",
    photo: "https://api.tractrac.co/media/images/3ef6cf61-6b5f-42fb-8c9a-48d596d49f57.jpeg",
    leadership: false,
    bio: [
      "Margaret Thomas is a Regional Business Development Officer for the North East at TracTrac MSL. She has experience in agricultural mechanization, field operations, stakeholder engagement, data management, and community development.",
      "Her work focuses on building strategic partnerships, expanding access to agricultural mechanization services, and engaging young people and smallholder farmers in agricultural development. She is passionate about youth empowerment, agricultural innovation, and creating sustainable opportunities that improve livelihoods and support inclusive economic growth in rural communities.",
    ],
  },
];

export const TEAM_DEPARTMENTS = [
  "CEO",
  "Policy and Business Development",
  "Partnerships",
  "Investment, Asset Management and GEDSI",
  "Engineering",
  "IT and Designs",
  "Communications",
  "MERL",
  "Finance",
  "Programs",
  "Operations",
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
