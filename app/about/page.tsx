import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import CTABanner from "@/components/CTABanner";
import PartnerLogos from "@/components/PartnerLogos";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "OTC Trips started with one person who watched student organizations get overcharged, underserved, and left to figure out flights on their own. So we fixed it.",
};

const STATS = [
  "Flights Included. Always.",
  "Custom Trips Only. No Packages.",
  "One Coordinator, Start to Finish.",
  "100+ Destinations and Counting.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We Built OTC Because Group Travel Was Broken."
      />

      {/* Story */}
      <section className="container-site py-24">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="eyebrow">The Story</p>
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-ink/70">
              <p>
                I started OTC because I watched it happen over and over:
                a student gets voted into a chapter position, inherits a trip
                to plan, and walks straight into an industry that treats them
                like a transaction. The big student travel companies quoted
                them a &ldquo;package,&rdquo; meaning a hotel and a wristband,
                and left the hardest part, getting 80 people to the same city
                at the same time, as their problem. No flights. No real
                contact person. No one who&apos;d pick up the phone in
                February when something went sideways.
              </p>
              <p>
                Chapters were getting overcharged for trips that didn&apos;t
                fit them, underserved by companies processing them like
                orders, and left to figure out group airfare on their own.
                Nobody in the space was acting like what they actually are:
                the person responsible for the biggest weekend of
                someone&apos;s year.
              </p>
              <p>
                So we built the company differently. Every OTC trip is built
                from scratch. No packages, no templates. Every group gets one
                coordinator with a direct line, from the first call to the
                final flight home. And we went and earned the thing nobody
                else bothered to: group air relationships with major carriers,
                so flights aren&apos;t your problem anymore. Those
                relationships didn&apos;t come with the business license.
                They came from years of bookings, follow-through, and trips
                that went the way we said they would.
              </p>
              <p className="font-heading text-2xl leading-snug text-ink">
                Our job is simple: make sure your group&apos;s trip goes
                exactly the way you imagined it. Everything else is just
                logistics.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-night py-24 text-cream">
        <div className="container-site">
          <FadeIn>
            <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-[2fr_3fr]">
              <div className="relative mx-auto h-96 w-full max-w-xs overflow-hidden rounded-2xl">
                <Image
                  src={IMAGES.founder}
                  alt="Tyler, founder of OTC Trips"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="eyebrow-light">The Founder</p>
                <h2 className="mt-3 font-heading text-4xl text-white">
                  Tyler [Lastname]
                </h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-cream/50">
                  Founder, OTC Trips
                </p>
                <p className="mt-6 text-lg leading-relaxed text-cream/65">
                  Tyler has personally planned and run trips for chapters and
                  organizations across the country, and still takes the first
                  call on most of them. He&apos;s negotiated with venues in a
                  dozen states, walked groups through midnight flight delays,
                  and learned the hard way which resorts mean it when they say
                  &ldquo;group friendly.&rdquo; If your trip is on OTC&apos;s
                  books, he knows about it. That&apos;s not a customer service
                  promise; it&apos;s just how small the company is on purpose.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What makes us different */}
      <section className="container-site py-24">
        <FadeIn className="text-center">
          <p className="eyebrow">What Makes Us Different</p>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat} delay={i * 0.1}>
              <div className="flex h-full items-center justify-center rounded-2xl border border-brand/20 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/10">
                <p className="font-heading text-xl leading-snug text-ink">
                  {stat}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Partners */}
      <PartnerLogos />

      <CTABanner
        title="The first conversation is just a conversation."
        subtitle="No deposit, no commitment, no sales pressure. Tell us what you're planning."
        buttonLabel="Plan Your Trip"
      />
    </>
  );
}
