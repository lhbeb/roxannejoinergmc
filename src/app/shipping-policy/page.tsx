import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, MapPin, PackageCheck, Truck } from 'lucide-react';
import { storePolicy } from '@/config/storePolicy';

export const metadata: Metadata = {
  title: 'Shipping Policy | RoxanneJoiner',
  description: 'RoxanneJoiner shipping coverage, costs, handling times, delivery estimates, and order tracking information.',
};

const totalMin = storePolicy.handlingDays.min + storePolicy.transitDays.min;
const totalMax = storePolicy.handlingDays.max + storePolicy.transitDays.max;

export default function ShippingPolicyPage() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'OfferShippingDetails',
    name: storePolicy.shippingService,
    shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'US' },
    shippingRate: { '@type': 'MonetaryAmount', value: storePolicy.shippingPrice, currency: storePolicy.currency },
    deliveryTime: {
      '@type': 'ShippingDeliveryTime',
      handlingTime: { '@type': 'QuantitativeValue', minValue: storePolicy.handlingDays.min, maxValue: storePolicy.handlingDays.max, unitCode: 'DAY' },
      transitTime: { '@type': 'QuantitativeValue', minValue: storePolicy.transitDays.min, maxValue: storePolicy.transitDays.max, unitCode: 'DAY' },
    },
  };

  return (
    <main className="min-h-screen bg-[#F7F3E8] py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <div className="container mx-auto max-w-5xl px-4">
        <section className="rounded-3xl bg-[#123E52] p-8 text-white shadow-lg sm:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#9BD4D3]">RoxanneJoiner delivery</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Shipping Policy</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">RoxanneJoiner ships eligible orders across the United States only. Free standard shipping is included for serviceable U.S. addresses, with the same handling and transit estimates used in our product data and structured snippets.</p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-[#123E52]/10 bg-white p-6"><Clock className="h-6 w-6 text-[#397F86]" /><h2 className="mt-4 text-xl font-bold text-[#123E52]">Processing time</h2><p className="mt-2 text-gray-700">Orders normally require {storePolicy.handlingDays.min}-{storePolicy.handlingDays.max} business days for processing after payment is confirmed.</p></article>
          <article className="rounded-2xl border border-[#123E52]/10 bg-white p-6"><Truck className="h-6 w-6 text-[#397F86]" /><h2 className="mt-4 text-xl font-bold text-[#123E52]">Transit time</h2><p className="mt-2 text-gray-700">Standard transit across the United States is estimated at {storePolicy.transitDays.min}-{storePolicy.transitDays.max} business days after dispatch.</p></article>
          <article className="rounded-2xl border border-[#123E52]/10 bg-white p-6"><PackageCheck className="h-6 w-6 text-[#397F86]" /><h2 className="mt-4 text-xl font-bold text-[#123E52]">Shipping cost</h2><p className="mt-2 text-gray-700">Standard shipping is free for eligible U.S. orders. Any different option or charge will be shown before payment.</p></article>
        </section>

        <section className="mt-8 space-y-7 rounded-3xl border border-[#123E52]/10 bg-white p-7 text-gray-700 sm:p-10">
          <div><h2 className="flex items-center gap-3 text-2xl font-bold text-[#123E52]"><MapPin className="h-6 w-6" />Coverage and address checks</h2><p className="mt-3 leading-7">We currently sell and ship across the United States only. A complete, serviceable U.S. delivery address is required. If a carrier cannot serve the address or the order cannot be fulfilled, we will contact you and cancel and refund the order when necessary.</p></div>
          <div><h2 className="text-2xl font-bold text-[#123E52]">Delivery estimates</h2><p className="mt-3 leading-7">Processing time is {storePolicy.handlingDays.min}-{storePolicy.handlingDays.max} business days and transit time is {storePolicy.transitDays.min}-{storePolicy.transitDays.max} business days. The typical combined estimate is {totalMin}-{totalMax} business days from payment confirmation. Weekends, public holidays, severe weather, carrier disruptions, and address corrections may extend delivery. An estimate is not a guaranteed arrival date.</p></div>
          <div><h2 className="text-2xl font-bold text-[#123E52]">Tracking and order support</h2><p className="mt-3 leading-7">When tracking is available, it is sent after dispatch. Tracking events and delivery scans are supplied by the carrier. For an address correction or a delivery question, <Link href="/contact" className="font-semibold text-[#123E52] underline">contact RoxanneJoiner</Link> as soon as possible.</p></div>
          <p className="border-t border-gray-200 pt-6 text-sm text-gray-500">Last updated: September 8, 2026</p>
        </section>
      </div>
    </main>
  );
}
