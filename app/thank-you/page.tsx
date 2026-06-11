import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "We Got It",
  description: "Your trip request is in. Someone from the OTC team will be in touch within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-night pt-20 text-cream">
      <div className="container-site py-24 text-center">
        <FadeIn>
          <h1 className="font-heading text-6xl text-white sm:text-7xl lg:text-8xl">
            We Got It.
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream/65">
            Someone from the OTC team will be in touch within 24 hours. In the
            meantime, follow us on Instagram for trip inspiration.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/40 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-cream transition-all duration-300 hover:border-cream hover:bg-cream hover:text-ink"
            >
              @otctrips on Instagram
            </a>
          </div>
          <p className="mt-12 text-sm text-cream/40">
            Average response time: under 4 hours during business hours
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
