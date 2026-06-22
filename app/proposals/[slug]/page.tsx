"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ─── Dummy data ───────────────────────────────────────────────────────────────

const PROPOSAL = {
  groupName: "Lambda Chi Alpha - FSU",
  destinations: "Nashville, TN & Savannah, GA",
  groupSize: 112,
};

type DateOption = {
  short: string;
  range: string;
  nights: number;
  note: string;
  pricePerPerson: number;
  totalCost: number;
};

type Hotel = {
  name: string;
  destination: string;
  image: string;
  stars: number;
  address: string;
  distance: string;
  description: string;
  inclusions: string[];
  dates: DateOption[];
};

const HOTELS: Hotel[] = [
  {
    name: "Holiday Inn & Suites Nashville Downtown Broadway",
    destination: "Nashville, TN",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop",
    stars: 3,
    address: "920 Broadway, Nashville, TN 37203",
    distance: "0.3 miles from Broadway",
    description:
      "Steps from Broadway and the heart of Nashville's live music scene, this hotel puts your group at the center of everything. Flexible spaces and attentive group service make it the top choice for large groups visiting Music City.",
    inclusions: [
      "Exclusive room block on Broadway",
      "Complimentary suite for trip organizers",
      "Dedicated group check-in lane",
      "Event space available for group functions",
      "Walking distance to all live music venues",
    ],
    dates: [
      { short: "Nov 6–8",   range: "November 6 – 8, 2025",    nights: 2, note: "Peak weekend",    pricePerPerson: 159.03, totalCost: 17811.36 },
      { short: "Nov 13–15", range: "November 13 – 15, 2025",  nights: 2, note: "Popular weekend",  pricePerPerson: 164.73, totalCost: 18449.76 },
      { short: "Nov 20–22", range: "November 20 – 22, 2025",  nights: 2, note: "Great value",      pricePerPerson: 147.63, totalCost: 16534.56 },
      { short: "Dec 11–13", range: "December 11 – 13, 2025",  nights: 2, note: "Low season rates", pricePerPerson: 141.93, totalCost: 15896.16 },
      { short: "Dec 14–16", range: "December 14 – 16, 2025",  nights: 2, note: "Best price",       pricePerPerson: 67.83,  totalCost: 7596.96  },
    ],
  },
  {
    name: "Fairfield Inn & Suites Savannah Downtown",
    destination: "Savannah, GA",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    stars: 3,
    address: "45 Westland Dr, Savannah, GA 31401",
    distance: "0.4 miles from River Street",
    description:
      "Located in Savannah's iconic Historic District, this Fairfield Inn puts your group steps from River Street, the riverfront, and Forsyth Park. Clean, comfortable rooms with complimentary breakfast and a staff that handles large group bookings with ease.",
    inclusions: [
      "Room block reserved in the Historic District",
      "Complimentary hot breakfast daily",
      "Dedicated group check-in coordination",
      "Walking distance to River Street and Forsyth Park",
      "Complimentary upgrade for trip organizer",
    ],
    dates: [
      { short: "Nov 6–8",   range: "November 6 – 8, 2025",   nights: 2, note: "Peak weekend",    pricePerPerson: 102.03, totalCost: 11427.36 },
      { short: "Nov 13–15", range: "November 13 – 15, 2025", nights: 2, note: "Popular weekend",  pricePerPerson: 107.73, totalCost: 12065.76 },
      { short: "Dec 11–13", range: "December 11 – 13, 2025", nights: 2, note: "Low season rates", pricePerPerson: 90.63,  totalCost: 10150.56 },
      { short: "Dec 14–16", range: "December 14 – 16, 2025", nights: 2, note: "Best price",       pricePerPerson: 79.23,  totalCost: 8873.76  },
    ],
  },
];

// Unique destinations in the order they appear in HOTELS
const DESTINATIONS = HOTELS.reduce<string[]>((acc, h) => {
  if (!acc.includes(h.destination)) acc.push(h.destination);
  return acc;
}, []);

