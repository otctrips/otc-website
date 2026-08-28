import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Plan Your Trip",
  description:
    "Tell us where you want to go: destination, dates, group size. A real coordinator will come back with a custom plan, flights included.",
};

export default function PlanYourTripPage() {
  return (
    <section className="min-h-screen bg-cream flex items-center justify-center px-6 py-16 sm:px-10">
      <div className="w-full max-w-2xl">
        <QuoteForm />
      </div>
    </section>
  );
}