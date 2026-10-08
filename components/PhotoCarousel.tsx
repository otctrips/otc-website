"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PHOTOS = [
    "/000090.jpg",
    "/000215.jpg",
    "/000312.jpg",
    "/000256.jpg",
    "/000247.jpg",
    "/000201.jpg",
    "/000175.jpg",
    "/000130.jpg",
    "/000390.jpg",
    "/000030.jpg",
    "/000013.jpg",
    "/000005.jpg",
];

export default function PhotoCarousel() {
    const [page, setPage] = useState(0);
    const [perPage, setPerPage] = useState(2);

    useEffect(() => {
        const updatePerPage = () => {
            const width = window.innerWidth;

            setPerPage(
                width >= 1280 ? 4 :
                    width >= 1024 ? 3 : 2
            );
            setPage(0);
        };

        updatePerPage();
        window.addEventListener("resize", updatePerPage);

        return () => window.removeEventListener("resize", updatePerPage);
    }, []);

    const totalPages = Math.ceil(PHOTOS.length / perPage);

    useEffect(() => {
        const timer = setInterval(() => {
            setPage((p) => (p + 1) % totalPages);
        }, 4000);

        return () => clearInterval(timer);
    }, [totalPages]);

    const visible = PHOTOS.slice(
        page * perPage,
        page * perPage + perPage
    );

    return (
        <section className="overflow-hidden pt-16 pb-0">
            <div className="mx-auto flex max-w-[1440px] flex-nowrap justify-center gap-3 px-4 sm:gap-5 sm:px-6">
                {visible.map((id) => (
                    <div
                        key={id}
                        className="relative aspect-[3/4] w-full max-w-[320px] min-w-0 overflow-hidden rounded-2xl"
                    >
                        <Image
                            src={id}
                            alt="OTC Trips"
                            fill
                            sizes="(max-width: 639px) 45vw, 320px"
                            className="object-cover object-center"
                        />
                    </div>
                ))}
            </div>

            <div className="mt-6 flex justify-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Go to photo page ${i + 1}`}
                        aria-current={i === page ? "true" : undefined}
                        onClick={() => setPage(i)}
                        className={`h-1.5 rounded-full transition-all ${i === page
                                ? "w-6 bg-brand"
                                : "w-1.5 bg-ink/20"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}