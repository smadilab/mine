import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { CaseStudyMeta } from "@/lib/case-studies";
import type { CaseStudiesDict } from "@/utils/translations/dictionary-types";
import type { Lang } from "@/utils/translations/i18n-config";
import Link from "next/link";
import { getPathPrefix } from "@/utils/translations/language-utils";

interface CaseStudiesPageProps {
  caseStudies: CaseStudyMeta[];
  caseStudiesDict: CaseStudiesDict;
  lang: Lang;
}

export function CaseStudiesPage({ caseStudies, caseStudiesDict, lang }: CaseStudiesPageProps) {
  const prefix = getPathPrefix(lang);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              {caseStudiesDict.title}
            </h1>
            <p className="text-muted-foreground text-lg">
              {caseStudiesDict.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card
                key={study.slug}
                className="overflow-hidden shadow-none h-full flex flex-col border-border/50"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mt-2">
                    {study.excerpt}
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-muted/80 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-muted/10">
                  <Link
                    href={`${prefix}/case-studies/${study.slug}`}
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full group"
                    >
                      {caseStudiesDict.readCaseStudy}
                      <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 h-4 w-4 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
