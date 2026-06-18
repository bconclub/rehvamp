import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { Phone, Check, Shield, Pin, Arrow, Heart } from "../components/Icons";
import { SITE } from "../site";

const SERVICES = [
  {
    icon: Pin,
    title: "Overland Route Planning",
    text: "Road transport coordination via cars and chartered vehicles to Oman and Saudi Arabia.",
  },
  {
    icon: Arrow,
    title: "Private Jets & Helicopter Airlift",
    text: "Emergency airlift via licensed private jets and helicopters to Oman and beyond, subject to airspace and CAA permissions.",
  },
  {
    icon: Check,
    title: "Emergency Visa Processing",
    text: "Urgent emergency visa facilitation for Oman, Saudi Arabia, Turkey and onward destinations through authorized channels.",
  },
  {
    icon: Pin,
    title: "Onward Travel Coordination",
    text: "From Riyadh or Muscat onward to Turkey, Europe and Asia Pacific.",
  },
  {
    icon: Shield,
    title: "Embassy Connection",
    text: "STEP/FCDO registration, embassy liaison and government repatriation coordination.",
  },
  {
    icon: Heart,
    title: "Stabilization & Shelter",
    text: "Temporary accommodation guidance, community support referrals and interim safety planning.",
  },
];

const ROUTES = [
  { title: "Overland to Saudi Arabia", tag: "Riyadh / Jeddah" },
  { title: "Overland / Private Jet / Helicopter to Oman", tag: "Muscat" },
  { title: "Onward to Turkey / Europe / Asia", tag: "Regional hubs" },
  {
    title: "Embassy Repatriation",
    tag: "FCDO · STEP",
    text: "Contact your embassy immediately. UK (FCDO), US (STEP), India and others coordinating evacuations via Saudi and Oman.",
  },
];

const PRIORITY = [
  { title: "Families", text: "Families with children receive immediate attention." },
  { title: "Medical Cases", text: "Individuals requiring medical support." },
  { title: "Vulnerable Individuals", text: "Those facing immediate safety risks." },
  { title: "Expats Without Support", text: "Foreign nationals without local networks." },
];

const STEPS = [
  { n: "01", title: "Contact Us", text: "Phone, contact form or email. 24 hours." },
  { n: "02", title: "Share Details", text: "Location, nationality, group size, urgent needs." },
  { n: "03", title: "Receive Guidance", text: "Personalized route, visa help, updates." },
  { n: "04", title: "Move Safely", text: "Travel only when safe and lawful." },
];

