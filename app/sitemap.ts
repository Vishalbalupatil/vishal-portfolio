import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vishalpatil.dev'
  return [
    '',
    '/experience',
    '/projects',
    '/skills',
    '/contact'
  ].map((path) => ({ url: base + path, lastModified: new Date() }))
}
