"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGES, SITE } from "@/lib/data";

export default function HomeHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-night">
      <Image
        src={IMAGES.homeHero}
        alt="Luxury beachfront resort at dusk"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/85" />

      <div className="container-site relative py-32 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="mx-auto max-w-5xl font-heading text-4xl leading-[1.15] sm:text-6xl lg:text-7xl"
        >
          {SITE.tagline}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10"
        >
          <Link href="/get-a-quote" className="btn-primary !px-12 !py-4 !text-base">
            Plan Your Trip
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border-2 border-white/40 p-1.5"
        >
          <div className="mx-auto h-2 w-1 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
