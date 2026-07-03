"use client";

import { useState } from "react";
import Image from "next/image";

const PASSWORD = "otctrips2025";

const PROPOSALS = [
  { groupName: "PIKE", destination: "University of Central Florida", slug: "pikeucf" },
  { groupName: "PIKE", destination: "Binghamton University", slug: "bingpike" },
  { groupName: "AEPI", destination: "University of South Florida", slug: "aepiusf" },
  { groupName: "Lambda Chi", destination: "FSU", slug: "lambdachifsu" },
  { groupName: "Lambda Chi Alpha", destination: "Texas", slug: "lambdachitexas" },
  { groupName: "Alpha Sigma", destination: "University of Houston", slug: "asiguofh" },
  { groupName: "PIKE", destination: "Florida Tech", slug: "fltechpike" },
  { groupName: "FIJI", destination: "University of Florida", slug: "fijiuf" },
  { groupName: "Kappa Sigma", destination: "University of South Florida", slug: "kappasigusf" },
  { groupName: "Test Group", destination: "", slug: "test" },
];

export default function AllProposalsPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!unlocked) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-night px-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-8"
        >
          <h1 className="mb-6 text-center text-lg font-medium text-white">
            Enter Password
          </h1>
          <input
            type="password"
            autoFocus
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-light"
            placeholder="Password"
          />
          {error && (
            <p className="mt-3 text-sm text-red-400">Incorrect password.</p>
          )}
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-brand px-4 py-3 font-medium text-white transition-colors hover:bg-brand-dark"
          >
            Unlock
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-night px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 flex justify-center">
          <Image
            src="/logo.png"
            alt="OTC Trips"
            height={44}
            width={220}
            style={{ width: "auto", height: "44px" }}
            priority
          />
        </div>

        <h1 className="mb-8 text-center text-2xl font-semibold text-white">
          All Proposals
        </h1>

        <div className="space-y-3">
          {PROPOSALS.map((p) => (
            <a
              key={p.slug}
              href={`https://proposal.otctrips.com/${p.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-6 py-4 transition-colors hover:border-brand-light hover:bg-white/10"
            >
              <div>
                <p className="font-medium text-white">{p.groupName}</p>
                {p.destination && (
                  <p className="text-sm text-white/50">{p.destination}</p>
                )}
              </div>
              <span className="text-brand-light">&rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
