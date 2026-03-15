import { CaseStudyDetail } from "@/components/pages/CaseStudyDetail";
import {
  getCaseStudyBySlug,
  getAdjacentCaseStudies,
} from "@/lib/case-studies";
import { notFound } from "next/navigation";
import { getDictionary } from "@/utils/translations/dictionary-utils";
import type { Lang } from "@/utils/translations/i18n-config";
import { createMeta } from "@/utils/seo/meta/createMeta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang; slug: string }>;
}) {
  const { lang, slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug, lang);
  if (!caseStudy) notFound();
  const { caseStudies } = await getDictionary(lang);
  return createMeta({
    lang,
    title: `${caseStudy.title} | ${caseStudies.title}`,
    description: caseStudy.excerpt ?? caseStudies.meta.description,
    keywords: [...caseStudies.meta.keywords, ...caseStudy.tags],
    authors: caseStudies.meta.authors,
    pathname: `/case-studies/${slug}`,
  });
}

export async function generateStaticParams(): Promise<{ lang: Lang; slug: string }[]> {
  const slugs = ["rotana-star", "tesaa", "bunud", "pin-properties"];
  const langs: Lang[] = ["en", "ar"];
  const entries: { lang: Lang; slug: string }[] = [];
  for (const lang of langs) {
    for (const slug of slugs) {
      entries.push({ lang, slug });
    }
  }
  return entries;
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ lang: Lang; slug: string }>;
}) {
  const { lang, slug } = await params;
  const dictionaries = await getDictionary(lang);
  const caseStudy = getCaseStudyBySlug(slug, lang);

  if (!caseStudy) {
    notFound();
  }

  const { previous, next } = getAdjacentCaseStudies(slug, lang);

  return (
    <main>
      <CaseStudyDetail
        caseStudy={caseStudy}
        caseStudiesDict={dictionaries.caseStudies}
        lang={lang}
        previousCaseStudy={previous}
        nextCaseStudy={next}
      />
    </main>
  );
}
