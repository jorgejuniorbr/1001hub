"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";

const genres = [
  "Techno",
  "House",
  "Deep House",
  "Melodic Techno / House",
  "Minimal",
  "Ambient / Downtempo",
  "Drum & Bass",
  "Afro House",
  "Progressive House",
  "Electronic / Other",
];

const countries = [
  "Brazil", "United States", "United Kingdom", "Germany", "France",
  "Netherlands", "Spain", "Italy", "Belgium", "Mexico", "Australia",
  "Sweden", "Portugal", "Argentina", "Japan", "South Korea", "Other",
];

interface FieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, required = false, children }: FieldProps) {
  return (
    <div className="grid gap-2">
      <label className="text-[10px] font-black uppercase tracking-[0.22em] text-white/40">
        {label}
        {required && <span className="ml-1 text-emerald-300">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-3.5 text-sm text-white placeholder-white/25 outline-none transition focus:border-emerald-300/40 focus:bg-white/[0.05]";

export function SubmitForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async — replace with real API call later
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <section className="bg-[#0b0b0d] py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-emerald-300/20 bg-emerald-300/[0.05] p-12 text-center">
            <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full border border-emerald-300/30 bg-emerald-300/10">
              <Check className="h-7 w-7 text-emerald-300" />
            </div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-emerald-300">
              Submission received
            </p>
            <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
              Your music has been submitted for curation.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg leading-8 text-white/[0.55]">
              Our team will review your track and contact you if approved.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-[#0b0b0d] py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} noValidate className="grid gap-5">
            {/* Row 1 */}
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Artist name" required>
                <input
                  required
                  type="text"
                  name="artistName"
                  placeholder="Your artist name"
                  className={inputClass}
                />
              </Field>
              <Field label="Email" required>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </Field>
            </div>

            {/* Row 2 */}
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="WhatsApp or Telegram">
                <input
                  type="text"
                  name="contact"
                  placeholder="+1 234 567 890"
                  className={inputClass}
                />
              </Field>
              <Field label="Instagram">
                <input
                  type="text"
                  name="instagram"
                  placeholder="@yourhandle"
                  className={inputClass}
                />
              </Field>
            </div>

            {/* Row 3 */}
            <Field label="Spotify artist profile URL" required>
              <input
                required
                type="url"
                name="spotifyUrl"
                placeholder="open.spotify.com/artist/..."
                className={inputClass}
              />
            </Field>

            <Field label="Track link" required>
              <input
                required
                type="url"
                name="trackLink"
                placeholder="SoundCloud, Spotify or private link"
                className={inputClass}
              />
            </Field>

            {/* Row 4 */}
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Music genre" required>
                <select
                  required
                  name="genre"
                  defaultValue=""
                  className={inputClass + " appearance-none cursor-pointer"}
                >
                  <option value="" disabled>
                    Select genre
                  </option>
                  {genres.map((g) => (
                    <option key={g} value={g} className="bg-[#0b0b0d]">
                      {g}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Country" required>
                <select
                  required
                  name="country"
                  defaultValue=""
                  className={inputClass + " appearance-none cursor-pointer"}
                >
                  <option value="" disabled>
                    Select country
                  </option>
                  {countries.map((c) => (
                    <option key={c} value={c} className="bg-[#0b0b0d]">
                      {c}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="City">
              <input
                type="text"
                name="city"
                placeholder="Berlin, São Paulo, Amsterdam..."
                className={inputClass}
              />
            </Field>

            <Field label="Message / notes to curators">
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your track, influences, or anything else relevant..."
                className={inputClass + " resize-none"}
              />
            </Field>

            {/* Notice */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 text-sm leading-6 text-white/[0.45]">
              By submitting, you confirm this is your original work and agree to our curation review process. We will contact you only if your track is approved.
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 text-[11px] font-black uppercase tracking-[0.22em] text-black shadow-[0_0_40px_rgba(255,255,255,0.08)] transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60 sm:text-[12px]"
            >
              {loading ? "Submitting..." : "Submit for Curation"}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
