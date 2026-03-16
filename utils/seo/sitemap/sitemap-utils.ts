import type { MetadataRoute } from "next";
import { i18n, type Lang } from "@/utils/translations/i18n-config";
import { seoConfig } from "@/utils/seo/seo.config";

const siteURL = seoConfig.siteURL;

/**
 * Normalize URL to path without language prefix for hreflang generation.
 * en: /, /about -> path is /, /about
 * ar: /ar, /ar/about -> path is /, /about
 */
function getPathWithoutLang(fullUrl: string): string {
  const path = fullUrl.startsWith("http") ? new URL(fullUrl).pathname : fullUrl;
  const normalized = path.replace(/\/$/, "") || "/";
  if (normalized.startsWith("/ar/")) return normalized.slice(3) || "/";
  if (normalized === "/ar") return "/";
  return normalized;
}

/**
 * Build full URL for a language given the path without lang.
 */
function buildUrlForLang(lang: Lang, pathWithoutLang: string): string {
  if (lang === "ar") {
    return `${siteURL}/ar${pathWithoutLang === "/" ? "" : pathWithoutLang}`;
  }
  return `${siteURL}${pathWithoutLang}`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function generateSitemapXml(urls: MetadataRoute.Sitemap): string {
  const urlsXml = urls
    .map((entry) => {
      const url = typeof entry.url === "string" ? entry.url : String(entry.url);
      const pathWithoutLang = getPathWithoutLang(url);
      const lastmod =
        typeof entry.lastModified === "string"
          ? entry.lastModified
          : (entry.lastModified ?? new Date()).toISOString();
      const changefreq = entry.changeFrequency ?? "monthly";
      const priority = entry.priority ?? 0.8;

      const hreflangLinks = (i18n.locales as readonly string[]).map(
        (lang) =>
          `<xhtml:link rel="alternate" hreflang="${escapeXml(lang)}" href="${escapeXml(buildUrlForLang(lang as Lang, pathWithoutLang))}"/>`
      );
      const xDefault =
        `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(buildUrlForLang("en", pathWithoutLang))}"/>`;

      return `
  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <lastmod>${lastmod}</lastmod>
    ${hreflangLinks.join("\n    ")}
    ${xDefault}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlsXml}
</urlset>`;
}
