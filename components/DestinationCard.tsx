"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Destination } from "@/lib/data";

export default function DestinationCard({
  destination,
}: {
  destination: Destination;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm shadow-ink/5 transition-shadow hover:shadow-xl hover:shadow-ink/10"
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 transition-colors duration-300 group-hover:bg-brand/20" />
        <div className="card-overlay-gradient absolute inset-x-0 bottom-0 h-2/5" />
        <div className="absolute bottom-4 left-5 right-5">
          <h3 className="card-text-shadow font-heading text-2xl font-bold text-white">
            {destination.name}
          </h3>
          <p className="card-text-shadow mt-1 text-[11px] font-semibold uppercase tracking-widest text-white">
            Best For: {destination.bestFor}
          </p>
        </div>
      </div>
      <div className="p-5">
        <Link
          href="/get-a-quote"
          className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-brand transition-colors hover:text-brand-dark"
        >
          Plan This Trip
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
