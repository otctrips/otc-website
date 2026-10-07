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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
            onClick={close}
        >
            <div
                className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Left panel */}
                <div className="bg-[#4D8397] w-80 p-10">
                    <button
                        onClick={close}
                        className="absolute right-4 top-4 text-white text-xl leading-none z-10"
                    >
                        ✕
                    </button>
                    <div className="inline-block bg-white/20 text-white text-sm font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-4">
                        Coming Soon
                    </div>
                    <img
                        src="https://fybjvcnworlikfxfkeer.supabase.co/storage/v1/object/public/partners/myOTClogo.png"
                        alt="myOTC"
                        className="h-14 w-auto mb-6"
                    />
                    <ul className="space-y-3">
                        {[
                            { icon: "ti-map-pin", text: "Your entire trip in one app" },
                            { icon: "ti-credit-card", text: "Easy payments and balance tracking" },
                            { icon: "ti-bed", text: "Roommate and room selection" },
                            { icon: "ti-message-circle", text: "Group chats and shared photos" },
                            { icon: "ti-plus", text: "Much More" },
                        ].map((item) => (
                            <li key={item.text} className="flex items-center gap-3 text-sm text-white">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
                                    <i className={`ti ${item.icon} text-white`} style={{ fontSize: 16 }} aria-hidden="true" />
                                </span>
                                {item.text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right panel */}
                <div className="bg-[#4D8397] w-[400px] relative">
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