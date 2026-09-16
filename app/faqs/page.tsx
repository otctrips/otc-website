import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "How OTC Trips works: flights, payments, group sizes, cancellations, and how to get your group's trip started.",
};

export default function FaqsPage() {
  return (
    <>
      
      <div className="container-site pt-48 pb-0 text-center">
        <h1 className="font-heading text-4xl font-bold text-brand sm:text-5xl">Questions? We've Got Answers.</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-ink/60">
        </p>
      </div>
      <section className="container-site py-24">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion />
        </div>
      </section>
      
    </>
  );
}
