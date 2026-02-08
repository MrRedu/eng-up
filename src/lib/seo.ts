import type { Metadata } from 'next';

interface MetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}

export function constructMetadata({
  title,
  description,
  keywords,
  image = '/og-1920x1080.webp',
  noIndex = false,
  canonical,
}: MetadataProps): Metadata {
  const baseUrl = 'https://eng-up.vercel.app';
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Eng-Up',
      locale: 'es_ES',
      type: 'website',
      images: [
        {
          url: image,
          width: 1920,
          height: 1080,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@MrRedu',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}
