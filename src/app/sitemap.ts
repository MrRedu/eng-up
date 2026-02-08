import { MetadataRoute } from 'next';
import { NAVIGATION_DATA, type NavItem } from '@/lib/constants';

// Helper function to extract all URLs from navigation data
function extractAllUrls(): string[] {
  const urls: string[] = [];

  // Always include the homepage
  urls.push('/');
  urls.push('/topics');
  urls.push('/roadmap');
  urls.push('/about');
  urls.push('/settings');

  function extractFromItems(items: NavItem[]): void {
    for (const item of items) {
      if (item.url && item.url !== '/') {
        urls.push(item.url);
      }

      // Handle subItems recursively
      if (item.subItems) {
        extractFromItems(item.subItems);
      }
    }
  }

  // Extract URLs from navigation data
  for (const group of NAVIGATION_DATA) {
    extractFromItems(group.items);
  }

  // Add known additional pages
  urls.push('/settings/topics-status');
  urls.push('/settings/changelog');

  // Remove duplicates and filter
  return [...new Set(urls)].filter(
    (url) =>
      !url.startsWith('http') && // Only relative URLs
      !url.includes('#') && // No anchors
      !url.includes('?'), // No query parameters for now
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eng-up.vercel.app';
  const urls = extractAllUrls();

  return urls.map((url) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
    changeFrequency: url === '/' ? 'daily' : ('weekly' as const),
    priority:
      url === '/'
        ? 1.0
        : url.includes('/grammar/')
          ? 0.9
          : url.includes('/topics/')
            ? 0.8
            : url.includes('/resources/')
              ? 0.7
              : 0.6,
  }));
}
