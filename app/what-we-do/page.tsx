import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import CTABanner from "@/components/CTABanner";
import { IMAGES, SERVICES, WHY_OTC } from "@/lib/data";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Fraternity formals, sorority retreats, spring break, and corporate trips. Fully custom, flights included, one coordinator from first call to final flight home.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Full-Service Group Travel. Built Around You."
        subtitle="From the first conversation to the last flight home, we handle everything. Here's exactly what that looks like."
        image={IMAGES.resortPool}
      />

      <section className="container-site py-24">
        <div className="space-y-28">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.id}>
              <div
                id={service.id}
                className={`grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-80 overflow-hidden rounded-2xl shadow-lg shadow-ink/10 sm:h-[28rem]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div>
                  <p className="eyebrow">{service.title}</p>
                  <h2 className="heading-md mt-3">{service.headline}</h2>
                  {service.copy.map((paragraph, j) => (
                    <p key={j} className="mt-4 leading-relaxed text-ink/65">
                      {paragraph}
                    </p>
                  ))}
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.bullets.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-ink/70">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-brand">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link href="/get-a-quote" className="btn-primary mt-8">
                    {service.cta}
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Why OTC */}
      <section className="bg-night py-24 text-cream">
        <div className="container-site">
          <FadeIn className="text-center">
            <p className="eyebrow-light">The Honest Comparison</p>
            <h2 className="heading-lg mt-3 text-white">
              Why OTC Over Everyone Else?
            </h2>
          </FadeIn>
          <div className="mx-auto mt-16 max-w-3xl space-y-12">
            {WHY_OTC.map((item, i) => (
              <FadeIn key={item.title} delay={(i % 2) * 0.08}>
                <div className="flex gap-6 border-b border-cream/10 pb-12 last:border-0 last:pb-0">
                  <span className="font-heading text-3xl font-bold text-brand-light/40">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-3xl text-white sm:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-lg leading-relaxed text-cream/60">
                      {item.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Sound like what you've been looking for?"
        subtitle="Two minutes on the form. One conversation. Then it's our problem, not yours."
        buttonLabel="Plan Your Trip"
      />
    </>
  );
}
