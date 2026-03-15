import { Button } from "@/components/ui/button";
import { ChevronLeft, ArrowLeft, ArrowRight } from "lucide-react";
import type { CaseStudy, CaseStudyMeta } from "@/lib/case-studies";
import type { CaseStudiesDict } from "@/utils/translations/dictionary-types";
import type { Lang } from "@/utils/translations/i18n-config";
import Link from "next/link";
import { getPathPrefix } from "@/utils/translations/language-utils";

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
  caseStudiesDict: CaseStudiesDict;
  lang: Lang;
  previousCaseStudy: CaseStudyMeta | null;
  nextCaseStudy: CaseStudyMeta | null;
}

export function CaseStudyDetail({
  caseStudy,
  caseStudiesDict,
  lang,
  previousCaseStudy,
  nextCaseStudy,
}: CaseStudyDetailProps) {
  const prefix = getPathPrefix(lang);
  const details = caseStudiesDict.projectDetails;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl">
            <Link
              href={`${prefix}/case-studies`}
              className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1 rtl:ml-1 rtl:mr-0 rtl:rotate-180" />
              {caseStudiesDict.backToCaseStudies}
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
              {caseStudy.title}
            </h1>
            <p className="text-muted-foreground text-lg">{caseStudy.heroSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-8 border-b border-border/50">
        <div className="container">
          <div className="max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{details.client}</p>
                <p className="font-medium">{caseStudy.client}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{details.industry}</p>
                <p className="font-medium">{caseStudy.industry}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{details.focus}</p>
                <p className="font-medium">{caseStudy.focus}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{details.year}</p>
                <p className="font-medium">{caseStudy.year}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl space-y-16">
            {/* Context */}
            <div>
              <h2 className="text-2xl font-bold mb-4">{caseStudiesDict.sections.context}</h2>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.context}</p>
            </div>

            {/* Challenge */}
            <div>
              <h2 className="text-2xl font-bold mb-4">{caseStudiesDict.sections.challenge}</h2>
              <p className="text-muted-foreground mb-4">{caseStudy.challenge}</p>
              {caseStudy.challengeList && (
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {caseStudy.challengeList.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-2xl font-bold mb-4">{caseStudiesDict.sections.solution}</h2>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
            </div>

            {/* Systems Built */}
            <div>
              <h2 className="text-2xl font-bold mb-4">{caseStudiesDict.sections.systemsBuilt}</h2>
              <ul className="space-y-2">
                {caseStudy.systemsBuilt.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="text-primary mt-1.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div>
              <h2 className="text-2xl font-bold mb-4">{caseStudiesDict.sections.outcome}</h2>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.outcome}</p>
            </div>

            {/* Lessons */}
            {caseStudy.lessons && caseStudy.lessonsInsight && (
              <div className="p-6 rounded-lg bg-muted/50 border border-border/50">
                <h2 className="text-xl font-bold mb-3">{caseStudy.lessons}</h2>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {caseStudy.lessonsInsight}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Navigation between case studies */}
      {(previousCaseStudy || nextCaseStudy) && (
        <section className="py-16 border-t border-border/50">
          <div className="container">
            <div className="max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {previousCaseStudy ? (
                  <Link
                    href={`${prefix}/case-studies/${previousCaseStudy.slug}`}
                    className="group"
                  >
                    <div className="flex flex-col p-4 border rounded-lg hover:border-primary transition-colors">
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <ArrowLeft className="h-3.5 w-3.5 mr-2 rtl:ml-2 rtl:mr-0 group-hover:text-primary transition-colors rtl:rotate-180" />
                        {caseStudiesDict.previousCaseStudy}
                      </div>
                      <h4 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                        {previousCaseStudy.title}
                      </h4>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {nextCaseStudy && (
                  <Link
                    href={`${prefix}/case-studies/${nextCaseStudy.slug}`}
                    className="group md:ml-auto"
                  >
                    <div className="flex flex-col p-4 border rounded-lg hover:border-primary transition-colors text-end rtl:text-start">
                      <div className="flex items-center justify-end text-sm text-muted-foreground mb-2">
                        {caseStudiesDict.nextCaseStudy}
                        <ArrowRight className="h-3.5 w-3.5 ml-2 rtl:mr-2 rtl:ml-0 group-hover:text-primary transition-colors rtl:rotate-180" />
                      </div>
                      <h4 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                        {nextCaseStudy.title}
                      </h4>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
