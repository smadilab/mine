import type { MetadataRoute } from "next";
import { seoConfig } from "@/utils/seo/seo.config";
import { getSortedIdeasData } from "@/lib/ideas";
import { getCaseStudies } from "@/lib/case-studies";

const siteURL = seoConfig.siteURL;

function buildEntry(
  url: string,
  options?: {
    lastModified?: Date;
    changeFrequency?: MetadataRoute.Sitemap[0]["changeFrequency"];
    priority?: number;
  }
): MetadataRoute.Sitemap[0] {
  return {
    url,
    lastModified: options?.lastModified ?? new Date(),
    changeFrequency: options?.changeFrequency ?? "monthly",
    priority: options?.priority ?? 0.8,
  };
}

const MAX_LOCS_PER_SITEMAP = 1000;

export const SITEMAP_ENTITIES = ["static", "ideas", "case-studies"] as const;
export type SitemapEntity = (typeof SITEMAP_ENTITIES)[number];

/** Static pages - same for all languages */
export function getStaticUrls(): MetadataRoute.Sitemap {
  return [
    buildEntry(`${siteURL}/`, { changeFrequency: "weekly", priority: 1 }),
    buildEntry(`${siteURL}/about`),
    buildEntry(`${siteURL}/work-with-me`),
    buildEntry(`${siteURL}/case-studies`),
    buildEntry(`${siteURL}/philosophy`),
    buildEntry(`${siteURL}/ideas`),
  ];
}

/** Idea pages with pagination */
export function getIdeasUrls(page: number): { urls: MetadataRoute.Sitemap; count: number } {
  const ideasEn = getSortedIdeasData("en");
  const ideasAr = getSortedIdeasData("ar");
  const slugsEn = new Set(ideasEn.map((i) => i.slug));
  const allIdeas = [
    ...ideasEn,
    ...ideasAr.filter((i) => !slugsEn.has(i.slug)),
  ];
  const start = (page - 1) * MAX_LOCS_PER_SITEMAP;
  const urls = allIdeas.slice(start, start + MAX_LOCS_PER_SITEMAP).map((idea) =>
    buildEntry(`${siteURL}/ideas/${idea.slug}`, {
      lastModified: new Date(idea.date),
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );
  return { urls, count: allIdeas.length };
}

/** Case study pages with pagination */
export function getCaseStudiesUrls(page: number): { urls: MetadataRoute.Sitemap; count: number } {
  const caseStudiesEn = getCaseStudies("en");
  const caseStudiesAr = getCaseStudies("ar");
  const slugs = new Set([
    ...caseStudiesEn.map((c) => c.slug),
    ...caseStudiesAr.map((c) => c.slug),
  ]);
  const allSlugs = Array.from(slugs);
  const start = (page - 1) * MAX_LOCS_PER_SITEMAP;
  const urls = allSlugs.slice(start, start + MAX_LOCS_PER_SITEMAP).map((slug) =>
    buildEntry(`${siteURL}/case-studies/${slug}`, {
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );
  return { urls, count: allSlugs.length };
}

/** Get entity counts for sitemap index */
export function getSitemapEntityCounts(): { entity: SitemapEntity; count: number }[] {
  const { count: ideasCount } = getIdeasUrls(1);
  const { count: caseStudiesCount } = getCaseStudiesUrls(1);
  return [
    { entity: "static", count: 1 },
    { entity: "ideas", count: Math.ceil(ideasCount / MAX_LOCS_PER_SITEMAP) || 1 },
    { entity: "case-studies", count: Math.ceil(caseStudiesCount / MAX_LOCS_PER_SITEMAP) || 1 },
  ];
}

export function getSitemapEntries(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  entries.push(...getStaticUrls());
  const { urls: ideasUrls } = getIdeasUrls(1);
  entries.push(...ideasUrls);
  const { urls: caseStudiesUrls } = getCaseStudiesUrls(1);
  entries.push(...caseStudiesUrls);
  return entries;
}
