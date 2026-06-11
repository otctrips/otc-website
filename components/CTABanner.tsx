import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function CTABanner({
  title = "Your group's trip won't plan itself.",
  subtitle = "Tell us where you want to go. We'll handle everything else.",
  buttonLabel = "Start Planning",
  href = "/get-a-quote",
}: {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="bg-night">
      <div className="container-site py-24 text-center">
        <FadeIn>
          <h2 className="heading-lg mx-auto max-w-3xl text-white">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream/60">
            {subtitle}
          </p>
          <Link href={href} className="btn-primary mt-9 !px-10 !py-4 !text-base">
            {buttonLabel}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
