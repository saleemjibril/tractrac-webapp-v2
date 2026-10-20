import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgrammeStandardPage from "@/components/programmes/ProgrammeStandardPage";
import { STANDARD_PROGRAMMES } from "@/content/programmes";
import "@/styles/programmes.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(STANDARD_PROGRAMMES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const programme = STANDARD_PROGRAMMES[slug];
  if (!programme) return {};
  return {
    title: programme.eyebrow,
    description: programme.subtitle,
    openGraph: {
      images: [programme.heroImage],
    },
  };
}

export default async function ProgrammePage({ params }: PageProps) {
  const { slug } = await params;
  const programme = STANDARD_PROGRAMMES[slug];
  if (!programme) notFound();
  return (
    <main id="main" className="pageMain">
      <ProgrammeStandardPage programme={programme} />
    </main>
  );
}
