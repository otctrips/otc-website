"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "https://otctrips.com/what-we-do", label: "What We Do" },
  { href: "https://otctrips.com/destinations", label: "Destinations" },
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

  const isActive = (href: string) => {
    const path = href.replace("https://otctrips.com", "") || "/";
    return path === "/" ? pathname === "/" : pathname.startsWith(path);
  };

  const isGuidePage = pathname === "/guide" || pathname.startsWith("/guide/") || pathname === "/about" || pathname === "/privacy" || pathname === "/faqs" || pathname === "/referral" || pathname === "/get-a-quote" || pathname === "/" || pathname === "/destinations";
  const onDark = !scrolled && !open && !isGuidePage;

  return (
    <header
      className={`fixed inset-x-0 top-[0px] z-50 transition-all duration-300 border-b border-white/20 bg-[#4D8397]`}
    >
      <div className="container-site flex h-20 items-center justify-between">
        <Link href="https://otctrips.com">
          <Image
            src="/logo.png"
            alt="OTC Trips"
            height={40}
            width={200}
            style={{ width: "auto", height: "40px" }}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm uppercase tracking-widest hover:underline hover:underline-offset-4 ${
                isActive(link.href)
                  ? "font-bold text-white underline underline-offset-4"
                  : onDark
                    ? "font-bold text-white/90"
                    : "font-bold text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://otctrips.com/get-a-quote"
            className="btn-primary hidden !px-6 !py-2.5 !border-2 !border-white sm:inline-flex"
          >
            Plan Your Trip
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors lg:hidden"
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
            className="fixed inset-0 top-0 -z-10 flex h-screen flex-col justify-center bg-[#4D8397] px-8 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Link href="https://otctrips.com/get-a-quote" className="btn-primary">
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
