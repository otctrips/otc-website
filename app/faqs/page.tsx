import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "How OTC Trips works: flights, payments, group sizes, cancellations, and how to get your group's trip started.",
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions? We've Got Answers."
        subtitle="Everything groups ask us before booking, answered the way we'd answer on the phone."
      />
      <section className="container-site py-24">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion />
        </div>
      </section>
      <CTABanner
        title="Didn't see your question?"
        subtitle="Drop it in the form and a real person will answer it, usually the same day."
        buttonLabel="Ask Us Directly"
      />
    </>
  );
}
