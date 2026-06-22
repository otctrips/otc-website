"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/destinations", label: "Destinations" },
  { href: "/our-trips", label: "Our Trips" },
];

const DRAWER_LINKS = [
  ...NAV_LINKS,
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faqs", label: "FAQs" },
  { href: "/travel-tips", label: "Travel Tips" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const onDark = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-cream/95 backdrop-blur"
          : "border-b border-transparent bg-gradient-to-b from-night/60 to-transparent"
      }`}
    >
      <div className="container-site flex h-20 items-center justify-between">
        <Link
          href="/"
          className={`font-heading text-2xl font-bold tracking-wide transition-colors ${
            onDark ? "text-white" : "text-ink"
          }`}
        >
          OTC <span className="text-brand">TRIPS</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm uppercase tracking-widest transition-colors hover:text-brand ${
                isActive(link.href)
                  ? "font-bold text-white underline underline-offset-4"
                  : onDark
                    ? "font-medium text-white/90"
                    : "font-medium text-ink/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/get-a-quote"
            className="btn-primary hidden !px-6 !py-2.5 sm:inline-flex"
          >
            Plan Your Trip
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
              onDark ? "text-white" : "text-ink"
            } ${open ? "text-white" : ""}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            className="fixed inset-0 top-0 -z-10 flex h-screen flex-col justify-center bg-night px-8 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {DRAWER_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-2 font-heading text-3xl transition-colors ${
                      isActive(link.href)
                        ? "text-brand-light"
                        : "text-cream hover:text-brand-light"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Link href="/get-a-quote" className="btn-primary">
                  Plan Your Trip
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
