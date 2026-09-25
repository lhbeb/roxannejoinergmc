import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, CreditCard, PackageCheck, RotateCcw } from 'lucide-react';
import BrandContactDetails from '@/components/BrandContactDetails';
import { storePolicy } from '@/config/storePolicy';

export const metadata: Metadata = {
  title: 'Return & Refund Policy | RoxanneJoiner',
  description: 'RoxanneJoiner return window, accepted return reasons, by-mail method, return labels, exchanges, restocking fees, and refund timing.',
};

export default function ReturnPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <header className="rounded-3xl bg-[#123E52] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9BD4D3]">Customer care</p>
          <h1 className="mt-3 text-4xl font-bold">Return & Refund Policy</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/85">We accept returns by mail for both defective and non-defective products within {storePolicy.returnWindowDays} calendar days after delivery.</p>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border bg-white p-5"><Clock className="h-5 w-5 text-[#397F86]" /><p className="mt-3 text-sm text-gray-500">Return window</p><p className="font-bold text-[#123E52]">{storePolicy.returnWindowDays} days</p></div>
          <div className="rounded-2xl border bg-white p-5"><RotateCcw className="h-5 w-5 text-[#397F86]" /><p className="mt-3 text-sm text-gray-500">Return method</p><p className="font-bold text-[#123E52]">{storePolicy.returnMethod}</p></div>
          <div className="rounded-2xl border bg-white p-5"><CreditCard className="h-5 w-5 text-[#397F86]" /><p className="mt-3 text-sm text-gray-500">Refund processing</p><p className="font-bold text-[#123E52]">{storePolicy.refundProcessingDays} days</p></div>
        </section>

        <section className="mt-8 space-y-8 rounded-3xl border bg-white p-7 text-gray-700 sm:p-10">
          <div><h2 className="text-2xl font-bold text-[#123E52]">Eligibility</h2><p className="mt-3 leading-7">Return requests are accepted within {storePolicy.returnWindowDays} calendar days after delivery. We accept returns for both defective products and non-defective products.</p></div>
          <div><h2 className="text-2xl font-bold text-[#123E52]">Returned product condition</h2><p className="mt-3 leading-7">Returned products must be new only. Items must be unused, clean, complete, and returned with the included parts, accessories, manuals, and original packaging when applicable. Proof of purchase is required.</p></div>
          <div><h2 className="text-2xl font-bold text-[#123E52]">Return method and label</h2><p className="mt-3 leading-7">The return method is by mail. The return label is included in the package. Use the included return label and package the item securely before mailing it back.</p></div>
          <div><h2 className="text-2xl font-bold text-[#123E52]">Restocking fee</h2><p className="mt-3 leading-7">There is no restocking fee. The restocking fee is free: $0.</p></div>
          <div><h2 className="flex items-center gap-3 text-2xl font-bold text-[#123E52]"><PackageCheck className="h-6 w-6" />How to start a return</h2><ol className="mt-3 list-decimal space-y-2 pl-6 leading-7"><li><Link href="/contact" className="font-semibold text-[#123E52] underline">Contact customer support</Link> within the {storePolicy.returnWindowDays}-day return window.</li><li>Include your order number and whether the item is defective or non-defective.</li><li>Use the return label included in the package and return the item by mail.</li></ol></div>
          <div><h2 className="text-2xl font-bold text-[#123E52]">Refunds and exchanges</h2><p className="mt-3 leading-7">We accept exchanges. We inspect returned items after receipt. Approved refunds are submitted to the original payment method within {storePolicy.refundProcessingDays} business days; your bank or payment provider may need additional time to post the credit.</p></div>
          <p className="border-t border-gray-200 pt-6 text-sm text-gray-500">Last updated: September 8, 2026</p>
          <div><h2 className="text-2xl font-bold text-[#123E52]">Contact</h2><div className="mt-3 rounded-2xl bg-[#F7F3E8] p-6"><BrandContactDetails /></div></div>
        </section>
      </div>
    </main>
  );
}
