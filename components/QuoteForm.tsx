"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GROUP_SIZES, TRIP_TYPES } from "@/lib/data";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organization: "",
  tripType: "",
  destination: "",
  groupSize: "",
  startDate: "",
  endDate: "",
  notes: "",
};

export default function QuoteForm() {
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);

  const update =
    (field: keyof typeof initialState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // No backend yet, so log the lead and hand off to the thank-you page.
    console.log("Trip request:", form);
    router.push("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-ink/80">
          First Name *
        </label>
        <input
          id="firstName"
          required
          value={form.firstName}
          onChange={update("firstName")}
          placeholder="First name"
          className="input-field"
        />
      </div>
      <div>
        <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-ink/80">
          Last Name *
        </label>
        <input
          id="lastName"
          required
          value={form.lastName}
          onChange={update("lastName")}
          placeholder="Last name"
          className="input-field"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink/80">
          Email *
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={update("email")}
          placeholder="you@school.edu"
          className="input-field"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-ink/80">
          Phone *
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={form.phone}
          onChange={update("phone")}
          placeholder="(555) 555-5555"
          className="input-field"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="organization" className="mb-2 block text-sm font-semibold text-ink/80">
          Organization Name *
        </label>
        <input
          id="organization"
          required
          value={form.organization}
          onChange={update("organization")}
          placeholder="Chapter, org, or company"
          className="input-field"
        />
      </div>
      <div>
        <label htmlFor="tripType" className="mb-2 block text-sm font-semibold text-ink/80">
          Trip Type *
        </label>
        <select
          id="tripType"
          required
          value={form.tripType}
          onChange={update("tripType")}
          className="input-field"
        >
          <option value="" disabled>
            Select a trip type
          </option>
          {TRIP_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="groupSize" className="mb-2 block text-sm font-semibold text-ink/80">
          Estimated Group Size *
        </label>
        <select
          id="groupSize"
          required
          value={form.groupSize}
          onChange={update("groupSize")}
          className="input-field"
        >
          <option value="" disabled>
            Select a range
          </option>
          {GROUP_SIZES.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="destination" className="mb-2 block text-sm font-semibold text-ink/80">
          Destination
        </label>
        <input
          id="destination"
          value={form.destination}
          onChange={update("destination")}
          placeholder="Have somewhere in mind? Tell us. Not sure? That's fine too."
          className="input-field"
        />
      </div>
      <div>
        <label htmlFor="startDate" className="mb-2 block text-sm font-semibold text-ink/80">
          Travel Dates: From
        </label>
        <input
          id="startDate"
          type="date"
          value={form.startDate}
          onChange={update("startDate")}
          className="input-field"
        />
      </div>
      <div>
        <label htmlFor="endDate" className="mb-2 block text-sm font-semibold text-ink/80">
          Travel Dates: To
        </label>
        <input
          id="endDate"
          type="date"
          value={form.endDate}
          onChange={update("endDate")}
          className="input-field"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="notes" className="mb-2 block text-sm font-semibold text-ink/80">
          Anything else we should know?
        </label>
        <textarea
          id="notes"
          rows={4}
          value={form.notes}
          onChange={update("notes")}
          placeholder="Budget per person, the vibe you're going for, a referral name. Anything helps."
          className="input-field resize-none"
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full !py-4 !text-base disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send It Over"}
        </button>
        <p className="mt-4 text-center text-xs text-ink/40">
          No commitment, no spam. A real person reads every one of these.
        </p>
      </div>
    </form>
  );
}
