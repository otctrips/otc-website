"use client";

import { useState, useEffect } from "react";

export default function AppAnnouncementPopup() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    const close = () => setVisible(false);

    if (!visible) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-3 sm:px-4"
            onClick={close}
        >
            <div
                className="relative w-full max-w-2xl rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Left panel */}
                <div className="bg-[#4D8397] w-[58%] p-4 sm:w-80 sm:p-10">
                    <button
                        onClick={close}
                        className="absolute right-2 top-2 sm:right-4 sm:top-4 text-white text-base sm:text-xl leading-none z-10"
                    >
                        ✕
                    </button>
                    <div className="inline-block bg-white/20 text-white text-[9px] sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] px-3 py-1 sm:px-5 sm:py-2 rounded-full mb-2 sm:mb-4">
                        Coming Soon
                    </div>
                    <img
                        src="https://fybjvcnworlikfxfkeer.supabase.co/storage/v1/object/public/partners/myOTClogo.png"
                        alt="myOTC"
                        className="h-8 sm:h-14 w-auto mb-3 sm:mb-6"
                    />
                    <ul className="space-y-1.5 sm:space-y-3">
                        {[
                            { icon: "ti-map-pin", text: "Your entire trip in one app" },
                            { icon: "ti-credit-card", text: "Easy payments and balance tracking" },
                            { icon: "ti-bed", text: "Roommate and room selection" },
                            { icon: "ti-message-circle", text: "Group chats and shared photos" },
                            { icon: "ti-plus", text: "Much More" },
                        ].map((item) => (
                            <li key={item.text} className="flex items-center gap-1.5 sm:gap-3 text-[10px] leading-tight sm:text-sm sm:leading-normal text-white">
                                <span className="flex h-5 w-5 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
                                    <i className={`ti ${item.icon} text-white !text-[11px] sm:!text-[16px]`} aria-hidden="true" />
                                </span>
                                {item.text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right panel */}
                <div className="bg-[#4D8397] w-[42%] sm:w-[400px] relative">
                    <img
                        src="https://fybjvcnworlikfxfkeer.supabase.co/storage/v1/object/public/partners/myOTCphone.png"
                        alt="myOTC app"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}