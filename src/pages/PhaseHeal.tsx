import { useRef, useState, type ReactNode } from "react";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Arrow, Check, Shield } from "../components/Icons";
import { submitToSheet, fileToBase64 } from "../lib/submitToSheet";

const FORM_STEPS = [
  "About You",
  "Your Baseline",
  "Progress & Reflection",
  "Evidence & Consent",
];

const HELPS_YOU = [
  "Break unhealthy digital habits",
  "Reduce mental overload",
  "Reclaim focus, sleep and peace of mind",
];

const WHAT_YOU_DO = [
  "Create phone-free zones",
  "Reduce night-time screen use",
  "Track screen time",
  "Pause before scrolling",
  "Build mindful digital routines",
];

const STEPS = [
  { n: "01", title: "Join", blurb: "Register through the submission form below." },
  { n: "02", title: "Track", blurb: "Log your daily habits and screen time." },
  { n: "03", title: "Upload", blurb: "Share screenshots as supporting evidence." },
  { n: "04", title: "Reflect", blurb: "Reflect honestly on your progress." },
];

const HEAL_PRACTICES = [
  "Phone-free zones",
  "No phone before bed",
  "Notifications turned off",
  "Charging phone outside the bedroom",
];

const SCREEN_TIMES = ["Under 2 hours", "2-4 hours", "4-6 hours", "6-8 hours", "Over 8 hours"];

const RULES = [
  "You must be 18 years or older to participate.",
  "Evidence (screenshots) must be authentic and your own.",
  "Progress is personal. Effort matters more than numbers.",
  "Be respectful in all community spaces.",
  "Your data is used only to run the challenge and is never sold.",
];

