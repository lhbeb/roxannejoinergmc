import type { Product } from '@/types/product';

/** Keep copied legacy inventory out of the kayak storefront. */
export function isPaddlingProduct(product: Product): boolean {
  return (product.collections || []).some((value) =>
    ['kayaks', 'paddles', 'kayak-accessories'].includes(value),
  ) || [product.title, product.category].some((value) =>
    typeof value === 'string' && /\b(kayaks?|paddles?|paddling)\b/i.test(value),
  );
}
