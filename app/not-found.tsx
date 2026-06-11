import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-night pt-20 text-cream">
      <div className="container-site py-24 text-center">
        <p className="font-heading text-2xl font-bold tracking-wide text-white">
          OTC <span className="text-brand-light">TRIPS</span>
        </p>
        <h1 className="mt-8 font-heading text-8xl font-bold text-brand-light/30 sm:text-9xl">
          404
        </h1>
        <h2 className="heading-md mt-4 text-white">
          This page took a wrong turn.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-cream/60">
          Let&apos;s get you back on track.
        </p>
        <div className="mt-10">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
