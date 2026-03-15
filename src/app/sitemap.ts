import type { MetadataRoute } from 'next';

import { baseUrl } from '@/lib/env';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 1,
      url: baseUrl,
    },
  ];
}
