import type { Metadata } from "next";
import TripGallery from "@/components/TripGallery";

export const metadata: Metadata = {
  title: "Our Trips",
  description:
    "Formals in Nashville, spring break in Punta Cana, retreats in Tahoe. A look at the trips OTC has built for groups across the country.",
};

export default function OurTripsPage() {
  return (
    <>
      
      
      <div className="container-site pt-48 pb-0 text-center">
        <h1 className="font-heading text-4xl font-bold text-brand sm:text-5xl">Where Do You Want To Go?</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-ink/60">
          We&aposll take your group anywhere. Here are some of our most popular destinations.
        </p>
      </div>
      <TripGallery />
      
    </>
  );
}
