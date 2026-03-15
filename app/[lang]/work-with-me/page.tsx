import { WorkWithMePage } from "@/components/pages/WorkWithMePage";
import { getDictionary } from "@/utils/translations/dictionary-utils";
import type { Lang } from "@/utils/translations/i18n-config";
import { createMeta } from "@/utils/seo/meta/createMeta";

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const { workWithMe } = await getDictionary(lang);
  return createMeta({
    lang,
    title: workWithMe.meta.title,
    description: workWithMe.meta.description,
    keywords: workWithMe.meta.keywords,
    authors: workWithMe.meta.authors,
    pathname: "/work-with-me",
  });
}

export default async function WorkWithMe({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const dictionaries = await getDictionary(lang);
  return (
    <main>
      <WorkWithMePage workWithMeDict={dictionaries.workWithMe} lang={lang} />
    </main>
  );
}
