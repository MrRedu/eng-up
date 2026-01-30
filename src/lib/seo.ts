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
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://eng-up.vercel.app',
      siteName: 'Eng-Up',
      locale: 'es_ES',
      images: [
        {
          url: image,
          width: 1920,
          height: 1080,
        },
      ],
    },
    robots: {
      index: noIndex ? false : true,
      follow: noIndex ? false : true,
    },
  };
}
