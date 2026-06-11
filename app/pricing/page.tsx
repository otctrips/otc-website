import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import {
  PRICING_FACTORS,
  PRICING_INCLUDED,
  PRICING_RANGES,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "We don't sell packages, so we don't have a rate card. Here's exactly what goes into an OTC trip price, plus realistic starting ranges by trip type.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="How OTC Pricing Works."
        subtitle="We don't sell packages. Every trip is custom, so every price is different. Here's what goes into it."
      />

      {/* What's included */}
      <section className="container-site py-24">
        <FadeIn className="text-center">
          <p className="eyebrow">01</p>
          <h2 className="heading-lg mt-3">What&apos;s Typically Included</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/60">
            When we quote your trip, the number is the whole trip. These are
            the pieces it usually covers.
          </p>
        </FadeIn>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING_INCLUDED.map((item, i) => (
            <FadeIn key={item.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl bg-white p-7 shadow-sm shadow-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <h3 className="mt-4 font-heading text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* What affects price */}
      <section className="bg-night py-24 text-cream">
        <div className="container-site">
          <FadeIn className="text-center">
            <p className="eyebrow-light">02</p>
            <h2 className="heading-lg mt-3 text-white">
              What Affects Your Price
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRICING_FACTORS.map((item, i) => (
              <FadeIn key={item.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl border border-cream/10 bg-white/5 p-7">
                  <h3 className="font-heading text-xl text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Starting ranges */}
      <section className="container-site py-24">
        <FadeIn className="text-center">
          <p className="eyebrow">03</p>
          <h2 className="heading-lg mt-3">Starting Ranges by Trip Type</h2>
        </FadeIn>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_RANGES.map((item, i) => (
            <FadeIn key={item.type} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-brand/15 bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10">
                <h3 className="font-heading text-lg">{item.type}</h3>
                <p className="mt-4 font-heading text-3xl font-bold text-brand">
                  {item.range}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-ink/40">
                  {item.unit}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/60">
                  {item.note}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink/50">
            These are starting estimates only. Your actual quote will be built
            around your specific group, destination, and dates.
          </p>
          <div className="mt-12 text-center">
            <p className="mx-auto max-w-xl font-heading text-2xl leading-snug">
              The best way to know your price is to get a custom quote.
              It&apos;s free and takes 2 minutes.
            </p>
            <Link href="/get-a-quote" className="btn-primary mt-8">
              Get Your Quote
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
