import { useState, type ReactNode } from "react";
import PageTransition from "../components/PageTransition";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { SITE } from "../site";
import { Mail, Phone, Pin, Arrow } from "../components/Icons";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageTransition>
      <PageHero
        title="Contact Us"
        subtitle="Let's heal, grow and inspire together. Questions, partnerships or just a hello, we'd love to hear from you."
      />

      <section className="container-x grid gap-12 py-16 md:py-20 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Details */}
        <Reveal>
          <h2 className="display-md">Get in touch</h2>
          <p className="mt-4 text-body">
            Reach out and a member of our team will get back to you as soon as we
            can.
          </p>
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal">
                <Pin className="h-6 w-6" />
              </span>
              <div>
                <p className="font-semibold text-ink">Address</p>
                <p className="text-sm text-body">{SITE.address}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal">
                <Mail className="h-6 w-6" />
              </span>
              <div>
                <p className="font-semibold text-ink">Email</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-teal hover:underline"
                >
                  {SITE.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal">
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
          <div className="rounded-[2rem] border border-teal-100 bg-white p-8 shadow-soft md:p-10">
            {sent ? (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
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
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <Field label="Name">
                  <input required type="text" className="input" placeholder="Your name" />
                </Field>
                <Field label="Email">
                  <input required type="email" className="input" placeholder="you@email.com" />
                </Field>
                <Field label="Message">
                  <textarea
                    required
                    rows={5}
                    className="input resize-none"
                    placeholder="How can we help?"
                  />
                </Field>
                <button type="submit" className="btn-primary w-full">
                  Send Message <Arrow className="h-4 w-4" />
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
      <span className="mb-1.5 block text-sm font-semibold text-ink">{label}</span>
      {children}
    </label>
  );
}
