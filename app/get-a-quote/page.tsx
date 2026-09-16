import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Plan Your Trip",
  description:
    "Tell us where you want to go: destination, dates, group size. A real coordinator will come back with a custom plan, flights included.",
};



export default function PlanYourTripPage() {
  return (
    <>
    <div className="container-site pt-48 pb-0 text-center">
        <h1 className="font-heading text-4xl font-bold text-brand sm:text-5xl">Get A Quote</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-ink/60">
        </p>
      </div>
    <section className="min-h-screen bg-cream flex items-center justify-center px-6 pt-[80px] pb-20 sm:px-10">
      <div className="w-full max-w-2xl">
        <QuoteForm />
      </div>
    </section>
    </>
  );
}