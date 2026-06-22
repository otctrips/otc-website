import Link from "next/link";
import { SITE } from "@/lib/data";

const MAIN_LINKS = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/destinations", label: "Destinations" },
  { href: "/our-trips", label: "Our Trips" },
  { href: "/get-a-quote", label: "Plan Your Trip" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
  { href: "/pricing", label: "Pricing" },
  { href: "/referral", label: "Referral Program" },
  { href: "/travel-tips", label: "Travel Tips" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-night text-cream">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Link href="/" className="font-heading text-3xl font-bold tracking-wide">
            OTC <span className="text-brand-light">TRIPS</span>
          </Link>
          <p className="mt-4 max-w-sm font-heading text-lg italic leading-relaxed text-cream/70">
            {SITE.tagline}
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-light">
            Main
          </h3>
          <ul className="mt-5 space-y-3">
            {MAIN_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-light">
            Company
          </h3>
          <ul className="mt-5 space-y-3">
            {COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-site py-6">
          <p className="text-center text-xs leading-relaxed text-cream/40">
            © 2026 OTC Trips, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
