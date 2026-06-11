import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import CTABanner from "@/components/CTABanner";
import DestinationCard from "@/components/DestinationCard";
import { DESTINATION_CATEGORIES, IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Beach escapes, formal-ready cities, international getaways, and mountain retreats. The destinations OTC Trips plans most, and the trips each one does best.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Where Do You Want to Go?"
        subtitle="We'll take your group anywhere. Here are some of our most popular destinations."
        image={IMAGES.beachWide}
        tall
      />

      <section className="container-site py-24">
        <div className="space-y-20">
          {DESTINATION_CATEGORIES.map((category) => (
            <div key={category.title}>
              <FadeIn>
                <h2 className="heading-md">{category.title}</h2>
              </FadeIn>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.destinations.map((destination, i) => (
                  <FadeIn key={destination.name} delay={(i % 3) * 0.08}>
                    <DestinationCard destination={destination} />
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Don't See Your Spot?"
        subtitle="We've planned trips to over 50 destinations. If you have somewhere in mind, we'll make it happen."
        buttonLabel="Tell Us Where You Want to Go"
      />
    </>
  );
}
