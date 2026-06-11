import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import FadeIn from "@/components/FadeIn";
import CTABanner from "@/components/CTABanner";
import PartnerLogos from "@/components/PartnerLogos";
import {
  DIFFERENTIATOR_BAR,
  PAIN_POINTS,
  SITE,
  TESTIMONIALS,
  TRIP_TYPE_CARDS,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "OTC Trips | Custom Group Travel, Flights Included",
  description:
    "Fully custom group travel for fraternities, sororities, and college organizations. Flights included through our major carrier partnerships, one coordinator start to finish, no packages.",
};

const BAR_ICONS: Record<string, React.ReactNode> = {
  plane: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  ),
  blueprint: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  person: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
    </svg>
  ),
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Differentiator bar, flush against hero */}
      <section className="bg-night text-cream">
        <div className="container-site grid divide-y divide-cream/10 py-2 md:grid-cols-3 md:divide-x md:divide-y-0">
          {DIFFERENTIATOR_BAR.map((item, i) => (
            <FadeIn key={item.text} delay={i * 0.1}>
              <div className="flex items-center gap-4 px-2 py-6 md:justify-center md:px-6">
                <span className="text-brand-light">{BAR_ICONS[item.icon]}</span>
                <p className="text-sm font-semibold uppercase tracking-wider text-cream/90">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="container-site py-24">
        <FadeIn className="text-center">
          <p className="eyebrow">Social Proof</p>
          <h2 className="heading-lg mt-3">
            Trusted By Chapters Across the Country
          </h2>
        </FadeIn>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.12}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm shadow-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-brand/30">
                  <path d="M9.6 4C6 6 3.6 9.2 3.6 13.6c0 3.6 2 6.4 5.2 6.4 2.4 0 4.4-1.8 4.4-4.2 0-2.4-1.7-4-4-4-.4 0-.9.1-1 .1.3-2.3 2.2-4.6 4.4-5.7L9.6 4zm10.8 0c-3.6 2-6 5.2-6 9.6 0 3.6 2 6.4 5.2 6.4 2.4 0 4.4-1.8 4.4-4.2 0-2.4-1.7-4-4-4-.4 0-.9.1-1 .1.3-2.3 2.2-4.6 4.4-5.7L20.4 4z" />
                </svg>
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-ink/75">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-5">
                  <p className="font-semibold">{t.name}</p>
                  <p className="mt-0.5 text-sm text-ink/50">{t.school}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand">
                    {t.tripType}
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <p className="mt-12 text-center font-heading text-2xl text-ink/70">
            {SITE.tripsPlanned} trips planned and counting
          </p>
        </FadeIn>
      </section>

      {/* Problem / Solution */}
      <section className="bg-night py-24 text-cream">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <h2 className="font-heading text-4xl leading-tight text-white sm:text-5xl">
              Planning a group trip shouldn&apos;t feel like a second job.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/60">
              If you&apos;re the one organizing, you know the drill: the
              spreadsheet, the group chat, the money, the &ldquo;wait, what
              time is our flight?&rdquo; We exist so none of that is your
              problem.
            </p>
          </FadeIn>
          <div className="space-y-5">
            {PAIN_POINTS.map((item, i) => (
              <FadeIn key={item.pain} delay={i * 0.1}>
                <div className="rounded-2xl border border-cream/10 bg-white/5 p-6">
                  <p className="text-cream/50 line-through decoration-cream/30">
                    {item.pain}
                  </p>
                  <p className="mt-2 flex items-start gap-2.5 font-medium text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-brand-light">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {item.fix}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
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
                  <p className="card-text-shadow mt-2 max-w-md text-white/80">{card.line}</p>
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

      {/* The Flights section */}
      <section className="bg-white py-28">
        <div className="container-site text-center">
          <FadeIn>
            <p className="eyebrow">The Big One</p>
            <h2 className="mt-4 font-heading text-5xl sm:text-6xl lg:text-7xl">
              We Include Flights.
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-ink/65 sm:text-xl">
              Most group travel companies leave flights up to you. Your group
              booking separately, different airlines, different prices,
              different arrival times. We coordinate group air through our
              carrier relationships, locking in rates early so your whole
              group travels together on the same flights.
            </p>
            <Link href="/what-we-do" className="btn-secondary mt-10">
              See How It Works
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Partner strip */}
      <PartnerLogos />

      <CTABanner />
    </>
  );
}
