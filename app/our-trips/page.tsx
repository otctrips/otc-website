import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import TripGallery from "@/components/TripGallery";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Trips",
  description:
    "Formals in Nashville, spring break in Punta Cana, retreats in Tahoe. A look at the trips OTC has built for groups across the country.",
};

export default function OurTripsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Trips"
        title="The Trips We've Built."
        subtitle="Every photo is a group that handed off the planning. Yours could be next."
        image={IMAGES.celebration}
      />
      <TripGallery />
      <CTABanner
        title="Your trip could be next."
        subtitle="Tell us where you want to go. We'll handle everything else."
        buttonLabel="Start Planning"
      />
    </>
  );
}
