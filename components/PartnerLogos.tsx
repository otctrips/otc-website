import { PARTNERS } from "@/lib/data";

export default function PartnerLogos() {
  // Two copies of the list make the -50% translate loop seamless.
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="overflow-hidden bg-night py-16">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-cream/50">
        Our Trusted Partners
      </p>
      <div className="marquee mt-10 overflow-hidden">
        <div className="marquee-track flex w-max items-center">
          {items.map((name, i) => (
            <span key={`${name}-${i}`} className="flex items-center">
              <span className="whitespace-nowrap font-sans text-base font-semibold uppercase tracking-[0.2em] text-cream/80">
                {name}
              </span>
              <span className="mx-7 text-brand-light" aria-hidden="true">
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
      <p className="mt-10 text-center text-sm text-cream/40">
        Plus access to over 1 million vendors across 100+ countries
      </p>
    </section>
  );
}
