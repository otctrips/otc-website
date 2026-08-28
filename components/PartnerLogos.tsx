import { PARTNERS } from "@/lib/data";

export default function PartnerLogos() {
  return (
    <section className="bg-night py-16">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-cream/50">
        Our Trusted Partners
      </p>
      <div className="container-site mt-10 flex flex-wrap justify-center gap-x-10 gap-y-5">
        {PARTNERS.map((name) => (
          <span key={name} className="whitespace-nowrap font-sans text-base font-semibold uppercase tracking-[0.2em] text-cream/80">
            {name}
          </span>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-cream/40">
        Plus access to over 1 million vendors across 100+ countries
      </p>
    </section>
  );
}