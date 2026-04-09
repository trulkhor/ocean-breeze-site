import type { Metadata } from "next";

const BASE_URL = "https://oceanbreezerecoveryhousing.com";
const SITE_NAME = "Ocean Breeze Recovery Housing";

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = "/"
): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
