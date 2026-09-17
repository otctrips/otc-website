"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GALLERY, type GalleryItem } from "@/lib/data";
import Link from "next/link";

const FILTERS = ["All", "Formals", "Spring Break", "Retreats", "International", "Domestic", "Corporate"];

export default function TripGallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const items = filter === "All" ? GALLERY : GALLERY.filter((g) => g.tags.includes(filter));

  return (
    <section className="container-site py-20">
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${filter === f ? "bg-brand text-white" : "bg-white text-ink/60 hover:text-brand"
              }`}
          >
            {f}
          </button>
        ))}
      </div>
      <motion.div
        layout
        className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
      >
        {items.map((item, i) => (
          <motion.div
            key={item.src}
            layout
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className={`group relative overflow-hidden rounded-2xl ${i % 3 === 0 ? "h-96" : "h-72"
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

            {/* Tags top left */}
            <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* City bottom left, button bottom right */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
              <div>
                <p className="card-text-shadow font-heading text-xl font-bold text-white">
                  {item.destination}
                </p>
                
              </div>
              <button
                onClick={() => setSelected(item)}
                className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:bg-white/30"
              >
                See Details
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 w-full">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm"
                >
                  ✕
                </button>
                <Image
                  src={selected.src}
                  alt={selected.destination}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-brand/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="mt-1 font-heading text-2xl font-bold text-ink">
                  {selected.destination}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink/65">
                  {selected.description}
                </p>
                <Link
                  href="/get-a-quote"
                  className="mt-6 block w-full rounded-full bg-brand py-3 text-center text-sm font-bold uppercase tracking-widest text-white"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}