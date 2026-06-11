import { useState, type ReactNode } from "react";
import PageTransition from "../components/PageTransition";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Arrow, Check, Shield, Brain, Refresh, Moon } from "../components/Icons";

const BENEFITS = [
  { label: "Reduce mental overload", icon: Brain },
  { label: "Break automatic habits", icon: Refresh },
  { label: "Restore peace of mind", icon: Moon },
];

const STEPS = [
  { n: "01", title: "Join", blurb: "Sign up via the form below to register." },
  { n: "02", title: "Track", blurb: "Log your daily habits and screen time." },
  { n: "03", title: "Upload", blurb: "Share screenshots as supporting evidence." },
  { n: "04", title: "Reflect", blurb: "Reflect honestly on your progress." },
];

const HEAL_PRACTICES = [
  "Created phone-free zones",
  "Reduced night-time screen use",
  "Tracked my screen time daily",
  "Built a mindful morning/evening routine",
  "Turned off non-essential notifications",
  "Replaced scrolling with movement",
];

const SCREEN_TIMES = [
  "Under 2 hours",
  "2-4 hours",
  "4-6 hours",
  "6-8 hours",
  "Over 8 hours",
];

const RULES = [
  "You must be 18 years or older to participate.",
  "Evidence (screenshots) must be authentic and your own.",
  "Progress is personal, effort matters more than numbers.",
  "Be respectful in all community spaces.",
  "Your data is used only to run the challenge and is never sold.",
];

export default function PhaseHeal() {
  const [sent, setSent] = useState(false);

  return (
    <PageTransition>
      <PageHero
        eyebrow="Digital Well-Being Challenge"
        title="Phase 1: Heal"
        subtitle="This isn't about quitting social media. It's about using technology intentionally, breaking habits, and reclaiming your focus."
        tone="teal"
      />

      {/* Benefits */}
      <section className="container-x py-16 md:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Why heal first</p>
          <h2 className="mt-3 display-md">Reclaim your peace of mind</h2>
          <p className="mt-4 text-body">
            Progress is personal. Effort matters more than numbers.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.08}>
              <div className="flex items-center gap-3 rounded-2xl border border-purple-100 bg-white p-5">
                <b.icon className="h-6 w-6 shrink-0 text-green" />
                <span className="font-medium text-ink">{b.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="bg-purple-50 py-16 md:py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">How it works</p>
            <h2 className="mt-3 display-md">Four simple steps</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-soft">
                  <span className="font-display text-5xl text-green">{s.n}</span>
                  <h3 className="mt-3 font-display text-2xl text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-body">{s.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sign-up form */}
      <section className="container-x py-16 md:py-20">
        <Reveal className="mx-auto max-w-3xl">
          <div className="rounded-[2rem] border border-purple-100 bg-white p-6 shadow-soft sm:p-8 md:p-10">
            <p className="eyebrow">Join Phase 1</p>
            <h2 className="mt-2 display-md">Register your commitment</h2>
            <p className="mt-3 text-body">
              Takes about 5 minutes. Your honest answers help us support you
              through the Heal phase.
            </p>

            {sent ? (
              <div className="mt-8 rounded-2xl bg-green-100 p-8 text-center">
                <h3 className="font-display text-3xl text-green-600">
                  You're in! 🌿
                </h3>
                <p className="mt-2 text-body">
                  Welcome to the Heal phase. Check your inbox for next steps and
                  your tracking sheet.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="mt-8 space-y-10"
              >
                {/* About you */}
                <FormSection n="1" title="About you">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" required>
                      <input required className="input" placeholder="Your name" />
                    </Field>
                    <Field label="Email" required>
                      <input required type="email" className="input" placeholder="you@email.com" />
                    </Field>
                    <Field label="Age" required>
                      <input required type="number" min={18} className="input" placeholder="18+" />
                    </Field>
                    <Field label="Country / location">
                      <input className="input" placeholder="e.g. United Kingdom" />
                    </Field>
                  </div>
                </FormSection>

                {/* Focus */}
                <FormSection n="2" title="Your focus">
                  <Field label="Main digital-habit focus" required>
                    <input required className="input" placeholder="e.g. less night-time scrolling" />
                  </Field>
                  <Field label="What's your motivation for joining?">
                    <textarea rows={3} className="input resize-none" placeholder="Why are you joining the Heal phase?" />
                  </Field>
                </FormSection>

                {/* Baseline */}
                <FormSection n="3" title="Your baseline">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Average daily screen time (before)" required>
                      <select required className="input" defaultValue="">
                        <option value="" disabled>Select…</option>
                        {SCREEN_TIMES.map((t) => <option key={t}>{t}</option>)}
                      </select>
                    </Field>
                    <Field label="Baseline screenshot (Screen Time / Digital Wellbeing)">
                      <input type="file" accept="image/*" className="file-input" />
                    </Field>
                  </div>
                </FormSection>

                {/* HEAL practices */}
                <FormSection n="4" title="HEAL practices you've adopted">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {HEAL_PRACTICES.map((p) => (
                      <label key={p} className="flex items-start gap-3 rounded-xl border border-purple-100 p-3 text-sm text-body">
                        <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[#7BC950]" />
                        <span>{p}</span>
                      </label>
                    ))}
                  </div>
                  <Field label="How consistent have you been?">
                    <select className="input" defaultValue="">
                      <option value="" disabled>Select…</option>
                      <option>Every day</option>
                      <option>Most days</option>
                      <option>Some days</option>
                      <option>A few times</option>
                    </select>
                  </Field>
                </FormSection>

                {/* Progress */}
                <FormSection n="5" title="Your progress">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Current daily screen time (now)">
                      <select className="input" defaultValue="">
                        <option value="" disabled>Select…</option>
                        {SCREEN_TIMES.map((t) => <option key={t}>{t}</option>)}
                      </select>
                    </Field>
                    <Field label="Progress screenshot (optional)">
                      <input type="file" accept="image/*" className="file-input" />
                    </Field>
                  </div>
                  <Field label="What was hardest, and what helped?">
                    <textarea rows={3} className="input resize-none" placeholder="Reflect honestly on your struggles and strategies." />
                  </Field>
                </FormSection>

                {/* Consent */}
                <FormSection n="6" title="Commitment & consent">
                  <div className="space-y-3">
                    {[
                      "I'm 18 years or older.",
                      "The evidence I provide is authentic and my own.",
                      "I agree to the challenge's data & consent policy.",
                    ].map((c) => (
                      <label key={c} className="flex items-start gap-3 text-sm text-body">
                        <input required type="checkbox" className="mt-1 h-4 w-4 accent-[#7BC950]" />
                        <span>{c}</span>
                      </label>
                    ))}
                  </div>
                </FormSection>

                <button type="submit" className="btn-primary w-full">
                  Submit &amp; Begin <Arrow className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>

      {/* Rules & consent */}
      <section className="bg-purple-50 py-16 md:py-20">
        <div className="container-x mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow">
              <Shield className="h-4 w-4" /> Participant rules & consent
            </p>
            <h2 className="mt-3 display-md">The fine print, kept simple</h2>
            <ul className="mt-6 space-y-3">
              {RULES.map((r) => (
                <li key={r} className="flex gap-3 rounded-2xl bg-white p-4 text-body shadow-soft">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-green" />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

function FormSection({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <fieldset className="space-y-5">
      <legend className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple text-sm font-bold text-white">
          {n}
        </span>
        <span className="font-display text-2xl text-ink">{title}</span>
      </legend>
      {children}
    </fieldset>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-green"> *</span>}
      </span>
      {children}
    </label>
  );
}
