"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GALLERY, type GalleryItem } from "@/lib/data";

const FILTERS = [
  "All",
  "Formals",
  "Spring Break",
  "Retreats",
  "International",
] as const;
type Filter = (typeof FILTERS)[number];

export default function TripGallery() {
  const [filter, setFilter] = useState<Filter>("All");

  const items: GalleryItem[] =
    filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter);

  return (
    <section className="container-site py-20">
      <div className="flex flex-wrap justify-center gap-3">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${
              filter === f
                ? "text-white"
                : "bg-white text-ink/60 hover:text-brand"
            }`}
          >
            {filter === f && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-brand"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
      >
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.div
              key={item.src}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35 }}
              className={`group relative overflow-hidden rounded-2xl ${
                i % 3 === 0 ? "h-96" : "h-72"
              }`}
            >
              <Image
                src={item.src}
                alt={`${item.destination}, ${item.tripType}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="card-overlay-gradient absolute inset-x-0 bottom-0 h-2/5" />
              <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-300 group-hover:-translate-y-1">
                <p className="card-text-shadow font-heading text-xl font-bold text-white">
                  {item.destination}
                </p>
                <p className="card-text-shadow mt-0.5 text-xs font-semibold uppercase tracking-widest text-white">
                  {item.tripType}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
