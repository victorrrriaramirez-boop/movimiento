import type { Metadata } from "next";
import { site } from "@/lib/content";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || site.defaultUrl).replace(/\/$/, "");

export function pageMetadata({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = new URL(path, siteUrl).toString();
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: canonical,
      siteName: site.name,
      title,
      description,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.name }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"]
    }
  };
}
