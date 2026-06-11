import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Plan Your Trip",
  description:
    "Tell us where you want to go: destination, dates, group size. A real coordinator will come back with a custom plan, flights included.",
};

const TRUST_SIGNALS = [
  {
    title: "Response within 24 hours",
    text: "Usually a lot faster. A real person reads every request.",
  },
  {
    title: "Flights included",
    text: "Group air through our major carrier partnerships, so the whole group travels together.",
  },
  {
    title: "100% custom",
    text: "No packages. Your trip is built from scratch around your group.",
  },
];

export default function PlanYourTripPage() {
  return (
    <section className="grid min-h-screen lg:grid-cols-[2fr_3fr]">
      {/* Dark panel */}
      <div className="flex flex-col justify-center bg-night px-8 pb-16 pt-36 text-cream lg:px-14 lg:pt-20">
        <h1 className="font-heading text-4xl leading-tight text-white sm:text-5xl">
          Tell us where you want to go.
        </h1>
        <p className="mt-4 font-heading text-2xl italic text-brand-light">
          We&apos;ll handle everything else.
        </p>
        <div className="mt-12 space-y-8">
          {TRUST_SIGNALS.map((signal) => (
            <div key={signal.title} className="flex gap-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-brand-light">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <div>
                <p className="font-semibold text-white">{signal.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-cream/55">
                  {signal.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form panel */}
      <div className="flex items-center bg-cream px-6 py-16 sm:px-10 lg:px-14 lg:pt-32">
        <div className="mx-auto w-full max-w-2xl">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
