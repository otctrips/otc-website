import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Referral Program",
  description:
    "Refer a fraternity, sorority, or student org to OTC Trips and get rewarded when they book. Cash or credit toward your own trip, no cap.",
};

const STEPS = [
  {
    step: "01",
    title: "Refer a Group",
    text: "A fraternity planning a formal, a sorority planning a retreat, any student org planning anything. Have them drop your name in the quote form. That's the entire process.",
  },
  {
    step: "02",
    title: "They Book a Trip",
    text: "We treat them the way we treated you: real proposal, real person, flights included. You don't lift a finger. The referral is tracked from their first form.",
  },
  {
    step: "03",
    title: "You Get Rewarded",
    text: "Once their trip is confirmed, you get paid in cash or credit toward your own next trip, your call. Bigger groups, bigger reward. No cap on how many you refer.",
  },
];

export default function ReferralPage() {
  return (
    <>
      <PageHero
        eyebrow="Referral Program"
        title="Know a Chapter That Needs a Trip?"
        subtitle="Send them our way. We'll take care of them, and take care of you."
      />

      <section className="container-site py-24">
        <FadeIn className="text-center">
          <p className="eyebrow">How It Works</p>
          <h2 className="heading-lg mt-3">Three Steps. That&apos;s It.</h2>
        </FadeIn>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {STEPS.map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.12}>
              <div className="h-full rounded-2xl bg-white p-8 shadow-sm shadow-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
                <span className="font-heading text-5xl font-bold text-brand/20">
                  {item.step}
                </span>
                <h3 className="mt-4 font-heading text-2xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/60">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-lg leading-relaxed text-ink/65">
              Here&apos;s the thing about group travel: the best trips spread
              by word of mouth. Your formal goes perfectly, and three chapters
              ask who planned it. You were going to tell them anyway. Now
              telling them pays. The chapter you refer gets a better trip than
              they would have gotten anywhere else, and you get rewarded for
              making the introduction. Everybody wins except the company that
              would have sold them a package.
            </p>
          </div>
        </FadeIn>
      </section>

      <CTABanner
        title="Got someone in mind?"
        subtitle="Start a quote and put their name, or yours, in the notes. We'll handle the rest."
        buttonLabel="Start Referring"
      />
    </>
  );
}
