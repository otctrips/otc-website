"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AppAnnouncementPopup() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    const close = () => {
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
            onClick={close}
        >
            <div
                className="relative w-full max-w-md rounded-2xl bg-[#4D8397] p-10 text-center shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={close}
                    className="absolute right-4 top-4 text-white/60 hover:text-white text-xl leading-none"
                >
                    ✕
                </button>
                <Image
                    src="/myOTClogo.png"
                    alt="myOTC"
                    width={280}
                    height={120}
                    className="mx-auto"
                />
                <p className="mt-6 text-base text-white font-bold leading-relaxed">
                    Your group trips, all in one app. Itineraries, payments, room selections, group chat, and more.
                </p>
                <div className="mt-8 flex gap-3 justify-center">
                    <div className="flex items-center gap-2 bg-black/30 rounded-xl px-4 py-2.5">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                        <div className="text-left">
                            <div className="text-[9px] text-white/60 uppercase tracking-wider"></div>
                            <div className="text-sm font-semibold text-white">App Store</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-black/30 rounded-xl px-4 py-2.5">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M3.18 23.76c.3.17.64.24.99.18l12.5-12.5L13.06 8l-9.88 15.76zm17.64-10.98L17.9 11.3l-3.23 3.23 3.24 3.24 2.92-1.65c.83-.47.83-1.65 0-2.12l-.01-.02zM3.54.28C3.23.46 3 .82 3 1.26v21.5c0 .44.23.8.54.98l.12.07 12.04-12.04v-.28L3.66.21l-.12.07z" /></svg>
                        <div className="text-left">
                            <div className="text-[9px] text-white/60 uppercase tracking-wider"></div>
                            <div className="text-sm font-semibold text-white">Google Play</div>
                        </div>
                    </div>
                </div>
                <p className="mt-6 font-heading text-4xl font-bold text-white tracking-wide">
                    Coming Soon
                </p>
            </div>
        </div>
    );
}