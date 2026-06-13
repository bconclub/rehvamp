import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Small cookie-consent bar pinned to the bottom of every page. The choice is
// remembered in localStorage so it only shows until the visitor responds.
const STORAGE_KEY = "rehvamp.cookieConsent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // Brief delay so it eases in after the page settles.
        const t = setTimeout(() => setShow(true), 600);
        return () => clearTimeout(t);
      }
    } catch {
      /* ignore */
    }
  }, []);

  function choose(value: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-purple-100 bg-white p-4 shadow-card sm:inset-x-4 sm:bottom-4 sm:p-5"
    >
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-body">
          We use cookies to improve your experience and analyse site traffic. By
          clicking Accept, you agree to our use of cookies. Read our{" "}
          <Link
            to="/privacy-policy"
            className="font-semibold text-purple hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex w-full shrink-0 gap-3 sm:w-auto">
          <button
            onClick={() => choose("declined")}
            className="flex-1 rounded-full border border-purple-100 px-5 py-2 text-sm font-semibold text-purple transition-colors hover:bg-purple-50 sm:flex-none"
          >
            Decline
          </button>
          <button
            onClick={() => choose("accepted")}
            className="flex-1 rounded-full bg-green px-6 py-2 text-sm font-semibold text-purple transition-transform hover:scale-105 sm:flex-none"
          >
            Accept
          </button>
        </div>
      </div>
    </motion.div>
  );
}
