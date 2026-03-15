import { CaseStudiesPage } from "@/components/pages/CaseStudiesPage";
import { getCaseStudies } from "@/lib/case-studies";
import { getDictionary } from "@/utils/translations/dictionary-utils";
import type { Lang } from "@/utils/translations/i18n-config";
import { createMeta } from "@/utils/seo/meta/createMeta";

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const { caseStudies } = await getDictionary(lang);
  return createMeta({
    lang,
    title: caseStudies.meta.title,
    description: caseStudies.meta.description,
    keywords: caseStudies.meta.keywords,
    authors: caseStudies.meta.authors,
    pathname: "/case-studies",
  });
}

export default async function CaseStudiesIndex({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const dictionaries = await getDictionary(lang);
  const caseStudies = getCaseStudies(lang);

  return (
    <main>
      <CaseStudiesPage
        caseStudies={caseStudies}
        caseStudiesDict={dictionaries.caseStudies}
        lang={lang}
      />
    </main>
  );
}
