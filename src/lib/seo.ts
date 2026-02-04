import type { Metadata } from 'next';

interface MetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  keywords,
  image = '/og-1920x1080.webp',
  noIndex = false,
}: MetadataProps): Metadata {
  return {
    title,
    description,
    keywords,
    metadataBase: new URL('https://eng-up.vercel.app'),
    openGraph: {
      title,
      description,
      url: 'https://eng-up.vercel.app',
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
