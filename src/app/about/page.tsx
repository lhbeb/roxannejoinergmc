import type { Metadata } from 'next';
import Link from 'next/link';
import AboutNotifier from '@/components/AboutNotifier';
export const metadata: Metadata = {
  title: 'About RoxanneJoiner | Kayaks & Paddling Gear',
  description: 'Learn about RoxanneJoiner, a kayak business and brand inspired by life on the water.',
};
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F3E8]/40">
      <AboutNotifier />
      <section className="bg-[#123E52] px-6 py-20 text-center text-[#F7F3E8]">
        <p className="mb-5 text-sm font-bold uppercase tracking-widest">RoxanneJoiner Kayaks</p>
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl">Find Your Own Water</h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed">RoxanneJoiner is a kayak business and brand inspired by the simple pleasure of getting out on the water. Our focus is kayaking, paddling gear, and the adventures that begin at the shoreline.</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-10 px-6 py-16">
        <div><h2 className="mb-4 text-3xl font-bold text-[#123E52]">A Brand for Paddlers</h2><p className="leading-8 text-gray-700">Explore the available models and review each product’s dimensions, capacity, included equipment, and intended use before choosing a kayak for your next adventure.</p></div>
        <div className="rounded-2xl bg-white p-8 shadow-sm"><h2 className="mb-4 text-2xl font-bold text-[#123E52]">Explore the Collection</h2><p className="mb-6 leading-8 text-gray-700">Discover RoxanneJoiner kayaks and paddling accessories. Product pages provide the details for each available item.</p><Link className="font-semibold text-[#123E52] underline" href="/search">Browse kayaks and gear →</Link></div>
        <div><h2 className="mb-4 text-2xl font-bold text-[#123E52]">Here to Help</h2><p className="mb-4 leading-8 text-gray-700">Have a question about a product or an order? Get in touch with our team.</p><Link className="font-semibold text-[#123E52] underline" href="/contact">Contact RoxanneJoiner →</Link></div>
      </section>
    </main>
  );
}
