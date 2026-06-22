"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  tall = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  tall?: boolean;
}) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden bg-night pt-20 ${
        tall ? "min-h-screen" : "min-h-[60vh]"
      }`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.65) 100%)" }} />
        </>
      )}
      <div className="container-site relative py-24 text-center text-white">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow-light"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="heading-xl mx-auto mt-4 max-w-4xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/75"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