const INCLUSIONS = [
  {
    label: "Group Air Coordination",
    sublabel: "Flights for the full group, everyone together",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    ),
  },
  {
    label: "Hotel Room Block",
    sublabel: "Reserved exclusively for your group",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
      </svg>
    ),
  },
  {
    label: "Charter Bus Transportation",
    sublabel: "Door-to-door group transit",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 6v6M15 6v6M2 12h19.6M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
        <circle cx="7" cy="18" r="2" />
        <path d="M9 18h5" />
        <circle cx="16" cy="18" r="2" />
      </svg>
    ),
  },
  {
    label: "On-Site Coordinator",
    sublabel: "Your point of contact the entire trip",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Individual Payment Collection",
    sublabel: "No organizer fronts any money",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    label: "24/7 Trip Support",
    sublabel: "A real person who answers at midnight",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.07 19.79 19.79 0 0 1 1.61 4.44 2 2 0 0 1 3.6 2.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

const CONTRACT_TEXT = `TRIP SERVICES AGREEMENT

This Trip Services Agreement ("Agreement") is entered into between OTC Trips, LLC ("OTC Trips" or "Company"), an independent affiliate of A.S.A.P. Cruises Inc., Florida Seller of Travel No. FST ST15578, and the undersigned client organization ("Client") as of the date signed below.

1. SERVICES

OTC Trips agrees to coordinate the group travel services described in this proposal, including hotel room block management, ground transportation coordination, group air logistics (where included), individual payment collection, on-site coordination, and trip support. All services are subject to availability at time of final booking confirmation.

2. PAYMENT SCHEDULE

A non-refundable deposit of 20% of the total trip cost is due within seven (7) days of executing this Agreement. This deposit confirms the room block, transportation holds, and other reservations on behalf of the Client. The remaining balance is due in three (3) equal installments on the dates specified in the payment schedule provided with this Agreement. Individual travelers will receive separate payment links with their own installment schedules. No single individual is responsible for the total group cost.

3. CANCELLATION POLICY

Cancellations received more than 90 days prior to the trip departure date will forfeit the initial deposit only. Cancellations received 60–89 days prior to departure will forfeit 40% of the total trip cost. Cancellations received 30–59 days prior to departure will forfeit 65% of the total trip cost. Cancellations received fewer than 30 days prior to departure will forfeit 100% of the total trip cost. Individual traveler name substitutions may be permitted subject to airline and hotel policies and will be accommodated at no additional charge up to 21 days before departure. OTC Trips reserves the right to pass through any cancellation fees imposed by third-party vendors (airlines, hotels, venues) that exceed the above schedule.

4. HEADCOUNT POLICY

The Client agrees to provide a confirmed headcount no later than 60 days prior to departure. Changes to headcount after this date are subject to availability and may result in rate adjustments. An increase in group size of more than 15% from the initial confirmed headcount may require renegotiation of room block terms. OTC Trips is not liable for any additional costs resulting from a decrease in headcount after the confirmation date.

5. FLIGHT LOGISTICS

Where group air coordination is included, OTC Trips will block seats on designated group-fare itineraries. Final passenger names and TSA-compliant identification information must be submitted by the name-submission deadline specified in the trip itinerary document. Late submission of passenger names may result in additional fees or loss of group airfare pricing. OTC Trips coordinates group air through its carrier partnerships and is not responsible for schedule changes, delays, or cancellations imposed by the airline, but will provide reasonable assistance in securing alternate arrangements.

6. CONDUCT POLICY

The Client and all individual travelers are expected to conduct themselves in a manner consistent with the policies of all hotels, venues, and transportation providers used during the trip. OTC Trips reserves the right to remove any individual from trip services for conduct that violates hotel policies, applicable laws, or the safety or comfort of others. No refund will be issued for removal due to misconduct. The Client organization (as the contracting party) acknowledges responsibility for communicating conduct expectations to all individual travelers participating in the trip.

7. LIABILITY AND LIMITATIONS

OTC Trips acts as an intermediary between the Client and third-party service providers (hotels, airlines, charter services, venues). OTC Trips is not liable for the acts, errors, omissions, or defaults of any third-party provider, nor for any injury, damage, loss, accident, delay, or irregularity that may occur due to defect of any vehicle or the negligence or default of any company or person engaged in carrying out the services. OTC Trips strongly recommends individual travel protection insurance for all travelers. Information regarding optional travel protection plans will be provided upon request.

8. FORCE MAJEURE

OTC Trips shall not be liable for failure to perform its obligations hereunder when such failure is caused by events beyond its reasonable control, including but not limited to acts of God, natural disasters, government actions, pandemics, terrorism, or other unforeseen events that make travel impractical or impossible. In such cases, OTC Trips will work in good faith to reschedule or recover deposits from third-party providers, but cannot guarantee full refunds where such costs have already been committed to vendors.

9. ENTIRE AGREEMENT

This Agreement, together with the proposal document provided to the Client, constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior negotiations, representations, warranties, and understandings of the parties. This Agreement may not be modified except by a written instrument signed by both parties. By signing below, the Client acknowledges that they have read, understood, and agree to be bound by all terms and conditions of this Agreement.

─────────────────────────────────────────────────
OTC Trips, LLC
An Independent Affiliate of A.S.A.P. Cruises Inc.
Florida Seller of Travel No. FST ST15578
California Seller of Travel No. 2090937-50`;

// ─── Helpers ─────────────────────────────────────────────────────────────────


function Check({ white = false, size = 14 }: { white?: boolean; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={white ? "white" : "#4D8397"}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const fmt = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProposalPage() {
  const [selectedHotel, setSelectedHotel] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [fullName, setFullName] = useState("");
  const [signature, setSignature] = useState("");
  const [todayStr, setTodayStr] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    setTodayStr(
      new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    );
  }, []);

  function selectHotel(idx: number) {
    if (selectedHotel !== idx) {
      setSelectedHotel(idx);
      setSelectedDate(null);
    }
  }

  function selectDate(hotelIdx: number, dateIdx: number) {
    if (selectedHotel !== hotelIdx) setSelectedHotel(hotelIdx);
    setSelectedDate(dateIdx);
  }

  const hotel = selectedHotel !== null ? HOTELS[selectedHotel] : null;
  const dateOpt = (hotel && selectedDate !== null) ? hotel.dates[selectedDate] : null;

  const totalCost    = dateOpt ? dateOpt.totalCost : 0;
  const deposit      = dateOpt ? Math.round(totalCost * 0.2  * 100) / 100 : 0;
  const remaining    = dateOpt ? Math.round((totalCost - deposit) * 100) / 100 : 0;
  const installment  = dateOpt ? Math.round((remaining / 3) * 100) / 100 : 0;
  const finalPayment = dateOpt ? Math.round((remaining - installment * 2) * 100) / 100 : 0;

  const canConfirm = selectedHotel !== null && selectedDate !== null && agreed;

  // ── Success state ──────────────────────────────────────────────────────────
  if (confirmed) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-night px-5 text-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
          className="max-w-lg"
        >
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-brand/20">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#4D8397" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Your trip is confirmed.
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-cream/70">
            We&apos;ll be in touch within 24 hours with next steps and your
            individual payment links.
          </p>
          <p className="mt-4 text-sm text-cream/40">Questions? Text or call us any time.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">

      {/* ════════════════════════ HERO ════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-night">
        <Image
          src="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=2000&auto=format&fit=crop"
          alt="Nashville skyline at night"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/50 via-night/50 to-night" />

        <div className="relative px-5 pb-20 pt-10 sm:px-8">
          <div className="mx-auto max-w-site">
            <div className="font-heading text-2xl font-bold tracking-wide text-white">
              OTC <span className="text-brand-light">TRIPS</span>
            </div>

            <div className="mt-16 text-center sm:mt-24">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="eyebrow-light"
              >
                Private Proposal
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1 }}
                className="mt-4 font-heading text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
              >
                Your Trip Proposal
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="mt-5 text-xl text-cream/65"
              >
                Built exclusively for{" "}
                <span className="font-semibold text-cream">{PROPOSAL.groupName}</span>
              </motion.p>

              {/* Details bar */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.38 }}
                className="mt-10 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-cream/15 bg-white/5 px-6 py-3 text-sm backdrop-blur-sm"
              >
                <span className="font-medium text-cream/85">{PROPOSAL.destinations}</span>
                <span className="text-cream/30">·</span>
                <span className="font-medium text-cream/85">{PROPOSAL.groupSize} People</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ HOTELS ══════════════════════════════════════ */}
      <section className="bg-cream px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-site">
          <div className="text-center">
            <p className="eyebrow">Step 1 of 2</p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-ink sm:text-5xl">
              Choose Your Hotel
            </h2>
            <p className="mt-4 text-lg text-ink/60">
              Options across two destinations, negotiated specifically for your group. Select the hotel that fits and pick your dates.
            </p>
          </div>

          {/* Hotels grouped by destination */}
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {DESTINATIONS.map((dest) => {
              const destHotels = HOTELS
                .map((h, i) => ({ h, i }))
                .filter(({ h }) => h.destination === dest);

              return (
                <div key={dest} className="flex flex-col gap-6">
                  {/* Destination label */}
                  <div className="flex items-center gap-5">
                    <div className="shrink-0">
                      <p className="eyebrow">Destination</p>
                      <h3 className="mt-1 font-heading text-2xl font-bold text-ink">{dest}</h3>
                    </div>
                    <div className="flex-1 border-t border-ink/15" />
                  </div>

                  {destHotels.map(({ h, i }) => {
                      const hotelActive = selectedHotel === i;
                      const activeDateData = hotelActive && selectedDate !== null ? h.dates[selectedDate] : null;
                      const lowestDate = h.dates.reduce((a, b) => a.pricePerPerson < b.pricePerPerson ? a : b);
                      const displayData = activeDateData ?? lowestDate;

                      return (
                        <motion.div
                          key={h.name}
                          initial={{ opacity: 0, y: 32 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                          className={`relative flex flex-1 flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 ${
                            hotelActive
                              ? "ring-2 ring-brand shadow-xl shadow-brand/15 -translate-y-1"
                              : "ring-1 ring-ink/8 hover:shadow-md hover:-translate-y-0.5"
                          }`}
                        >
                          {/* Selected check badge */}
                          <AnimatePresence>
                            {hotelActive && (
                              <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-brand shadow-md"
                              >
                                <Check white />
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Hotel image */}
                          <div className="relative h-52 overflow-hidden">
                            <Image
                              src={h.image}
                              alt={h.name}
                              fill
                              sizes="(max-width: 1024px) 100vw, 33vw"
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>

                          {/* Card body */}
                          <div className="flex flex-1 flex-col px-6 pb-6 pt-4">

                            {/* Hotel name — min-h-[64px], bottom-aligned so stars row always follows immediately */}
                            <div className="flex min-h-[64px] items-start overflow-hidden">
                              <h3 className="font-heading text-xl font-bold text-ink">{h.name}</h3>
                            </div>

                            {/* Stars + distance + address — h-[52px], 4px gap between lines */}
                            <div className="flex h-[52px] flex-col justify-start gap-1 overflow-hidden mt-0">
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1.5">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#4D8397" stroke="#4D8397" strokeWidth="1.5">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                  <span className="text-sm font-semibold text-ink">4 Stars</span>
                                </div>
                                <span className="text-ink/25">·</span>
                                <span className="text-sm text-ink/60">{h.distance}</span>
                              </div>
                              <p className="text-sm text-ink/50">{h.address}</p>
                            </div>

                            {/* Price — h-[64px] with border, vertically centered */}
                            <div className="flex h-[64px] items-center overflow-hidden border-t border-ink/10">
                              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                                <span className="font-heading text-3xl font-bold text-ink">
                                  {fmt(displayData.pricePerPerson)}
                                  <span className="ml-0.5 text-base font-normal text-ink/50">/person</span>
                                </span>
                                <span className="text-sm text-ink/45">
                                  (Total: {fmt(displayData.totalCost)})
                                </span>
                              </div>
                            </div>

                            {/* Dates — min-h-[120px] with border */}
                            <div className="min-h-[120px] border-t border-ink/10 pt-4">
                              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-ink/40">
                                Available Dates
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {h.dates.map((d, di) => {
                                  const dateActive = hotelActive && selectedDate === di;
                                  return (
                                    <motion.button
                                      key={d.short}
                                      whileTap={{ scale: 0.95 }}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        selectDate(i, di);
                                      }}
                                      className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                        dateActive
                                          ? "bg-brand text-white shadow-sm shadow-brand/25"
                                          : "bg-ink/5 text-ink/65 hover:bg-brand/10 hover:text-brand"
                                      }`}
                                    >
                                      <span>{d.short}</span>
                                      <span
                                        className={`ml-1.5 text-xs ${
                                          dateActive ? "text-white/70" : "text-ink/35 group-hover:text-brand/60"
                                        }`}
                                      >
                                        · {d.note}
                                      </span>
                                    </motion.button>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Select button — mt-auto pins to bottom */}
                            <div className="mt-auto pt-4">
                              <motion.button
                                whileTap={{ scale: 0.97 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  selectHotel(i);
                                }}
                                className={`w-full rounded-full py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-300 ${
                                  hotelActive
                                    ? "bg-brand text-white"
                                    : "border-2 border-brand text-brand hover:bg-brand hover:text-white"
                                }`}
                              >
                                {hotelActive ? "Selected ✓" : "Select This Hotel"}
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════ WHAT'S INCLUDED ════════════════════════════ */}
      <section className="bg-night px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-site">
          <div className="text-center">
            <p className="eyebrow-light">Everything handled</p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-white sm:text-5xl">
              What&apos;s Included In Your Trip
            </h2>
            <p className="mt-4 text-lg text-cream/55">
              From the moment you book to the moment you get home.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUSIONS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-cream/10 bg-white/5 p-7"
              >
                <div className="text-brand-light">{item.icon}</div>
                <h3 className="mt-4 font-heading text-lg font-bold text-white">{item.label}</h3>
                <p className="mt-1.5 text-sm text-cream/50">{item.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ PRICING SUMMARY ════════════════════════════ */}
      <section className="bg-cream px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-site">
          <div className="text-center">
            <p className="eyebrow">Summary</p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-ink sm:text-5xl">
              Your Trip Summary
            </h2>
            <p className="mt-4 text-lg text-ink/60">
              Updates as you make your selections above.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-2xl rounded-3xl bg-white p-8 shadow-sm shadow-ink/5 sm:p-10">
            {/* Hotel row */}
            <div className="flex items-start justify-between gap-4 border-b border-ink/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/40">Hotel</p>
                <p className={`mt-1 font-heading text-lg font-bold transition-colors ${hotel ? "text-ink" : "text-ink/25"}`}>
                  {hotel ? hotel.name : "—"}
                </p>
              </div>
              {hotel && (
                <span className="shrink-0 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  Selected
                </span>
              )}
            </div>

            {/* Dates row */}
            <div className="flex items-start justify-between gap-4 border-b border-ink/10 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/40">Dates</p>
                <p className={`mt-1 font-heading text-lg font-bold transition-colors ${dateOpt ? "text-ink" : "text-ink/25"}`}>
                  {dateOpt ? dateOpt.range : "—"}
                </p>
              </div>
              {dateOpt && (
                <span className="shrink-0 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  {dateOpt.nights} nights
                </span>
              )}
            </div>

            {/* Cost breakdown */}
            <div className="space-y-4 py-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-ink/60">Price per person</p>
                <p className="font-heading font-bold text-ink">
                  {dateOpt ? fmt(dateOpt.pricePerPerson) : "—"}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-ink/60">Group size</p>
                <p className="font-heading font-bold text-ink">{PROPOSAL.groupSize} people</p>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-brand/10 px-4 py-3">
                <p className="text-sm font-semibold text-ink">Total cost</p>
                <p className="font-heading text-2xl font-bold text-brand">
                  {dateOpt ? fmt(totalCost) : "—"}
                </p>
              </div>
            </div>

            {/* Payment schedule */}
            <div className="rounded-xl border border-ink/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink/40">
                Payment Schedule
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-ink/65">
                    Deposit due now <span className="text-ink/40">(20%)</span>
                  </p>
                  <p className="font-semibold text-ink">{dateOpt ? fmt(deposit) : "—"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-ink/65">Installment 1</p>
                  <p className="font-semibold text-ink">{dateOpt ? fmt(installment) : "—"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-ink/65">Installment 2</p>
                  <p className="font-semibold text-ink">{dateOpt ? fmt(installment) : "—"}</p>
                </div>
                <div className="flex items-center justify-between border-t border-ink/10 pt-3">
                  <p className="text-sm text-ink/65">Final payment</p>
                  <p className="font-semibold text-ink">{dateOpt ? fmt(finalPayment) : "—"}</p>
                </div>
              </div>
              {!dateOpt && (
                <p className="mt-4 text-center text-xs text-ink/35">
                  Select a hotel and dates above to see your payment breakdown
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ CONTRACT ═══════════════════════════════════ */}
      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-site">
          <div className="text-center">
            <p className="eyebrow">Step 2 of 2</p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-ink sm:text-5xl">
              Review Your Contract
            </h2>
            <p className="mt-4 text-lg text-ink/60">
              Read through the terms below before locking in your trip.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-3xl">
            <div className="rounded-2xl border border-ink/10 bg-cream/40 p-6 sm:p-8">
              {/* Scrollable contract */}
              <div
                className="max-h-96 overflow-y-auto rounded-xl bg-white p-6 text-sm leading-relaxed text-ink/65 sm:p-8"
                style={{ scrollbarWidth: "thin" }}
              >
                <pre className="whitespace-pre-wrap font-sans">{CONTRACT_TEXT}</pre>
              </div>

              {/* Agree checkbox */}
              <label className="mt-6 flex cursor-pointer items-start gap-3">
                <div className="mt-0.5 h-5 w-5 shrink-0">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="sr-only"
                  />
                  <motion.div
                    animate={agreed ? { scale: [1, 1.15, 1] } : {}}
                    transition={{ duration: 0.25 }}
                    className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-all duration-200 ${
                      agreed ? "border-brand bg-brand" : "border-ink/25 bg-white"
                    }`}
                  >
                    {agreed && <Check white />}
                  </motion.div>
                </div>
                <span className="text-sm leading-relaxed text-ink/70">
                  I have read and agree to the terms and conditions above
                </span>
              </label>
            </div>

            {/* Name / Date fields */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink/45">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your full name"
                  className="input-field"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink/45">
                  Date
                </label>
                <input
                  type="text"
                  value={todayStr}
                  readOnly
                  className="w-full cursor-default rounded-lg border border-ink/10 bg-ink/[0.03] px-4 py-3 text-ink/55"
                />
              </div>
            </div>

            {/* Signature field */}
            <div className="mt-5">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink/45">
                Signature — type your name to sign
              </label>
              <input
                type="text"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                placeholder="Type your name here to generate your signature"
                className="input-field"
              />
              <AnimatePresence>
                {signature && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -8, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 rounded-xl border border-brand/20 bg-brand/5 px-5 py-4">
                      <p className="mb-2 text-xs text-ink/35">Signature preview</p>
                      <p
                        className="text-4xl text-ink/75"
                        style={{ fontFamily: "var(--font-dancing)" }}
                      >
                        {signature}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ CONFIRM ════════════════════════════════════ */}
      <section className="bg-night px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-site">
          <AnimatePresence>
            {!canConfirm && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mb-5 text-center text-sm text-cream/35"
              >
                {selectedHotel === null
                  ? "Select a hotel and dates to continue"
                  : selectedDate === null
                    ? "Pick your dates inside the hotel card to continue"
                    : "Agree to the contract terms to continue"}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            whileTap={canConfirm ? { scale: 0.985 } : {}}
            onClick={() => canConfirm && setConfirmed(true)}
            disabled={!canConfirm}
            className={`w-full rounded-full py-5 font-heading text-lg font-bold uppercase tracking-widest transition-all duration-300 ${
              canConfirm
                ? "cursor-pointer bg-brand text-white shadow-lg shadow-brand/30 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/40"
                : "cursor-not-allowed bg-white/10 text-white/25"
            }`}
          >
            Lock In My Trip
          </motion.button>
        </div>
      </section>

    </div>
  );
}
