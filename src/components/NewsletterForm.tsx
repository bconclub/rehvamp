import { useState } from "react";
import { submitToSheet } from "../lib/submitToSheet";

// Newsletter sign-up used in two places:
//  - "full"    : home footer (first name, last name, email) — light inputs
//  - "compact" : blog sidebar (email only) — dark inputs on a purple card
export default function NewsletterForm({
  variant,
  source,
}: {
  variant: "full" | "compact";
  source: string;
}) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSubmitting(true);
    setError(false);
    try {
      await submitToSheet("newsletter", {
        firstName: fd.get("firstName") ?? "",
        lastName: fd.get("lastName") ?? "",
        email: fd.get("email"),
        source,
      });
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <p
        className={
          variant === "full"
            ? "rounded-xl bg-white/15 px-4 py-3 text-center font-semibold text-white sm:col-span-2"
            : "mt-4 rounded-xl bg-white/15 px-4 py-3 text-center text-sm font-semibold text-white"
        }
      >
        You're subscribed — thank you! 🌿
      </p>
    );
  }

  if (variant === "full") {
    return (
      <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
        <input
          name="firstName"
          className="input border-transparent"
          placeholder="First name"
        />
        <input
          name="lastName"
          className="input border-transparent"
          placeholder="Last name"
        />
        <input
          required
          name="email"
          className="input border-transparent sm:col-span-2"
          type="email"
          placeholder="Email address"
        />
        {error && (
          <p className="text-sm font-semibold text-green sm:col-span-2">
            Something went wrong — please try again.
          </p>
        )}
        <button
          disabled={submitting}
          className="btn-green disabled:opacity-60 sm:col-span-2"
        >
          {submitting ? "Signing up…" : "Sign Up"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
      <input
        required
        name="email"
        type="email"
        placeholder="you@email.com"
        className="rounded-xl bg-white/15 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-green"
      />
      {error && (
        <p className="text-sm font-semibold text-green">
          Something went wrong — please try again.
        </p>
      )}
      <button disabled={submitting} className="btn-green w-full disabled:opacity-60">
        {submitting ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}
