import { PARTNERS } from "@/lib/data";

export default function PartnerLogos() {
  return (
    <section className="bg-[#4D8397] py-16">
      <h2 className="text-center font-heading text-3xl font-bold text-white sm:text-4xl">
        Our Trusted Partners
      </p>
      <div className="container-site mt-10 flex flex-wrap justify-center gap-x-10 gap-y-5">
        {PARTNERS.map((name) => (
          <span key={name} className="whitespace-nowrap font-sans text-base font-semibold uppercase tracking-[0.2em] text-white">
            {name}
          </span>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-white/60">
        Plus access to over 1 million vendors across 100+ countries
      </p>
    </section>
  );
}