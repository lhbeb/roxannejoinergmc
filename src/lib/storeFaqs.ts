export interface StoreFaq {
  question: string;
  answer: string;
  linkHref?: string;
  linkLabel?: string;
}
export const STORE_FAQS: readonly StoreFaq[] = [
  { question: 'What is RoxanneJoiner?', answer: 'RoxanneJoiner is a kayak business and brand focused on kayaks and paddling accessories.' },
  { question: 'How do I choose a kayak?', answer: 'Compare the intended use, dimensions, weight capacity, seating, and equipment listed for each model. Contact our team for help understanding product specifications.', linkHref: '/contact', linkLabel: 'Ask about a kayak' },
  { question: 'Are paddles and accessories included?', answer: 'Included equipment varies by product. Check the individual product listing before ordering.' },
  { question: 'How do I place an order?', answer: 'Choose your item, add it to your cart, and proceed to checkout. Review your delivery details and payment information before completing your order.' },
  { question: 'Where can I find delivery information?', answer: 'RoxanneJoiner ships eligible orders across the United States only. Processing normally takes 1-2 business days, followed by 5-9 business days in standard transit.', linkHref: '/shipping-policy', linkLabel: 'Read the shipping policy' },
  { question: 'How do I track my order?', answer: 'Use the Track Order page to check your order status.', linkHref: '/track', linkLabel: 'Track your order' },
  { question: 'What is the return policy?', answer: 'Returns are accepted by mail within 30 days for both defective and non-defective products. Returned products must be new only, exchanges are accepted, the return label is included in the package, and there is no restocking fee.', linkHref: '/return-policy', linkLabel: 'Read the return policy' },
  { question: 'How can I contact RoxanneJoiner?', answer: 'Use our contact page or email contact@roxannejoiner.shop for product questions and order support.', linkHref: '/contact', linkLabel: 'Contact our team' },
];
