import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import CTABanner from "@/components/CTABanner";
import { ARTICLES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Travel Tips",
  description:
    "The OTC Travel Guide: everything you need to know before, during, and after your group trip, from the people who plan them for a living.",
};

export default function TravelTipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Travel Tips"
        title="The OTC Travel Guide."
        subtitle="Everything you need to know before, during, and after your group trip."
      />

      <section className="container-site py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <FadeIn key={article.slug} delay={(i % 3) * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm shadow-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/10">
                <Link href={`/travel-tips/${article.slug}`} className="relative block h-52 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
                    {article.category}
                  </span>
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs uppercase tracking-widest text-ink/40">
                    {article.readTime}
                  </p>
                  <h2 className="mt-2 font-heading text-xl leading-snug">
                    <Link
                      href={`/travel-tips/${article.slug}`}
                      className="transition-colors hover:text-brand"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/travel-tips/${article.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-brand transition-colors hover:text-brand-dark"
                  >
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <CTABanner
        title="Reading about trips is the slow way to take one."
        subtitle="Tell us where your group wants to go. We'll do the rest."
        buttonLabel="Plan Your Trip"
      />
    </>
  );
}
