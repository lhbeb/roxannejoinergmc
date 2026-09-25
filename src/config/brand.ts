export const brand = {
  name: 'RoxanneJoiner',
  description: 'Kayaks and paddling gear for your next adventure on the water.',
  url: 'https://roxannejoiner.shop',
  logo: 'https://roxannejoiner.shop/mainlogo.svg',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@roxannejoiner.shop',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1 855-529-2501',
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || '141 Elm St #01, Marlborough, MA 01752, USA',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
};

export const brandAddressSchema = {
  '@type': 'PostalAddress',
  streetAddress: '141 Elm St #01',
  addressLocality: 'Marlborough',
  addressRegion: 'MA',
  postalCode: '01752',
  addressCountry: 'US',
} as const;

export const brandContactPointSchema = {
  '@type': 'ContactPoint',
  telephone: '+18555292501',
  email: brand.email,
  contactType: 'customer service',
  areaServed: 'US',
  availableLanguage: 'en',
} as const;

export const brandOrganizationSchema = {
  '@type': 'Organization',
  name: brand.name,
  url: brand.url,
  logo: brand.logo,
  description: brand.description,
  email: brand.email,
  telephone: '+18555292501',
  contactPoint: brandContactPointSchema,
  address: brandAddressSchema,
} as const;
