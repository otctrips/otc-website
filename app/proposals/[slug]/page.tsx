"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

// ─── Types ────────────────────────────────────────────────────────────────────

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
  busPerPerson: number;
  dates: DateOption[];
};

type ProposalDB = {
  id: string;
  slug: string;
  group_name: string;
  destination: string;
  group_size: number;
  rooms: number;
  nights: number;
  tax_rate: number;
  message: string | null;
  currency: string | null;
};

// ─── Constants ────────────────────────────────────────────────────────────────

const BUS_PER_CITY: Record<string, number> = {
  Nashville: 155.55,
  Savannah: 88.59,
  Miami: 75.00,
  Austin: 65.00,
};

const CITY_TO_DESTINATION: Record<string, string> = {
  Nashville: "Nashville, TN",
  Savannah: "Savannah, GA",
  Miami: "Miami, FL",
  Austin: "Austin, TX",
};

function shortDateLabel(range: string): string {
  const m = range.match(/^([A-Za-z]+) (\d+)\s*[–-]\s*(\d+)/);
  if (!m) return range;
  return `${m[1].slice(0, 3)} ${m[2]}–${m[3]}`;
}

const INCLUSIONS = [
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

This Trip Services Agreement ("Agreement") is entered into between OTC Trips, LLC ("OTC Trips" or "Company") and the undersigned client organization ("Client") as of the date signed below.

1. SERVICES

OTC Trips agrees to coordinate and arrange the group travel services described in the accompanying proposal, which may include hotel accommodations, transportation, flights, event venues, payment collection, itinerary management, on-site support, and other related travel services. All services are subject to availability and final confirmation by the applicable third-party vendors at the time of booking.

OTC Trips acts solely as a travel coordinator and intermediary between the Client and third-party service providers. OTC Trips does not own, operate, or control hotels, airlines, transportation companies, venues, or other travel suppliers and is not responsible for their acts, omissions, service interruptions, schedule changes, or operational decisions.

Any services, pricing, accommodations, transportation, or amenities referenced in the proposal are subject to modification based on vendor availability, operational requirements, or circumstances beyond OTC Trips' reasonable control.

2. PAYMENT SCHEDULE

The Client agrees to make all payments in accordance with the payment schedule outlined in the proposal, invoice, or other written payment schedule provided by OTC Trips. Any payment designated as due upon signing shall be payable upon execution of this Agreement.

The Client acknowledges and agrees that OTC Trips may enter into contractual commitments with hotels, transportation providers, venues, airlines, and other vendors based upon the Client's authorization to proceed. As a result, all payments made pursuant to this Agreement shall be subject to the cancellation and refund provisions set forth herein.

The Client acknowledges and agrees that it is solely responsible for all amounts due under this Agreement, regardless of whether the Client collects funds from individual travelers or third parties. Any unpaid balances shall remain the responsibility of the Client organization.

Failure to make payments by the specified due dates may result in cancellation of reservations, forfeiture of deposits, additional fees imposed by third-party vendors, suspension of services, or cancellation of the trip without refund.

3. CANCELLATION POLICY

All cancellations are subject to the terms, conditions, penalties, and refund policies imposed by the applicable third-party vendors, including but not limited to hotels, transportation providers, airlines, venues, and other travel suppliers.

The Client acknowledges that OTC Trips may enter into non-refundable or partially refundable contractual commitments with third-party vendors on the Client's behalf. As a result, payments made under this Agreement may become non-refundable in whole or in part upon execution of vendor agreements, payment of deposits, or other financial commitments made by OTC Trips.

Any refunds issued by OTC Trips shall be limited to amounts recovered from third-party vendors, less any non-refundable deposits, administrative costs, processing fees, or expenses incurred by OTC Trips in connection with the trip.

Cancellation requests must be submitted in writing by an authorized representative of the Client organization. OTC Trips will make reasonable efforts to recover refundable amounts from third-party vendors but does not guarantee any refund unless and until such funds are received from the applicable vendor.

4. HEADCOUNT POLICY

The Client acknowledges that pricing, room blocks, transportation, venue arrangements, and other travel services are based upon the estimated group size provided to OTC Trips during the planning process.

The Client shall provide a final confirmed headcount by the deadline specified in the proposal, itinerary, or other written communication from OTC Trips. Changes to the group size after the final headcount deadline may be subject to vendor availability, pricing adjustments, additional fees, or cancellation penalties imposed by third-party vendors.

The Client acknowledges that reductions in group size may not reduce the total amount due under this Agreement if OTC Trips has already entered into contractual commitments on the Client's behalf. Any costs, penalties, or fees resulting from changes to the confirmed headcount shall be the responsibility of the Client.

OTC Trips does not guarantee the availability of additional rooms, transportation capacity, venue space, or other services requested after the final headcount deadline.

5. TRANSPORTATION LOGISTICS

Where transportation services, including commercial flights, charter transportation, shuttle services, ferries, rail travel, or other transportation arrangements are included in the trip, the Client shall provide all required traveler information by the deadlines established by OTC Trips and the applicable transportation providers.

The Client is responsible for ensuring that all traveler names, identification information, travel documents, and other required information are accurate and submitted on time. OTC Trips shall not be responsible for additional costs, penalties, denied boarding, or loss of reservations resulting from inaccurate, incomplete, or late-submitted traveler information.

Transportation schedules, routes, seating assignments, baggage allowances, and other transportation-related services are subject to the policies and operational decisions of the applicable transportation provider. OTC Trips is not responsible for delays, schedule changes, cancellations, mechanical issues, weather-related disruptions, labor disputes, or other events beyond its reasonable control.

Any fees, penalties, or additional costs imposed by transportation providers as a result of changes requested by the Client or its travelers shall be the responsibility of the Client.

6. CONDUCT POLICY

The Client shall be responsible for communicating all trip rules, policies, deadlines, and expectations to its travelers. All travelers are expected to comply with applicable laws and the policies of all hotels, transportation providers, venues, and other third-party vendors utilized during the trip.

OTC Trips reserves the right to remove, restrict, or deny participation in any portion of the trip to any traveler whose conduct is deemed unsafe, disruptive, illegal, abusive, or otherwise detrimental to the operation of the trip or the safety and enjoyment of others. No refund shall be provided for any services missed as a result of such removal or restriction.

The Client shall be responsible for any damages, fines, penalties, cleaning fees, or other charges imposed by third-party vendors as a result of the conduct of its travelers. OTC Trips reserves the right to pass through any such costs to the Client.

OTC Trips shall not be liable for any consequences arising from a traveler's failure to comply with applicable laws, venue policies, transportation requirements, identification requirements, age restrictions, or other vendor-imposed rules and regulations.

7. LIABILITY AND LIMITATIONS

OTC Trips acts solely as a coordinator and intermediary between the Client and third-party service providers, including but not limited to hotels, transportation providers, airlines, venues, tour operators, and other travel suppliers. OTC Trips does not own, operate, manage, or control any third-party service provider and shall not be liable for the acts, omissions, negligence, errors, service interruptions, schedule changes, cancellations, delays, or other actions of such providers.

The Client acknowledges that travel involves inherent risks, including but not limited to accidents, illness, injury, death, property damage, theft, transportation delays, weather-related disruptions, recreational activities, nightlife activities, excursions, and other unforeseen events. Participation in travel and trip-related activities is voluntary and undertaken at each traveler's own risk.

OTC Trips shall not be liable for any injury, illness, death, loss, damage, expense, or claim arising from the actions, conduct, negligence, recklessness, intoxication, or failure to exercise reasonable care by the Client or any traveler participating in the trip.

OTC Trips shall not be liable for any indirect, incidental, consequential, special, punitive, or exemplary damages arising out of or relating to this Agreement or the trip.

In no event shall OTC Trips' total liability arising out of or relating to this Agreement exceed the total amount actually paid by the Client directly to OTC Trips for the specific trip giving rise to the claim.

The Client agrees to indemnify, defend, and hold harmless OTC Trips, its owners, officers, employees, contractors, and representatives from and against any claims, damages, liabilities, losses, costs, or expenses, including reasonable attorneys' fees, arising out of or related to the actions, conduct, negligence, or misconduct of the Client or its travelers.

8. FORCE MAJEURE

OTC Trips shall not be liable for any delay, disruption, cancellation, modification, or failure to perform its obligations under this Agreement resulting from events beyond its reasonable control, including but not limited to acts of God, natural disasters, severe weather, hurricanes, floods, fires, pandemics, epidemics, government actions, travel restrictions, labor disputes, transportation disruptions, acts of terrorism, civil unrest, or other unforeseen circumstances.

In the event of a force majeure occurrence, OTC Trips shall make reasonable efforts to assist the Client in rescheduling services, obtaining credits, or recovering refundable amounts from third-party vendors. However, OTC Trips does not guarantee refunds, credits, or alternative arrangements, as such matters are subject to the policies and decisions of the applicable third-party vendors.

Any refunds, credits, or reimbursements resulting from a force majeure event shall be limited to amounts actually recovered from third-party vendors, less any non-refundable costs, fees, or expenses incurred by OTC Trips.

9. ENTIRE AGREEMENT

This Agreement, together with any proposal, invoice, itinerary, addendum, or other written document provided by OTC Trips and accepted by the Client, constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior negotiations, discussions, representations, and understandings, whether written or oral.

No modification, amendment, or waiver of any provision of this Agreement shall be effective unless made in writing and signed by both parties.

If any provision of this Agreement is determined to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.

The failure of either party to enforce any provision of this Agreement shall not be construed as a waiver of that provision or any other provision of this Agreement.

10. ELECTRONIC SIGNATURES

The parties agree that electronic signatures, digital signatures, and electronically transmitted copies of this Agreement shall be deemed original signatures and shall be fully binding and enforceable to the fullest extent permitted by law.

11. GOVERNING LAW AND VENUE

This Agreement shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law principles. Any legal action or proceeding arising out of or relating to this Agreement shall be brought exclusively in the state or federal courts located in Florida, and the parties hereby consent to the jurisdiction of such courts.

12. AUTHORIZED REPRESENTATIVE

The individual executing this Agreement on behalf of the Client represents and warrants that they are authorized to bind the Client organization to the terms of this Agreement. The Client shall remain fully responsible for all obligations arising under this Agreement regardless of any internal organizational approvals, membership changes, leadership transitions, or disputes regarding authority.

13. TRAVELER INFORMATION AND DOCUMENTATION

The Client and its travelers are solely responsible for obtaining and maintaining all required identification, passports, visas, travel authorizations, health documentation, and other documents required for participation in the trip. OTC Trips shall not be responsible for denied boarding, denied entry, missed departures, additional expenses, or other losses resulting from a traveler's failure to possess the required documentation or comply with applicable travel requirements.`;

// ─── Helpers ──────────────────────────────────────────────────────────────────

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
  const params = useParams();
  const slug = params.slug as string;

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [proposal, setProposal] = useState<ProposalDB | null>(null);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [existingSignature, setExistingSignature] = useState<{ full_name: string; signed_at: string } | null>(null);

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

  useEffect(() => {
    if (!slug) return;
    async function fetchData() {
      setLoading(true);

      const { data: proposalData, error: proposalError } = await supabase
        .from("proposals")
        .select("*")
        .eq("slug", slug)
        .single();

      if (proposalError || !proposalData) {
        setNotFound(true);
        setLoading(false);
        return;
      }
      setProposal(proposalData);

      const { data: sigRow } = await supabase
        .from("signatures")
        .select("full_name, signed_at")
        .eq("proposal_id", proposalData.id)
        .order("signed_at", { ascending: true })
        .limit(1)
        .maybeSingle();

      if (sigRow) {
        setExistingSignature(sigRow);
        setLoading(false);
        return;
      }

      const { data: hotelRows } = await supabase
        .from("hotels")
        .select("*")
        .eq("proposal_id", proposalData.id)
        .order("created_at", { ascending: true });

      const built: Hotel[] = [];
      for (const h of hotelRows ?? []) {
        const { data: dateRows } = await supabase
          .from("hotel_dates")
          .select("*")
          .eq("hotel_id", h.id)
          .order("created_at", { ascending: true });

        const parseDateRange = (range: string) => {
          const m = range.match(/^([A-Za-z]+ \d+)[^,]+,\s*(\d{4})/);
          if (!m) return 0;
          return new Date(`${m[1]}, ${m[2]}`).getTime();
        };

        const busPerPerson = BUS_PER_CITY[h.city] ?? 0;
        const cadConversion = proposalData.currency === "CAD" ? 0.73 : 1;
        const dates: DateOption[] = (dateRows ?? [])
          .map((d) => {
            const hotelTotal =
              Math.round(
                d.nightly_rate *
                  cadConversion *
                  (1 + proposalData.tax_rate) *
                  proposalData.nights *
                  proposalData.rooms *
                  100
              ) / 100;
            const pricePerPerson =
              Math.round((hotelTotal / proposalData.group_size + 20) * 100) / 100;
            const totalCost =
              Math.round(
                (pricePerPerson + busPerPerson) * proposalData.group_size * 100
              ) / 100;
            return {
              short: shortDateLabel(d.date_range),
              range: d.date_range,
              nights: proposalData.nights,
              note: d.note ?? "",
              pricePerPerson,
              totalCost,
            };
          })
          .sort((a, b) => parseDateRange(a.range) - parseDateRange(b.range));

        built.push({
          name: h.name,
          destination: CITY_TO_DESTINATION[h.city] ?? h.city,
          image: h.image_url,
          stars: h.stars,
          address: h.address,
          distance: h.distance,
          busPerPerson,
          dates,
        });
      }

      setHotels(built);
      setLoading(false);
    }
    fetchData();
  }, [slug]);

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

  async function handleConfirm() {
    if (!canConfirm || !proposal || !hotel || !dateOpt) return;

    const signedAt = new Date().toISOString();
    const totalPerPerson = dateOpt.pricePerPerson + hotel.busPerPerson;

    await supabase.from("signatures").insert({
      proposal_id: proposal.id,
      group_name: proposal.group_name,
      selected_hotel: hotel.name,
      selected_dates: dateOpt.range,
      hotel_per_person: dateOpt.pricePerPerson,
      bus_per_person: hotel.busPerPerson,
      total_per_person: totalPerPerson,
      total_cost: dateOpt.totalCost,
      full_name: fullName,
      signature: signature,
      signed_at: signedAt,
    });

    console.log("[handleConfirm] calling /api/notify-signature");
    try {
      const res = await fetch("/api/notify-signature", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          groupName: proposal.group_name,
          selectedHotel: hotel.name,
          selectedDates: dateOpt.range,
          totalPerPerson: new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(totalPerPerson),
          totalCost: new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(dateOpt.totalCost),
          fullName,
          signedAt: new Date(signedAt).toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" }),
        }),
      });
      const data = await res.json();
      console.log("[handleConfirm] notify-signature response:", res.status, data);
    } catch (err) {
      console.error("[handleConfirm] notify-signature fetch error:", err);
    }

    setConfirmed(true);
  }

  const DESTINATIONS = hotels.reduce<string[]>((acc, h) => {
    if (!acc.includes(h.destination)) acc.push(h.destination);
    return acc;
  }, []);

  const groupSize = proposal?.group_size ?? 0;
  const hotel = selectedHotel !== null ? hotels[selectedHotel] : null;
  const dateOpt = hotel && selectedDate !== null ? hotel.dates[selectedDate] : null;

  const totalCost = dateOpt ? dateOpt.totalCost : 0;

  const canConfirm = selectedHotel !== null && selectedDate !== null && agreed;

  // ── Loading ────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-night">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
      </div>
    );
  }

  // ── Not found ──────────────────────────────────────────────────────────────
  if (notFound || !proposal) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-night px-5 text-center">
        <h1 className="font-heading text-4xl font-bold text-white">Proposal not found</h1>
        <p className="mt-4 text-cream/60">This proposal link may have expired or doesn&apos;t exist.</p>
        <Link href="https://otctrips.com" className="mt-8 text-brand-light underline underline-offset-4">
          Return to OTC Trips
        </Link>
      </div>
    );
  }

  // ── Already signed ────────────────────────────────────────────────────────
  if (existingSignature) {
    const signedDate = new Date(existingSignature.signed_at).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-night px-5 text-center">
        <div className="max-w-lg">
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            This proposal has already been signed.
          </h1>
          <p className="mt-5 text-lg text-cream/60">
            Signed by <span className="font-semibold text-cream">{existingSignature.full_name}</span> on {signedDate}.
          </p>
          <p className="mt-4 text-sm text-cream/40">
            Questions? Reach out to us directly.
          </p>
          <a
            href="https://otctrips.com"
            className="mt-8 inline-block text-brand-light underline underline-offset-4"
          >
            Return to OTC Trips
          </a>
        </div>
      </div>
    );
  }

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
            <Link href="https://otctrips.com" className="font-heading text-2xl font-bold tracking-wide text-white">
              OTC <span className="text-brand-light">TRIPS</span>
            </Link>

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
                <span className="font-semibold text-cream">{proposal.group_name}</span>
              </motion.p>

              {/* Details bar */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.38 }}
                className="mt-10 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-cream/15 bg-white/5 px-6 py-3 text-sm backdrop-blur-sm"
              >
                <span className="font-medium text-cream/85">{proposal.destination}</span>
                <span className="text-cream/30">·</span>
                <span className="font-medium text-cream/85">{proposal.group_size} People</span>
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
              const destHotels = hotels
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
                    const activeDateData =
                      hotelActive && selectedDate !== null ? h.dates[selectedDate] : null;
                    const lowestDate = h.dates.reduce((a, b) =>
                      a.pricePerPerson < b.pricePerPerson ? a : b
                    );
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
                            className="object-cover object-bottom transition-transform duration-500 hover:scale-105"
                          />
                        </div>

                        {/* Card body */}
                        <div className="flex flex-1 flex-col px-6 pb-6 pt-4">

                          {/* Hotel name */}
                          <div className="flex items-start overflow-hidden mb-1">
                            <h3 className="font-heading text-xl font-bold text-ink">{h.name}</h3>
                          </div>

                          {/* Stars + distance + address */}
                          <div className="flex h-[52px] flex-col justify-start gap-1 overflow-hidden mt-0">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1.5">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#4D8397" stroke="#4D8397" strokeWidth="1.5">
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                <span className="text-sm font-semibold text-ink">4 Stars</span>
                              </div>
                              <span className="text-ink/25">·</span>
                              <span className="text-sm text-ink/60">{h.distance.split(" from ")[0]} from downtown</span>
                            </div>
                            <p className="text-sm text-ink/50">{h.address}</p>
                          </div>

                          {/* Price */}
                          <div className="flex h-[64px] items-center overflow-hidden border-t border-ink/10 mt-1">
                            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                              {!activeDateData && (
                                <span className="text-xs font-semibold uppercase tracking-widest text-ink/40">Starting At</span>
                              )}
                              <span className="font-heading text-3xl font-bold text-ink">
                                {fmt(displayData.pricePerPerson)}
                                <span className="ml-0.5 text-base font-normal text-ink/50">/person</span>
                              </span>
                              <span className="text-sm text-ink/45">
                                (Total: {fmt(displayData.totalCost)})
                              </span>
                            </div>
                          </div>

                          {/* Bus cost line */}
                          {h.busPerPerson > 0 && (
                          <div className="flex items-center gap-1.5 pb-3">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-ink/35">
                              <path d="M8 6v6M15 6v6M2 12h19.6M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
                              <circle cx="7" cy="18" r="2" />
                              <path d="M9 18h5" />
                              <circle cx="16" cy="18" r="2" />
                            </svg>
                            <span className="text-base text-ink/70">Charter Bus: +{fmt(h.busPerPerson)}/person</span>
                          </div>
                          )}

                          {/* Dates */}
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

                          {/* Select button */}
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

            {/* Cost breakdown — itemized */}
            <div className="py-5">
              {/* Column headers */}
              <div className="mb-1 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-ink/35">
                <span>Item</span>
                <div className="flex shrink-0 gap-4">
                  <span className="w-[88px] text-right">Per Person</span>
                  <span className="w-[100px] text-right">Total</span>
                </div>
              </div>

              {/* Hotel line item */}
              <div className="flex items-start justify-between gap-3 border-t border-ink/10 py-3">
                <div>
                  <p className="text-sm font-medium text-ink">Hotel</p>
                  {hotel && <p className="mt-0.5 text-xs text-ink/45">{hotel.name}</p>}
                </div>
                <div className="flex shrink-0 gap-4">
                  <p className="w-[88px] text-right font-semibold text-ink">
                    {dateOpt ? fmt(dateOpt.pricePerPerson) : "—"}
                  </p>
                  <p className="w-[100px] text-right font-semibold text-ink">
                    {dateOpt ? fmt(Math.round(dateOpt.pricePerPerson * groupSize * 100) / 100) : "—"}
                  </p>
                </div>
              </div>

              {/* Charter Bus line item */}
              {hotel && hotel.busPerPerson > 0 && (
              <div className="flex items-center justify-between gap-3 border-t border-ink/10 py-3">
                <p className="text-sm font-medium text-ink">Charter Bus</p>
                <div className="flex shrink-0 gap-4">
                  <p className="w-[88px] text-right font-semibold text-ink">
                    {fmt(hotel.busPerPerson)}
                  </p>
                  <p className="w-[100px] text-right font-semibold text-ink">
                    {fmt(Math.round(hotel.busPerPerson * groupSize * 100) / 100)}
                  </p>
                </div>
              </div>
              )}

              {/* Totals */}
              <div className="mt-1 space-y-3 border-t-2 border-ink/15 pt-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-ink/65">Total Per Person</p>
                  <p className="font-heading font-bold text-ink">
                    {dateOpt && hotel ? fmt(dateOpt.pricePerPerson + hotel.busPerPerson) : "—"}
                  </p>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-brand/10 px-4 py-3">
                  <p className="text-sm font-semibold text-ink">
                    Total Trip Cost
                    <span className="ml-1 font-normal text-ink/50">({groupSize} people)</span>
                  </p>
                  <p className="font-heading text-2xl font-bold text-brand">
                    {dateOpt ? fmt(totalCost) : "—"}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════ CONTACT ════════════════════════════════════ */}
      <section className="bg-[#4D8397] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-site">

          {/* Quote */}
          <p className="mx-auto max-w-2xl text-center text-xl italic leading-relaxed text-white sm:text-2xl">
            &ldquo;{proposal.message ?? "If you have any questions before signing, reach out directly."}&rdquo;
          </p>

          {/* Divider */}
          <div className="mx-auto mt-10 h-[2px] w-12 bg-white/30" />

          {/* Contact columns */}
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div className="grid grid-cols-2 gap-48 mx-auto">

            {/* Tyler */}
            <div className="flex flex-col items-start gap-3 text-left">
              <div>
                <p className="font-heading text-xl font-bold text-white">Tyler Daley</p>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-widest text-white/50">Co-Founder, Trip Operations</p>
              </div>
              <a href="tel:8139093784" className="flex items-center gap-2 text-white/80 transition-colors hover:text-white">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.07 19.79 19.79 0 0 1 1.61 4.44 2 2 0 0 1 3.6 2.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-sm">(813) 909-3784</span>
              </a>
              <a href="mailto:tylerdaley@otctrips.com" className="flex items-center gap-2 text-white/80 transition-colors hover:text-white">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-sm">tylerdaley@otctrips.com</span>
              </a>
            </div>

            {/* Michael */}
            <div className="flex flex-col items-end gap-3 text-right">
              <div>
                <p className="font-heading text-xl font-bold text-white">Michael Vita</p>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-widest text-white/50">Co-Founder, Client Relations</p>
              </div>
              <a href="tel:7044954614" className="flex items-center gap-2 text-white/80 transition-colors hover:text-white">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.07 19.79 19.79 0 0 1 1.61 4.44 2 2 0 0 1 3.6 2.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-sm">(704) 495-4614</span>
              </a>
              <a href="mailto:michaelvita@otctrips.com" className="flex items-center gap-2 text-white/80 transition-colors hover:text-white">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-sm">michaelvita@otctrips.com</span>
              </a>
            </div>

          </div>
          </div>

          {/* Footer note */}
          <p className="mt-14 text-center text-sm text-white/45">
            We are always available. Reach out directly and we will get back to you fast.
          </p>

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
            onClick={handleConfirm}
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
