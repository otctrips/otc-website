import Image from "next/image";

const PARTNER_LOGOS = [
  { name: "Marriott International", url: "https://fybjvcnworlikfxfkeer.supabase.co/storage/v1/object/public/partners/1.png" },
  { name: "Hilton Hotels & Resorts", url: "https://fybjvcnworlikfxfkeer.supabase.co/storage/v1/object/public/partners/2.png" },
  { name: "Hyatt Hotels Corporation", url: "https://fybjvcnworlikfxfkeer.supabase.co/storage/v1/object/public/partners/3.png" },
  { name: "IHG Hotels & Resorts", url: "https://fybjvcnworlikfxfkeer.supabase.co/storage/v1/object/public/partners/4.png" },
  { name: "Wyndham Hotels & Resorts", url: "https://fybjvcnworlikfxfkeer.supabase.co/storage/v1/object/public/partners/5.png" },
  { name: "American Airlines", url: "https://fybjvcnworlikfxfkeer.supabase.co/storage/v1/object/public/partners/6.png" },
  { name: "JetBlue Airways", url: "https://fybjvcnworlikfxfkeer.supabase.co/storage/v1/object/public/partners/7.png" },
  { name: "Air Canada", url: "https://fybjvcnworlikfxfkeer.supabase.co/storage/v1/object/public/partners/8.png" },
  { name: "Royal Caribbean", url: "https://fybjvcnworlikfxfkeer.supabase.co/storage/v1/object/public/partners/9.png" },
  { name: "Carnival Cruise Line", url: "https://fybjvcnworlikfxfkeer.supabase.co/storage/v1/object/public/partners/10.png" },
  { name: "MSC Cruises", url: "https://fybjvcnworlikfxfkeer.supabase.co/storage/v1/object/public/partners/11.png" },
  { name: "Virgin Voyages", url: "https://fybjvcnworlikfxfkeer.supabase.co/storage/v1/object/public/partners/12.png" },
];

export default function PartnerLogos() {
  return (
    <section className="bg-[#4D8397] py-16">
      <h2 className="text-center font-heading text-3xl font-bold text-white sm:text-4xl">
        Our Trusted Partners
      </h2>
      <div className="container-site mt-12 grid grid-cols-3 gap-8 sm:grid-cols-4 lg:grid-cols-6">
        {PARTNER_LOGOS.map((partner) => (
          <div key={partner.name} className="flex items-center justify-center">
            <Image
              src={partner.url}
              alt={partner.name}
              width={160}
              height={60}
              className="h-20 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}