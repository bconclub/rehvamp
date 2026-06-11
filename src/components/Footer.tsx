import { Link } from "react-router-dom";
import { SITE } from "../site";
import { Instagram, XLogo, Mail, Phone, Pin, Arrow } from "./Icons";

export default function Footer() {
  return (
    <footer className="mt-24 bg-purple-700 text-white/80">
      {/* CTA strip */}
      <div className="container-x">
        <div className="-mt-16 mb-16 rounded-3xl bg-gradient-to-br from-teal to-teal-600 px-8 py-12 text-center shadow-card md:px-16 md:py-16">
          <p className="eyebrow justify-center text-white/80">
            Be the change
          </p>
          <h2 className="mt-3 text-white display-md">
            Together, we REHVAMP the future
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Every contribution helps a child heal, grow and inspire. Join us as
            a donor, volunteer or partner today.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/get-involved" className="btn-green">
              Donate Now <Arrow className="h-4 w-4" />
            </Link>
            <Link to="/get-involved" className="btn-ghost-white">
              Become a Volunteer
            </Link>
          </div>
        </div>
      </div>

      <div className="container-x grid gap-12 pb-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img src="/assets/logo-white.webp" alt={SITE.name} className="h-12 w-auto" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            {SITE.mission}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-teal hover:bg-teal hover:text-white"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={SITE.socials.x}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-teal hover:bg-teal hover:text-white"
              aria-label="X (Twitter)"
            >
              <XLogo className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl text-white">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ["About Us", "/about"],
              ["Get Involved", "/get-involved"],
              ["Programs", "/save-gazas-children"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="transition-colors hover:text-teal-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl text-white">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <Pin className="mt-0.5 h-5 w-5 shrink-0 text-teal-200" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-teal-200" />
              <a href={`mailto:${SITE.email}`} className="hover:text-teal-200">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-teal-200" />
              <span>{SITE.phoneMobile}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-teal-200">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-teal-200">
              Terms &amp; Conditions
            </Link>
            <Link to="/admin" className="hover:text-teal-200">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