export default function EmergencyExit() {
  const tel = `tel:${SITE.phoneMobile.replace(/\s/g, "")}`;
  return (
    <PageTransition>
      <Seo
        title="Emergency Exit Guidance"
        description="Humanitarian coordination support during regional airspace disruptions. REHVAMP Foundation helps individuals and families find safe, lawful exit pathways."
      />
      {/* Hero */}
      <section className="bg-purple text-white">
        <div className="container-x py-16 md:py-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow text-green"
          >
            <Shield className="h-4 w-4" /> Humanitarian Support
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 max-w-3xl text-white display-lg"
          >
            Emergency Exit Guidance
          </motion.h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            Humanitarian coordination support during regional airspace
            disruptions. We help individuals and families find safe, lawful exit
            pathways by road, private jets, helicopters and emergency visa
            facilitation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href={tel} className="btn-green w-full sm:w-auto">
              <Phone className="h-4 w-4" /> Call 24/7
            </a>
            <span className="text-sm text-white/80 text-center sm:text-left">
              {SITE.phoneMobile}
            </span>
            <Link to="/emergency-exit-guidance/log" className="btn-ghost-white w-full sm:w-auto">
              View Activity Log <Arrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="container-x py-16 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">What we do</p>
          <h2 className="mt-3 display-md">A humanitarian bridge to safety</h2>
          <p className="mt-4 text-body">
            We are not a transport operator. We are a humanitarian bridge between
            fear and forward movement.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-purple-100 bg-white p-7 shadow-soft">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-body">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Your Route to Safety */}
      <section className="bg-purple-50 py-16 md:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Viable exit pathways</p>
            <h2 className="mt-3 display-md">Your Route to Safety</h2>
            <p className="mt-4 text-body">
              All movement must comply with local laws and official border
              permissions.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {ROUTES.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-soft">
                  <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple">
                    <Pin className="h-3.5 w-3.5" /> {r.tag}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-ink">{r.title}</h3>
                  {r.text && <p className="mt-2 text-sm text-body">{r.text}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Prioritize */}
      <section className="bg-green-100 py-16 md:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Who we prioritize</p>
            <h2 className="mt-3 display-md">Every Vulnerable Case First</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRIORITY.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-soft">
                  <h3 className="font-display text-2xl text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm text-body">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Four Steps to Safety */}
      <section className="container-x py-16 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">How it works</p>
          <h2 className="mt-3 display-md">Four Steps to Safety</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-purple-100 bg-white p-7 shadow-soft">
                <span className="font-display text-5xl text-green">{s.n}</span>
                <h3 className="mt-3 font-display text-2xl text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-body">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Current Regional Travel Situation */}
      <section className="bg-purple py-16 text-white md:py-20">
        <div className="container-x">
          <p className="eyebrow text-green">Current situation</p>
          <h2 className="mt-3 text-white display-md">Current Regional Travel Situation</h2>
          <p className="mt-3 max-w-2xl text-white/80">
            Regional aviation networks have largely resumed operations across the
            GCC. Airlines continue to monitor security developments and occasional
            airspace restrictions. Always verify flight status directly with your
            airline before departure.
          </p>

          {/* Per-country status cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                cc: "bh",
                name: "Bahrain",
                code: "BAH",
                status: "Operational",
                detail:
                  "Bahrain International Airport is operational and airspace has reopened. Commercial services are running, though some airlines may continue schedule adjustments.",
              },
              {
                cc: "ae",
                name: "United Arab Emirates",
                code: "DXB · AUH · SHJ",
                status: "Operational",
                detail:
                  "Dubai, Abu Dhabi, Sharjah and other UAE airports are operating. The GCAA has announced resumption of normal air traffic. Monitor airline advisories for route-specific changes.",
              },
              {
                cc: "sa",
                name: "Saudi Arabia",
                code: "RUH · JED · DMM",
                status: "Fully Operational",
                detail:
                  "Saudi Arabia remains a major regional transit and evacuation hub. Riyadh, Jeddah and Dammam have played an important role in maintaining regional connectivity throughout recent disruptions.",
              },
              {
                cc: "om",
                name: "Oman",
                code: "MCT",
                status: "Operational",
                detail:
                  "Muscat International Airport and Oman's network remain operational. A key gateway for onward connections across the Gulf, Europe, Asia and Africa.",
              },
              {
                cc: "qa",
                name: "Qatar",
                code: "DOH",
                status: "Operational",
                detail:
                  "Hamad International Airport is operational and airspace has reopened. Qatar Airways and other carriers are restoring and expanding schedules as conditions stabilize.",
              },
              {
                cc: "kw",
                name: "Kuwait",
                code: "KWI",
                status: "Operational",
                detail:
                  "Kuwait International Airport has resumed operations and airspace restrictions have eased significantly. Some carriers may still operate adjusted schedules.",
              },
            ].map((c) => (
              <div key={c.name} className="rounded-2xl bg-white/10 p-5">
                <div className="flex items-center justify-between">
                  <img
                    src={`https://flagcdn.com/w40/${c.cc}.png`}
                    srcSet={`https://flagcdn.com/w80/${c.cc}.png 2x`}
                    width={40}
                    height={27}
                    alt={c.name}
                    className="rounded-sm object-cover"
                  />
                  <span className="rounded-full bg-green/20 px-3 py-0.5 text-xs font-semibold text-green">
                    {c.status}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-xl text-white">{c.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  {c.code}
                </p>
                <p className="mt-2 text-sm text-white/75">{c.detail}</p>
              </div>
            ))}
          </div>

          {/* Assessment + Advisory + CTA */}
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="font-display text-2xl text-green">
                Rehvamp Foundation Assessment
              </h3>
              <p className="mt-3 text-sm text-white/85">
                Based on current transportation availability, the most viable
                regional transit hubs remain: Riyadh and Jeddah (Saudi Arabia)
                for onward international travel; Muscat (Oman) for regional
                coordination and international connections; Dubai and Abu Dhabi
                (UAE) for global commercial flight access; Doha (Qatar) for
                long-haul connections; Bahrain and Kuwait as increasingly stable
                transit options as regional operations normalize.
              </p>
              <p className="mt-4 text-sm font-semibold text-white">
                Important Advisory: While commercial aviation across the GCC has
                substantially recovered, the security environment remains dynamic.
                Verify flights directly with airlines, register with your embassy,
                confirm visa and transit requirements, and maintain contingency
                travel plans where possible.
              </p>
              <Link
                to="/blog/supporting-families-through-crisis"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green hover:gap-3 transition-all"
              >
                Read our full initiative report <Arrow className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="font-display text-2xl text-green">Reach Us Directly</h3>
              <p className="mt-3 text-sm text-white/85">
                If you or your family need guidance, contact us by phone. Our
                team operates 24 hours a day. All communication is confidential.
              </p>
              <a href={tel} className="btn-green mt-5 w-full">
                Request Emergency Assistance <Arrow className="h-4 w-4" />
              </a>
            </div>
          </div>

          <p className="mt-8 text-center font-display text-2xl text-white/90">
            Because survival is the beginning of renewal.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
