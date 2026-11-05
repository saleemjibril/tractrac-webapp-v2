export type Resource = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  fileUrl: string;
  fileName: string;
  image: string;
  imageAlt: string;
};

export const RESOURCES: Resource[] = [
  {
    slug: "inclusive-agricultural-mechanisation-strategy",
    eyebrow: "Strategy",
    title: "Inclusive Agricultural Mechanization Strategy",
    description:
      "A Practical Framework for Gender and Social Inclusion in Mechanization Service Markets. Lessons from the ISSAM Project Implementation. Agricultural mechanization remains one of the most critical enablers of agricultural productivity, labour efficiency and rural economic transformation across Africa, yet access remains uneven for women, youth, persons with disabilities and displaced populations.",
    fileUrl:
      "https://api.tractrac.co/media/files/921c1f1e-efd4-4d87-bb34-ff3917a57ae0.pdf",
    fileName: "TracTrac-Inclusive-Agricultural-Mechanisation-Strategy.pdf",
    image:
      "https://api.tractrac.co/media/images/2109386b-95f1-4b1c-be27-8a0aec5d8aea.jpg",
    imageAlt: "Cover of the Inclusive Agricultural Mechanization Strategy",
  },
  {
    slug: "namp-2026-policy-at-a-glance",
    eyebrow: "Policy",
    title: "NAMP 2026: From Policy to Practice",
    description:
      "A public guide to Nigeria’s National Agricultural Mechanization Policy 2026–2031 — its vision, priorities and implementation framework. Ratified by the Federal Ministry of Agriculture and Food Security on 12 August 2026.",
    fileUrl:
      "https://api.tractrac.co/media/files/3656d4ee-5d25-4725-9157-74311953cd53.pdf",
    fileName: "NAMP-2026-Policy-at-a-Glance.pdf",
    image:
      "https://api.tractrac.co/media/files/4266ab3b-b635-4e6b-835d-1e67fdf935e5.jpeg",
    imageAlt: "Cover of NAMP 2026: From Policy to Practice",
  },
];
