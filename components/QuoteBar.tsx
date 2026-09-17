"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function QuoteBar() {
    const router = useRouter();
    const [destination, setDestination] = useState("");
    const [depart, setDepart] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [groupSize, setGroupSize] = useState("");

    const handleSubmit = () => {
        const params = new URLSearchParams();
        if (destination) params.set("destination", destination);
        if (depart) params.set("depart", depart);
        if (returnDate) params.set("return", returnDate);
        if (groupSize) params.set("groupSize", groupSize);
        router.push(`/get-a-quote?${params.toString()}`);
    };

    return (
        <div className="flex w-full items-center gap-0 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-5 py-2">
            <div className="flex flex-col flex-1 border-r border-white/20 px-4 py-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/60 text-center block">Destination</label>
                <input
                    type="text"
                    placeholder="Where do you want to go?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="bg-transparent text-sm font-semibold text-white placeholder-white/40 outline-none w-full text-center"
                />
            </div>
            <div className="flex flex-col border-r border-white/20 px-4 py-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/60 text-center block">Depart Date</label>
                <input
                    type="date"
                    value={depart}
                    onChange={(e) => setDepart(e.target.value)}
                    className="bg-transparent text-sm font-semibold text-white outline-none [color-scheme:dark]"
                />
            </div>
            <div className="flex flex-col border-r border-white/20 px-4 py-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/60 text-center block">Return Date</label>
                <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="bg-transparent text-sm font-semibold text-white outline-none [color-scheme:dark]"
                />
            </div>
            <div className="flex flex-col border-r border-white/20 px-4 py-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/60 text-center block">Group Size</label>
                <input
                    type="number"
                    min="1"
                    placeholder="# of people"
                    value={groupSize}
                    onChange={(e) => setGroupSize(e.target.value)}
                    className="bg-transparent text-sm font-semibold text-white placeholder-white/40 outline-none w-24 text-center"
                />
            </div>
            <button
                onClick={handleSubmit}
                className="ml-3 shrink-0 rounded-full bg-[#4D8397] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
            >
                Get a Quote
            </button>
        </div>
    );
}