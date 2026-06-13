import { useState, type ReactNode } from "react";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { SITE } from "../site";
import { Mail, Phone, Pin, Arrow } from "../components/Icons";
import { submitToSheet } from "../lib/submitToSheet";

const INQUIRY_TYPES = [
  "General Enquiry",
  "Become a Volunteer",
  "Become a Partner",
  "Media Enquiry",
  "Donation Enquiry",
  "Other",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSubmitting(true);
    setError(false);
    try {
      await submitToSheet("contact", {
        name: fd.get("name"),
        email: fd.get("email"),
        enquiryType: fd.get("enquiryType"),
        message: fd.get("message"),
      });
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <PageTransition>
      <Seo
        title="Contact Us"
        description="Get in touch with REHVAMP Foundation for volunteering, partnerships, media or general enquiries. We'd love to hear from you."
      />
      <PageHero
        title="Contact Us"
        subtitle="Let's heal, grow and inspire together. Questions, partnerships or just a hello, we'd love to hear from you."
      />

      <section className="container-x grid gap-12 py-16 md:py-20 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Details */}
        <Reveal>
          <h2 className="display-md">Get in touch</h2>
          <p className="mt-4 text-body">
            Reach out and a member of our team will get back to you as soon as
            we can.
          </p>
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple">
                <Pin className="h-6 w-6" />
              </span>
              <div>
                <p className="font-semibold text-ink">Address</p>
                <p className="text-sm text-body">{SITE.address}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple">
                <Mail className="h-6 w-6" />
              </span>
              <div>
                <p className="font-semibold text-ink">Email</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-purple hover:underline"
                >
                  {SITE.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple">
                <Phone className="h-6 w-6" />
              </span>
              <div>
                <p className="font-semibold text-ink">Phone</p>
                <p className="text-sm text-body">Mobile · {SITE.phoneMobile}</p>
                <p className="text-sm text-body">
                  Landline · {SITE.phoneLandline}
                </p>
              </div>
            </li>
          </ul>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border border-purple-100 bg-white p-8 shadow-soft md:p-10">
            {sent ? (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green">
                  <Arrow className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-display text-3xl text-ink">
                  Thank you!
                </h3>
                <p className="mt-2 text-body">
                  Your message is on its way. We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Field label="Name">
                  <input
                    required
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    name="email"
                    type="email"
                    className="input"
                    placeholder="you@email.com"
                  />
                </Field>
                <Field label="Type of Enquiry">
                  <div className="relative">
                    <select
                      required
                      name="enquiryType"
                      defaultValue=""
                      className="input w-full appearance-none pr-10 text-body"
                    >
                      <option value="" disabled className="text-body/50">
                        Select an option...
                      </option>
                      {INQUIRY_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-purple">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </div>
                </Field>
                <Field label="Message">
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="input resize-none"
                    placeholder="How can we help?"
                  />
                </Field>
                {error && (
                  <p className="text-sm font-semibold text-red-500">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send Message"}{" "}
                  <Arrow className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </span>
      {children}
    </label>
  );
}
