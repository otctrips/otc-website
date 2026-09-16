import type { Metadata } from "next";

import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";


export const metadata: Metadata = {
  title: "About",
  description:
    "OTC Trips started with one person who watched student organizations get overcharged, underserved, and left to figure out flights on their own. So we fixed it.",
};



export default function AboutPage() {
  return (
    <>
      <div className="container-site pt-32 pb-12">
        <p className="eyebrow">About</p>
        <h1 className="font-heading text-4xl font-bold text-ink mt-3 sm:text-5xl">We Built OTC Because Group Travel Was Broken.</h1>
      </div>

      {/* Story */}
      <section className="container-site py-24">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="eyebrow">The Story</p>
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-ink/70">
              <p>
                We planned our chapter&apos;s trips ourselves. That meant working directly with hotels, transportation companies, venues, and other vendors and seeing what these trips actually cost.
              </p>
              <p>
                That&apos;s when we realized how much students were overpaying.
              </p>
              <p>
                We would see other chapters book similar trips through large student travel companies for significantly more than what we knew the trip actually cost. As college students ourselves, we understood what that extra money meant. An extra $100 or $200 per person isn&apos;t just another line on an invoice when you&apos;re in college and across an entire chapter, it adds up fast.
              </p>
              <p>
                We didn&apos;t think students should have to overpay just because they didn&apos;t have the relationships or experience to book everything themselves.
              </p>
              <p>
                So we started OTC Trips.
              </p>
              <p>
                We took the same approach we used when planning for our own chapter and built a company around it: source trips directly, keep pricing competitive, and give groups more for what they&apos;re spending.
              </p>
              <p>
                Since then, we&apos;ve built relationships with hotels, transportation companies, venues, and major airlines across the country, allowing us to handle every part of a group trip without the inflated pricing that made us want to start OTC in the first place.
              </p>
              <p>
                We started this company as college students planning trips for our own friends. We haven&apos;t forgotten what it feels like to be on the other side of the quote and we never will.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

    

      

      

      
    </>
  );
}
