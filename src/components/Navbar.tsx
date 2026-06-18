import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NAV, SITE } from "../site";
import { Arrow, XLogo, Mail, Phone } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close drawer on route change
  useEffect(() => {
    setOpen(false);
    setProgramsOpen(false);
  }, [location.pathname]);

  // lock page scroll (and Lenis) + close on Escape while drawer is open
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop?: () => void; start?: () => void } }).__lenis;
    if (open) {
      document.body.style.overflow = "hidden";
      lenis?.stop?.();
    } else {
      document.body.style.overflow = "";
      lenis?.start?.();
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "bg-purple shadow-soft" : "bg-purple"
      }`}
    >
      <nav className="container-x flex h-[76px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/assets/logo-white.webp" alt="REHVAMP Foundation" className="h-11 w-auto" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.children ? (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setProgramsOpen(true)}
                onMouseLeave={() => setProgramsOpen(false)}
              >
                <button className="navlink flex items-center gap-1">
                  {item.label}
                  <span className="text-green">▾</span>
                </button>
                <AnimatePresence>
                  {programsOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full w-72 rounded-2xl border border-purple-100 bg-white p-2 shadow-soft"
                    >
                      {item.children.map((c) => (
                        <li
                          key={c.to}
                          className="relative"
                          onMouseEnter={() => "sub" in c && c.sub ? setSubOpen(c.label) : setSubOpen(null)}
                          onMouseLeave={() => setSubOpen(null)}
                        >
                          <Link
                            to={c.to}
                            className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-body transition-colors hover:bg-purple-50 hover:text-purple"
                          >
                            {c.label}
                            {"sub" in c && c.sub && (
                              <span className="ml-2 text-xs text-purple/50">▸</span>
                            )}
                          </Link>
                          {"sub" in c && c.sub && subOpen === c.label && (
                            <motion.ul
                              initial={{ opacity: 0, x: 8 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 8 }}
                              transition={{ duration: 0.15 }}
                              className="absolute left-full top-0 w-52 rounded-2xl border border-purple-100 bg-white p-2 shadow-soft"
                            >
                              {c.sub.map((s) => (
                                <li key={s.to}>
                                  <Link
                                    to={s.to}
                                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-body transition-colors hover:bg-purple-50 hover:text-purple"
                                  >
                                    {s.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) => `navlink ${isActive ? "!text-green" : ""}`}
                >
                  {item.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        <div className="hidden lg:block">
          <Link to="/get-involved" className="btn-primary">
            Donate Now <Arrow className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-white/20 transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Open menu"
        >
          <span className="h-0.5 w-5 rounded-full bg-white" />
          <span className="h-0.5 w-5 rounded-full bg-white" />
          <span className="h-0.5 w-5 rounded-full bg-white" />
        </button>
      </nav>

      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

/* ---------------------------------- Drawer ---------------------------------- */

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const topLevel = NAV.filter((n) => !n.children);
  const programs = NAV.find((n) => n.children);

  return (
    <>
      {/* backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      {/* panel */}
      <aside
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-[60] flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-purple text-white shadow-2xl transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
            {/* decorative glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green/20 blur-3xl" />

            {/* header */}
            <div className="relative flex items-center justify-between px-6 pb-2 pt-6">
              <img src="/assets/logo-white.webp" alt="REHVAMP Foundation" className="h-9 w-auto" />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            {/* links (CSS staggered reveal driven by `open`) */}
            <nav className="relative flex-1 px-6 py-4">
              {topLevel.map((item, i) => (
                <div
                  key={item.to}
                  style={{ transitionDelay: open ? `${120 + i * 55}ms` : "0ms" }}
                  className={`transition-all duration-300 ease-out ${
                    open ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
                  }`}
                >
                  <NavLink
                    to={item.to!}
                    end={item.to === "/"}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `group flex items-center justify-between border-b border-white/10 py-4 font-display text-3xl transition-colors ${
                        isActive ? "text-green" : "text-white hover:text-green"
                      }`
                    }
                  >
                    {item.label}
                    <Arrow className="h-5 w-5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </NavLink>
                </div>
              ))}

              {/* Programs group */}
              {programs?.children && (
                <div
                  style={{ transitionDelay: open ? `${120 + topLevel.length * 55}ms` : "0ms" }}
                  className={`py-4 transition-all duration-300 ease-out ${
                    open ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green">
                    {programs.label}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {programs.children.map((c) => (
                      <li key={c.to}>
                        <Link
                          to={c.to}
                          onClick={onClose}
                          className="block rounded-xl px-3 py-2.5 text-base font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {c.label}
                        </Link>
                        {"sub" in c && c.sub && (
                          <ul className="ml-4 mt-0.5 space-y-0.5 border-l border-white/15 pl-3">
                            {c.sub.map((s) => (
                              <li key={s.to}>
                                <Link
                                  to={s.to}
                                  onClick={onClose}
                                  className="block rounded-lg px-3 py-2 text-sm font-medium text-white/65 transition-colors hover:bg-white/10 hover:text-white"
                                >
                                  {s.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </nav>

            {/* footer: CTA + socials + contact */}
            <div className="relative border-t border-white/10 px-6 py-6">
              <Link to="/get-involved" onClick={onClose} className="btn-green w-full">
                Donate Now <Arrow className="h-4 w-4" />
              </Link>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href={SITE.socials.x}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-green hover:text-purple"
                >
                  <XLogo className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-5 space-y-2 text-sm text-white/75">
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 hover:text-white">
                  <Mail className="h-4 w-4 text-green" /> {SITE.email}
                </a>
                <a href={`tel:${SITE.phoneMobile.replace(/\s/g, "")}`} className="flex items-center gap-2.5 hover:text-white">
                  <Phone className="h-4 w-4 text-green" /> {SITE.phoneMobile}
                </a>
              </div>
            </div>
          </aside>
    </>
  );
}
