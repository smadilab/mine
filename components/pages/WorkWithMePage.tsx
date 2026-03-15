import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Layers, Handshake, Mic } from "lucide-react";
import type { WorkWithMeDict } from "@/utils/translations/dictionary-types";
import type { Lang } from "@/utils/translations/i18n-config";
import Link from "next/link";
import { getPathPrefix } from "@/utils/translations/language-utils";

const SERVICE_ICONS = [Lightbulb, Layers, Handshake, Mic] as const;

interface WorkWithMePageProps {
  workWithMeDict: WorkWithMeDict;
  lang: Lang;
}

export function WorkWithMePage({ workWithMeDict, lang }: WorkWithMePageProps) {
  const prefix = getPathPrefix(lang);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{workWithMeDict.title}</h1>
            <div className="w-20 h-1 bg-primary mb-8" />
            <p className="text-muted-foreground text-lg">
              {workWithMeDict.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workWithMeDict.services.map((service, index) => {
              const IconComponent = SERVICE_ICONS[index] ?? Lightbulb;
              return (
                <Card key={index} className="shadow-none overflow-hidden h-full border-border/50">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {workWithMeDict.cta.title}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              {workWithMeDict.cta.description}
            </p>
            <Link href={`${prefix || "/"}#contact`}>
              <Button
                className="bg-secondary text-primary hover:bg-secondary/90"
                size="lg"
              >
                {workWithMeDict.cta.button}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