export default function PhaseHeal() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [step, setStep] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const lastStep = FORM_STEPS.length - 1;

  // Validate just the fields inside the current step before advancing.
  function validateStep(idx: number) {
    const fields = formRef.current?.querySelectorAll<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >(`[data-step="${idx}"] input, [data-step="${idx}"] select, [data-step="${idx}"] textarea`);
    if (!fields) return true;
    for (const f of Array.from(fields)) {
      if (!f.checkValidity()) {
        f.reportValidity();
        return false;
      }
    }
    return true;
  }

  function goTo(next: number) {
    setStep(next);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function nextStep() {
    if (validateStep(step)) goTo(Math.min(step + 1, lastStep));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Optional screenshot uploads → base64 (saved to Drive by Apps Script).
    const fileField = async (key: string) => {
      const f = fd.get(key);
      return f instanceof File && f.size > 0 ? await fileToBase64(f) : "";
    };

    setSubmitting(true);
    setError(false);
    try {
      const [baselineScreenshot, progressScreenshot, otherEvidence] =
        await Promise.all([
          fileField("baselineScreenshot"),
          fileField("progressScreenshot"),
          fileField("otherEvidence"),
        ]);

      await submitToSheet("challenge-heal", {
        fullName: fd.get("fullName"),
        email: fd.get("email"),
        ageRange: fd.get("ageRange"),
        city: fd.get("city"),
        focus: fd.get("focus"),
        motivation: fd.get("motivation"),
        baselineScreenTime: fd.get("baselineScreenTime"),
        practices: fd.getAll("practices"),
        consistency: fd.get("consistency"),
        currentScreenTime: fd.get("currentScreenTime"),
        reflection: fd.get("reflection"),
        baselineScreenshot,
        progressScreenshot,
        otherEvidence,
      });
      setSent(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <PageTransition>
      <Seo
        title="Phase I: Heal"
        description="Phase I: Heal of the REHVAMP Digital Well-Being Challenge. Register, track your screen time and build mindful digital habits."
      />
      <PageHero
        eyebrow="Digital Well-Being Challenge"
        title="Phase I: Heal"
        subtitle="This isn't about quitting social media. It's about using technology intentionally, breaking habits and reclaiming your focus."
        tone="teal"
      />

      {/* Welcome */}
      <section className="container-x py-16 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Phase I</p>
          <h2 className="mt-3 display-md">Welcome to Phase I: HEAL</h2>
          <p className="mt-4 text-lg text-body">Break habits. Reclaim focus. Find peace.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-purple-50 p-8">
              <h3 className="font-display text-2xl text-purple">This phase helps you:</h3>
              <ul className="mt-4 space-y-3">
                {HELPS_YOU.map((t) => (
                  <li key={t} className="flex gap-3 text-body">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-green" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-green-100 p-8">
              <h3 className="font-display text-2xl text-purple">What You'll Do:</h3>
              <ul className="mt-4 space-y-3">
                {WHAT_YOU_DO.map((t) => (
                  <li key={t} className="flex gap-3 text-body">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-purple" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How the HEAL Phase Works */}
      <section className="bg-purple-50 py-16 md:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">The process</p>
            <h2 className="mt-3 display-md">How the HEAL Phase Works</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-soft">
                  <span className="font-display text-5xl text-green">{s.n}</span>
                  <h3 className="mt-3 font-display text-2xl text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-body">{s.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Submission form */}
      <section className="container-x py-16 md:py-24">
        <Reveal className="mx-auto max-w-3xl">
          <div className="rounded-[2rem] border border-purple-100 bg-white p-6 shadow-soft sm:p-8 md:p-10">
            <p className="eyebrow">REHVAMP Reset</p>
            <h2 className="mt-2 display-md">Phase I: HEAL Submission Form</h2>

            {sent ? (
              <div className="mt-8 rounded-2xl bg-green-100 p-8 text-center">
                <h3 className="font-display text-3xl text-green-600">You're in! 🌿</h3>
                <p className="mt-2 text-body">
                  Welcome to the HEAL phase. Check your inbox for next steps and your
                  tracking sheet.
                </p>
              </div>
            ) : (
              <>
                {/* Step progress */}
                <div className="mt-7">
                  <div className="flex items-center justify-between">
                    {FORM_STEPS.map((label, i) => {
                      const done = i < step;
                      const active = i === step;
                      return (
                        <div key={label} className="flex flex-1 flex-col items-center">
                          <span
                            className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                              active
                                ? "bg-purple text-white"
                                : done
                                ? "bg-green text-purple"
                                : "bg-purple-50 text-purple/50"
                            }`}
                          >
                            {done ? <Check className="h-3.5 w-3.5" /> : i + 1}
                          </span>
                          <span
                            className={`mt-2 hidden text-center text-xs font-semibold sm:block ${
                              active ? "text-purple" : "text-body/60"
                            }`}
                          >
                            {label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-purple-50">
                    <div
                      className="h-full rounded-full bg-green transition-all duration-300"
                      style={{ width: `${((step + 1) / FORM_STEPS.length) * 100}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs font-semibold text-body/60 sm:hidden">
                    Step {step + 1} of {FORM_STEPS.length} · {FORM_STEPS[step]}
                  </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-8">
                  {/* Step 1, About You */}
                  <div data-step={0} className={step === 0 ? "space-y-10" : "hidden"}>
                    <FormSection n="1" title="Participant Information">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Full Name" required>
                          <input required name="fullName" className="input" placeholder="Your name" />
                        </Field>
                        <Field label="Email Address" required>
                          <input required name="email" type="email" className="input" placeholder="you@email.com" />
                        </Field>
                        <Field label="Age Range (Optional)">
                          <input name="ageRange" className="input" placeholder="e.g. 25-34" />
                        </Field>
                        <Field label="City / Location (Optional)">
                          <input name="city" className="input" placeholder="e.g. London, UK" />
                        </Field>
                      </div>
                    </FormSection>

                    <FormSection n="2" title="Intention & Motivation">
                      <Field label="What's your main digital-habit focus?" required>
                        <input required name="focus" className="input" placeholder="e.g. less night-time scrolling" />
                      </Field>
                      <Field label="Why are you joining the HEAL phase?">
                        <textarea name="motivation" rows={3} className="input resize-none" placeholder="Your motivation" />
                      </Field>
                    </FormSection>
                  </div>

                  {/* Step 2, Your Baseline */}
                  <div data-step={1} className={step === 1 ? "space-y-10" : "hidden"}>
                    <FormSection n="3" title="Baseline Digital Record">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Average daily screen time (before)" required>
                          <select required name="baselineScreenTime" className="input" defaultValue="">
                            <option value="" disabled>Select…</option>
                            {SCREEN_TIMES.map((t) => <option key={t}>{t}</option>)}
                          </select>
                        </Field>
                        <Field label="Upload a screenshot of your baseline screen time" required>
                          <input required name="baselineScreenshot" type="file" accept="image/*" className="file-input" />
                        </Field>
                      </div>
                    </FormSection>

                    <FormSection n="4" title="HEAL Actions Taken">
                      <p className="text-sm font-semibold text-ink">
                        Which HEAL practices did you actively use?
                      </p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {HEAL_PRACTICES.map((p) => (
                          <label key={p} className="flex items-start gap-3 rounded-xl border border-purple-100 p-3 text-sm text-body">
                            <input type="checkbox" name="practices" value={p} className="mt-0.5 h-4 w-4 accent-[#7BC950]" />
                            <span>{p}</span>
                          </label>
                        ))}
                      </div>
                      <Field label="How consistent were you?">
                        <select name="consistency" className="input" defaultValue="">
                          <option value="" disabled>Select…</option>
                          <option>Daily</option>
                          <option>Most days</option>
                          <option>Occasionally</option>
                        </select>
                      </Field>
                    </FormSection>
                  </div>

                  {/* Step 3, Progress & Reflection */}
                  <div data-step={2} className={step === 2 ? "space-y-10" : "hidden"}>
                    <FormSection n="5" title="Progress Tracking & Evidence">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Current daily screen time (now)">
                          <select name="currentScreenTime" className="input" defaultValue="">
                            <option value="" disabled>Select…</option>
                            {SCREEN_TIMES.map((t) => <option key={t}>{t}</option>)}
                          </select>
                        </Field>
                        <Field label="Upload a progress screenshot">
                          <input name="progressScreenshot" type="file" accept="image/*" className="file-input" />
                        </Field>
                      </div>
                    </FormSection>

                    <FormSection n="6" title="Reflection & Self-Control">
                      <Field label="What was hardest, and what helped?">
                        <textarea name="reflection" rows={3} className="input resize-none" placeholder="Reflect honestly on your struggles and strategies." />
                      </Field>
                    </FormSection>
                  </div>

                  {/* Step 4, Evidence & Consent */}
                  <div data-step={3} className={step === 3 ? "space-y-10" : "hidden"}>
                    <FormSection n="7" title="Supporting Evidence & Consent">
                      <Field label="Any other evidence you'd like to share (optional)">
                        <input name="otherEvidence" type="file" accept="image/*" className="file-input" />
                      </Field>
                      <div className="space-y-3 pt-2">
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

                    {error && (
                      <p className="text-sm font-semibold text-red-500">
                        Something went wrong submitting your entry. Please try again.
                      </p>
                    )}
                  </div>

                  {/* Step navigation */}
                  <div className="mt-10 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => goTo(Math.max(step - 1, 0))}
                      disabled={step === 0}
                      className="btn-outline disabled:invisible"
                    >
                      <Arrow className="h-4 w-4 rotate-180" /> Back
                    </button>

                    {step < lastStep ? (
                      <button type="button" onClick={nextStep} className="btn-primary">
                        Continue <Arrow className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-primary disabled:opacity-60"
                      >
                        {submitting ? "Submitting…" : "Submit & Begin"}{" "}
                        <Arrow className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </section>

      {/* Participant Rules */}
      <section className="bg-purple-50 py-16 md:py-24">
        <div className="container-x mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow">
              <Shield className="h-4 w-4" /> Participant Rules
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

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
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
