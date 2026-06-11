"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQS } from "@/lib/data";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {FAQS.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={faq.q}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
            className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-ink/5"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
            >
              <span className="font-heading text-lg sm:text-xl">{faq.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                  isOpen ? "bg-brand text-white" : "bg-brand-tint text-brand"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="px-6 pb-6 leading-relaxed text-ink/65 sm:px-8">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
