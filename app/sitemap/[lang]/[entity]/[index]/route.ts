import {
  getStaticUrls,
  getIdeasUrls,
  getCaseStudiesUrls,
  SITEMAP_ENTITIES,
  type SitemapEntity,
} from "@/lib/sitemap-data";
import { generateSitemapXml } from "@/utils/seo/sitemap/sitemap-utils";
import { i18n, type Lang } from "@/utils/translations/i18n-config";
import type { MetadataRoute } from "next";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  props: { params: Promise<{ lang: string; entity: string; index: string }> }
) {
  const { lang, entity, index } = await props.params;

  if (!i18n.locales.includes(lang as Lang)) {
    return new NextResponse("Invalid language", { status: 400 });
  }

  if (!SITEMAP_ENTITIES.includes(entity as SitemapEntity)) {
    return new NextResponse("Invalid entity", { status: 400 });
  }

  const indexNum = index.replace(/\.xml$/, "");
  let page = Number.parseInt(indexNum, 10);
  if (Number.isNaN(page) || page < 1 || page > 1000) {
    page = 1;
  }

  const urls = await generateEntityUrls(entity as SitemapEntity, page);
  const sitemap = generateSitemapXml(urls);

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

async function generateEntityUrls(
  entity: SitemapEntity,
  page: number
): Promise<MetadataRoute.Sitemap> {
  switch (entity) {
    case "static":
      return getStaticUrls();
    case "ideas": {
      const { urls } = getIdeasUrls(page);
      return urls;
    }
    case "case-studies": {
      const { urls } = getCaseStudiesUrls(page);
      return urls;
    }
    default:
      return [];
  }
}
