import { NextResponse } from "next/server";
import { seoConfig } from "@/utils/seo/seo.config";

export const dynamic = "force-dynamic";

const baseUrl = seoConfig.siteURL;

const llmsContent = `# Hasan Smadi

> Founder building digital systems, platforms, and products that power real businesses. Founder of BlendLab, previously built platforms like Tesaa and systems for companies such as Rotana Star.

This site shares ideas about building companies, designing systems, and the future of digital economies. Available in English and Arabic.

## Core Pages

- [Home](${baseUrl}/): Overview, featured ideas, and philosophy
- [About](${baseUrl}/about): Background, projects (BlendLab, Rotana Star, Tesaa, Bunud), and how I think
- [Work With Me](${baseUrl}/work-with-me): How to collaborate and engage
- [Philosophy](${baseUrl}/philosophy): Approach to systems, technology, and business
- [Ideas](${baseUrl}/ideas): Essays and thoughts on building companies and systems
- [Case Studies](${baseUrl}/case-studies): Detailed project write-ups and learnings

## Optional

- [Arabic version](${baseUrl}/ar): Full site in Arabic
- [Sitemap](${baseUrl}/sitemap.xml): Complete list of indexed pages
`;

export async function GET() {
  return new NextResponse(llmsContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
