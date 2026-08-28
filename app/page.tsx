import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import FadeIn from "@/components/FadeIn";
import PartnerLogos from "@/components/PartnerLogos";
import {
  SITE,
  TESTIMONIALS,
  TRIP_TYPE_CARDS,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "OTC Trips | Custom Group Travel, Flights Included",
  description:
    "Fully custom group travel for fraternities, sororities, and college organizations. Flights included through our major carrier partnerships, one coordinator start to finish, no packages.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Social proof */}
      <section className="py-24 overflow-hidden">
        <FadeIn className="text-center container-site">
          <h2 className="heading-lg">
            Trusted By Groups Across the World
          </h2>
        </FadeIn>
        <div className="mt-14 relative">
          <div className="flex animate-scroll gap-8 w-max">
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <figure key={i} className="w-[380px] shrink-0 flex flex-col rounded-2xl bg-white p-8 shadow-sm shadow-ink/5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-brand/30">
                  <path d="M9.6 4C6 6 3.6 9.2 3.6 13.6c0 3.6 2 6.4 5.2 6.4 2.4 0 4.4-1.8 4.4-4.2 0-2.4-1.7-4-4-4-.4 0-.9.1-1 .1.3-2.3 2.2-4.6 4.4-5.7L9.6 4zm10.8 0c-3.6 2-6 5.2-6 9.6 0 3.6 2 6.4 5.2 6.4 2.4 0 4.4-1.8 4.4-4.2 0-2.4-1.7-4-4-4-.4 0-.9.1-1 .1.3-2.3 2.2-4.6 4.4-5.7L20.4 4z" />
                </svg>
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-ink/75">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                    {t.tripType}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <FadeIn delay={0.3}>
          <p className="mt-12 text-center font-heading text-2xl text-ink/70 container-site">
            {SITE.tripsPlanned} trips planned and counting
          </p>
        </FadeIn>
      </section>

      {/* Trip types */}
      <section className="container-site py-24">
        <FadeIn className="text-center">
          <p className="eyebrow">Trip Types</p>
          <h2 className="heading-lg mt-3">What Are You Planning?</h2>
        </FadeIn>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {TRIP_TYPE_CARDS.map((card, i) => (
            <FadeIn key={card.title} delay={(i % 2) * 0.1}>
              <Link
                href={card.href}
                className="group relative block h-80 overflow-hidden rounded-2xl"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 transition-colors duration-300 group-hover:bg-brand/25" />
                <div className="card-overlay-gradient absolute inset-x-0 bottom-0 h-3/5" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="card-text-shadow font-heading text-3xl font-bold text-white">
                    {card.title}
                  </h3>
                  
                  <span className="card-text-shadow mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-light transition-transform duration-300 group-hover:translate-x-1">
                    See What&apos;s Included
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Partner strip */}
      <PartnerLogos />
    </>
  );
}
