const BASE_URL = 'https://eldecoechoesofedeneoe.in'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/auth/', '/config/', '/server/', '/.env'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
