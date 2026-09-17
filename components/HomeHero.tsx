"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import QuoteBar from "@/components/QuoteBar";

export default function HomeHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-night">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/homepagevideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.65) 100%)" }} />

      <div className="container-site relative pt-32 pb-0 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-[0px] mb-[40px]"
        >
          <Image src="/out-the-chat.png" alt="OTC Trips" width={700} height={400} className="mx-auto" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-[120px] mb-[70px] flex w-full max-w-4xl mx-auto"
        >
          <QuoteBar />
        </motion.div>
      </div>
    </section>
  );
}