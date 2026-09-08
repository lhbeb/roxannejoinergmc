// Add the remaining confirmed contact channels when RoxanneJoiner is ready to launch.
export const brand = {
  name: 'RoxanneJoiner',
  description: 'Kayaks and paddling gear for your next adventure on the water.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '',
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || '141 Elm St #01, Marlborough, MA 01752, USA',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
};
