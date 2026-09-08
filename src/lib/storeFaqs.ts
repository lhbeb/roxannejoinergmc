export interface StoreFaq {
  question: string;
  answer: string;
  linkHref?: string;
  linkLabel?: string;
}

export const STORE_FAQS: readonly StoreFaq[] = [
  {
    question: 'What products does RoxanneJoiner sell?',
    answer:
      'RoxanneJoiner designs, manufactures, and sells premium electric golf carts, 4-passenger and 6-passenger street-legal carts, all-terrain utility carts, and official golf cart accessories.',
  },
  {
    question: 'Are your golf carts new or refurbished?',
    answer:
      'All RoxanneJoiner golf carts are brand-new, built with top-tier lithium battery powertrains, custom aluminum/steel chassis, and backed by a comprehensive manufacturer warranty.',
  },
  {
    question: 'How do I place an order?',
    answer:
      'Choose your preferred RoxanneJoiner model, add it to your cart, and proceed to checkout. Review delivery address and secure payment options to complete your order.',
  },
  {
    question: 'Where do you ship and how long does delivery take?',
    answer:
      'We offer free nationwide delivery across North America and the UK using specialized enclosed vehicle carriers. Tracking and direct driver updates are provided upon dispatch.',
    linkHref: '/shipping-policy',
    linkLabel: 'Read our Shipping & Delivery Policy',
  },
  {
    question: 'How can I track my golf cart delivery?',
    answer:
      'When your golf cart is dispatched, we send full tracking details and carrier dispatch information to your email address. You can also use our Track Order page.',
    linkHref: '/track',
    linkLabel: 'Track your order',
  },
  {
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day satisfaction guarantee on all eligible RoxanneJoiner products. Full terms, return eligibility, and instructions are explained in our Return & Exchange Policy.',
    linkHref: '/return-policy',
    linkLabel: 'Read our Return & Exchange Policy',
  },
  {
    question: 'Can I exchange or upgrade a model?',
    answer:
      'Yes, exchanges and custom upgrades are supported depending on inventory availability. Contact our support team within 30 days of delivery.',
  },
  {
    question: 'Is local pickup or showroom test drive available?',
    answer:
      'Local pickup and test drives are available at our regional showrooms. Please schedule an appointment before visiting so your vehicle is prepped.',
    linkHref: '/local-pickup',
    linkLabel: 'View Local Pickup Guide',
  },
  {
    question: 'Can I customize my golf cart (color, seats, lift kit)?',
    answer:
      'Yes! RoxanneJoiner offers custom seat upholstery, lift kits, all-terrain wheels, soundbars, and custom finishes. Contact our team to configure your build.',
    linkHref: '/contact',
    linkLabel: 'Inquire about custom builds',
  },
  {
    question: 'How can I contact RoxanneJoiner support?',
    answer:
      'You can use our contact form, email contact@roxannejoiner.com, or call +19129231747 during published support hours.',
    linkHref: '/contact',
    linkLabel: 'Contact our team',
  },
];
