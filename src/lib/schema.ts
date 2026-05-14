import type { Metadata } from "next";

export function constructMetadata({
  title,
  description,
  image = "/og/banner.png",
}: {
  title: string;
  description: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    metadataBase: new URL("https://thecyberloom.com"),
    openGraph: {
      title,
      description,
      url: "https://thecyberloom.com",
      siteName: "The Cyber Loom",
      images: [image],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: "https://thecyberloom.com",
    },
  };
}