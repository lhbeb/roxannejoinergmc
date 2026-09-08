export const storePolicy = {
  sellingCountries: ['US'] as const,
  currency: 'USD',
  shippingService: 'Free Standard Shipping',
  shippingPrice: 0,
  handlingDays: { min: 1, max: 2 },
  transitDays: { min: 5, max: 9 },
  returnWindowDays: 30,
  returnMethod: 'By mail',
  refundProcessingDays: 5,
} as const;

export const merchantEligibleCheckoutFlows = [
  'stripe',
  'paypal-direct',
  'paypal-api',
] as const;

export function isMerchantEligibleCheckoutFlow(flow?: string): boolean {
  return merchantEligibleCheckoutFlows.includes(
    flow as (typeof merchantEligibleCheckoutFlows)[number],
  );
}
