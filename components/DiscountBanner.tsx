"use client";

import { useState, useEffect } from "react";

export default function DiscountBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const target = new Date("2026-10-02T00:00:00");
    const calc = () => {
      const diff = target.getTime() - new Date().getTime();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const interval = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (dismissed) return null;

  return (
    <div className="bg-white text-[#4D8397] text-sm py-2.5 px-4 flex items-center justify-center gap-4 fixed inset-x-0 top-0 z-[60]">
      <p className="font-semibold">
        🔥 Book by October 2nd and save 10% on your trip —{" "}
        <span className="font-bold">
          {mounted ? `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s` : ""}
        </span>
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-4 text-[#4D8397]/60 hover:text-[#4D8397] text-lg leading-none"
      >
        
      </button>
    </div>
  );
}