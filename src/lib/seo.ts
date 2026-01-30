import type { Metadata } from 'next';

interface MetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
}

export function constructMetadata({
  title,
  description,
  keywords,
  image = '/og-1920x1080.webp',
}: MetadataProps): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: 'https://eng-up.vercel.app',
      siteName: 'Eng-Up',
      images: [
        {
          url: image,
          width: 1920,
          height: 1080,
        },
      ],
    },
  };
}
