import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { Arrow, Shield, Check } from "../components/Icons";
import { IMG } from "../images";

const LOG_ENTRIES = [
  {
    date: "Jun 2026",
    tag: "Current Status",
    title: "All GCC Countries Operational",
    body: "Regional aviation networks across the Gulf have substantially recovered. Bahrain, UAE, Saudi Arabia, Oman, Qatar and Kuwait are all operational and available as part of lawful regional travel and humanitarian movement planning. Conditions continue to improve.",
    type: "update",
  },
  {
    date: "May 2026",
    tag: "Stabilization Support",
    title: "Shelter & Welfare Coordination",
    body: "Through our humanitarian network, we helped connect stranded individuals and families with temporary accommodation guidance, community support referrals, welfare resources and family-focused stabilization support while awaiting onward travel arrangements.",
    type: "activity",
  },
  {
    date: "May 2026",
    tag: "Embassy & Repatriation",
    title: "Government Programme Liaison",
    body: "Coordinated embassy registration, consular communication and government repatriation programmes for multiple nationalities. Assisted with UK FCDO registration, US STEP enrollment and official evacuation updates, ensuring travelers remained connected to national authorities.",
    type: "activity",
  },
  {
    date: "Apr 2026",
    tag: "Visa Assistance",
    title: "Emergency Visa Processing Support",
    body: "Provided guidance on emergency visa options, entry requirements, transit regulations and required documentation for travelers seeking lawful entry through Oman, Saudi Arabia, Turkey and onward destinations via authorized channels.",
    type: "activity",
  },
  {
    date: "Apr 2026",
    tag: "Aviation Coordination",
    title: "Private Aviation & Helicopter Transfers",
    body: "For urgent humanitarian situations involving vulnerable individuals and medical cases, assisted with information and coordination regarding licensed private aviation services. All aviation support coordinated through licensed providers subject to applicable government regulations and aviation authority approvals.",
    type: "activity",
  },
  {
    date: "Mar 2026",
    tag: "Route Planning",
    title: "Safe Travel Guidance Established",
    body: "Deployed guidance on lawful travel options and regional transit pathways including overland routes into Saudi Arabia via Riyadh and Jeddah, coordination into Oman through Muscat, connections through key GCC transit hubs and onward pathways to Turkey, Europe and Asia-Pacific.",
    type: "activity",
  },
  {
    date: "Mar 2026",
    tag: "Initiative Launch",
    title: "Emergency Exit Guidance Initiative Activated",
    body: "Regional airspace disruptions prompted activation of the Emergency Exit Guidance Initiative. Rehvamp Foundation deployed humanitarian coordination support to help individuals and families find safe, lawful exit pathways. A four-step support process was established: Contact, Share Details, Receive Guidance, Move Safely.",
    type: "launch",
  },
];

const STATS = [
  { value: "6", label: "GCC countries covered" },
  { value: "4", label: "Exit pathway types" },
  { value: "24/7", label: "Support availability" },
  { value: "100%", label: "Lawful coordination" },
];

export default function EmergencyExitLog() {
  return (
    <PageTransition>
      <Seo
        title="Emergency Exit Activity Log"
        description="A log of REHVAMP Foundation's Emergency Exit Guidance activity, updates and regional travel situation reports."
      />
      {/* Hero */}
      <section className="relative min-h-[420px] overflow-hidden">
        <img
          src={IMG.emergencyExit.hero}
          alt="Emergency Exit Guidance Initiative"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-purple/75" />
        <div className="relative container-x py-20 md:py-28">
          <p className="eyebrow text-green">
            <Shield className="h-4 w-4" /> Emergency Exit Guidance
          </p>
          <h1 className="mt-4 max-w-3xl text-white display-lg">
            Initiative Activity Log
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            A transparent record of Rehvamp Foundation's humanitarian coordination
            response during regional airspace disruptions across the Gulf.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/emergency-exit-guidance" className="btn-green">
              Live Guidance <Arrow className="h-4 w-4" />
            </Link>
            <Link
              to="/blog/supporting-families-through-crisis"
              className="btn-ghost-white"
            >
              Read Full Report
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-100 py-10">
        <div className="container-x grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((s) => (
            <Reveal key={s.label}>
              <div className="text-center">
                <p className="font-display text-4xl text-purple">{s.value}</p>
                <p className="mt-1 text-sm text-body">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline Log */}
      <section className="container-x py-16 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display-md text-ink">Activity Timeline</h2>
          <p className="mt-3 text-body">
            A chronological record of actions taken throughout the initiative.
          </p>
        </Reveal>

        <div className="relative mt-14 mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-purple/15 md:left-[calc(50%-1px)]" />

          <div className="space-y-10">
            {LOG_ENTRIES.map((entry, i) => {
              const isLaunch = entry.type === "launch";
              const isUpdate = entry.type === "update";
              return (
                <Reveal key={entry.title} delay={i * 0.06}>
                  <div className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full md:absolute md:left-1/2 md:-translate-x-1/2 md:top-2 md:mt-0 bg-purple shadow-md">
                      <Check className="h-4 w-4 text-white" />
                    </div>

                    {/* Card, alternates left/right on desktop */}
                    <div className={`flex-1 md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                      <div className={`rounded-3xl p-6 shadow-soft ${isLaunch ? "bg-purple text-white" : isUpdate ? "bg-green-100" : "bg-white border border-purple-100"}`}>
                        <div className="flex items-center justify-between gap-3 flex-wrap">
                          <span className={`rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-wider ${isLaunch ? "bg-green/20 text-green" : "bg-purple-50 text-purple"}`}>
                            {entry.tag}
                          </span>
                          <span className={`text-xs font-semibold ${isLaunch ? "text-white/60" : "text-body/60"}`}>
                            {entry.date}
                          </span>
                        </div>
                        <h3 className={`mt-3 font-display text-2xl ${isLaunch ? "text-green" : "text-ink"}`}>
                          {entry.title}
                        </h3>
                        <p className={`mt-2 text-sm ${isLaunch ? "text-white/80" : "text-body"}`}>
                          {entry.body}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for the opposite side on desktop */}
                    <div className="hidden md:block md:flex-1" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-16 md:pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-purple px-8 py-14 text-center text-white md:px-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-green/20 blur-3xl" />
            <h2 className="relative text-white display-md">Need Assistance?</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/85">
              Our team is available 24 hours a day. If you or your family need
              humanitarian guidance, reach out directly on WhatsApp.
            </p>
            <div className="relative mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/emergency-exit-guidance" className="btn-green">
                Go to Emergency Exit Guidance <Arrow className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-ghost-white">
                Contact Us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
