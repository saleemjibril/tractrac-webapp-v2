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
    title: "Inclusive Agricultural Mechanisation Strategy",
    description:
      "A Practical Framework for Gender and Social Inclusion in Mechanisation Service Markets. Lessons from the ISSAM Project Implementation. Agricultural mechanisation remains one of the most critical enablers of agricultural productivity, labour efficiency and rural economic transformation across Africa, yet access remains uneven for women, youth, persons with disabilities and displaced populations.",
    fileUrl:
      "https://api.tractrac.co/media/files/921c1f1e-efd4-4d87-bb34-ff3917a57ae0.pdf",
    fileName: "TracTrac-Inclusive-Agricultural-Mechanisation-Strategy.pdf",
    image:
      "https://api.tractrac.co/media/images/2109386b-95f1-4b1c-be27-8a0aec5d8aea.jpg",
    imageAlt: "Cover of the Inclusive Agricultural Mechanisation Strategy",
  },
];
