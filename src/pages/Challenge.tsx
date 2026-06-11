import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import { Arrow, Check } from "../components/Icons";
import { IMG } from "../images";

const PHASES = [
  {
    month: "Month 1",
    title: "HEAL",
    tone: "purple" as const,
    points: [
      "Create phone-free zones",
      "Improve sleep quality",
      "Reduce mental overstimulation",
    ],
    to: "/challenge/phase-1-heal",
  },
  {
    month: "Month 2",
    title: "GROW",
    tone: "green" as const,
    points: [
      "Track screen time",
      "Set boundaries",
      "Swap scrolling for movement, reading, or reflection",
    ],
  },
  {
    month: "Month 3",
    title: "INSPIRE",
    tone: "purple" as const,
    points: [
      "Share your journey",
      "Create mindful moments",
      "Model healthy digital habits",
    ],
  },
];

const TRANSFORMATION = [
  "Heal your mind by reducing digital overwhelm and restoring clarity.",
  "Grow healthier habits that strengthen focus, balance and self-awareness.",
  "Inspire positive change by modeling mindful digital behavior for others around you.",
];

const GRAND = [
  {
    logo: IMG.challenge.thirdSpace,
    image: IMG.challenge.gym,
    title: "1 Month Unlimited Access to Third Space Mayfair",
    blurb:
      "Enjoy one month of premium wellness with unlimited access through Third Space Mayfair, one of London's most exclusive health and fitness clubs. This membership grants entry not only to the prestigious Mayfair location but also to all Third Space clubs across London, giving you the flexibility to train, relax and recharge wherever suits you best.",
  },
  {
    logo: IMG.challenge.aire,
    image: IMG.challenge.bath,
    title: "Luxury Spa Experience at AIRE Ancient Baths",
    blurb:
      "Unwind with a luxury thermal-bath experience at AIRE Ancient Baths, a serene candle-lit sanctuary inspired by ancient Roman, Greek and Ottoman traditions. A restorative escape to slow down, reconnect with yourself and reflect on your journey.",
  },
];

export default function Challenge() {
  return (
    <PageTransition>
      {/* 1 - HERO (pale green, purple type) */}
      <section className="bg-green-100">
        <div className="container-x py-20 text-center md:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="display-xl text-purple"
          >
            THE REHVAMP
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="mt-2 font-display text-2xl tracking-wide text-purple md:text-4xl"
          >
            3-Month Digital Well Being Challenge
          </motion.p>
        </div>
      </section>

      {/* 2 - Intro + founder image */}
      <section className="container-x grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-5 text-body">
            <p>
              In a world flooded with constant notifications, breaking news and
              endless scrolling, our minds are rarely given the space to rest,
              reflect or truly connect. The digital noise slowly chips away at our
              focus, our emotional balance, and our ability to be present in our
              own lives.
            </p>
            <h2 className="display-md text-purple">Digital Well Being Challenge</h2>
            <p>
              The REHVAMP Foundation 3-Month Digital Well Being Challenge is a
              mindful, progressive journey created to help you step out of
              doomscrolling patterns, reclaim your attention and rebuild a
              healthier relationship with technology for yourself, your family and
              the people you influence every day.
            </p>
            <p>
              This challenge isn't about disconnecting from the digital world or
              quitting social media altogether. It's about learning to use
              technology consciously, intentionally and in ways that support your
              mental and emotional well-being.
            </p>
            <p>Over three thoughtfully designed phases you'll move through a powerful transformation:</p>
            <ul className="space-y-2">
              {TRANSFORMATION.map((t) => (
                <li key={t} className="flex gap-3 font-medium text-ink">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-green" />
                  {t}
                </li>
              ))}
            </ul>
            <p>
              Each month builds upon the last, guiding you from awareness to action
              and from personal healing to collective impact. Because when we heal
              ourselves we grow stronger, and when we grow we inspire a healthier
              digital culture for everyone.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <img
            src={IMG.founder.portrait}
            alt="REHVAMP founder Ishita Gupta"
            className="h-auto w-full rounded-[2rem] object-cover shadow-soft"
          />
        </Reveal>
      </section>

      {/* 3 - THE 3 MONTH JOURNEY (solid colored cards) */}
      <section className="container-x pb-16 md:pb-24">
        <Reveal>
          <p className="eyebrow">The journey</p>
          <h2 className="mt-3 display-lg text-purple">The 3 Month Journey</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PHASES.map((p, i) => {
            const purple = p.tone === "purple";
            return (
              <Reveal key={p.title} delay={i * 0.1}>
                <div
                  className={`flex h-full flex-col rounded-3xl p-8 shadow-card ${
                    purple ? "bg-purple" : "bg-green"
                  }`}
                >
                  <p
                    className={`text-lg font-semibold ${purple ? "text-green" : "text-purple"}`}
                  >
                    {p.month}
                  </p>
                  <h3
                    className={`font-display text-6xl leading-none ${purple ? "text-green" : "text-purple"}`}
                  >
                    {p.title}
                  </h3>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className={`flex gap-2 text-sm ${purple ? "text-white/90" : "text-ink/85"}`}
                      >
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${purple ? "text-green" : "text-purple"}`}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  {p.to && (
                    <Link
                      to={p.to}
                      className={`mt-6 inline-flex items-center gap-2 font-semibold hover:gap-3 ${
                        purple ? "text-green" : "text-purple"
                      }`}
                    >
                      Start Phase 1 <Arrow className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* 4 - REWARDS band */}
      <section className="bg-purple py-16 text-center md:py-20">
        <Reveal>
          <h2 className="display-lg text-green">REWARDS</h2>
          <p className="mt-1 font-display text-2xl text-white">Grand Winners</p>
        </Reveal>
      </section>

      {/* Grand winner rewards */}
      <section className="bg-purple-50 py-16 md:py-24">
        <div className="container-x space-y-16">
          {GRAND.map((r, i) => (
            <Reveal key={r.title}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <img
                  src={r.image}
                  alt=""
                  className="h-auto w-full rounded-[2rem] object-cover shadow-soft"
                />
                <div>
                  {r.logo && (
                    <img src={r.logo} alt="" className="mb-5 h-14 w-auto max-w-[200px] object-contain" />
                  )}
                  <h3 className="display-md text-ink">{r.title}</h3>
                  <p className="mt-4 text-body">{r.blurb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Runner-up reward */}
      <section className="bg-purple py-12 text-center">
        <Reveal>
          <h2 className="display-md text-green">REWARDS</h2>
          <p className="mt-1 font-display text-xl text-white">Runner-Up</p>
        </Reveal>
      </section>
      <section className="bg-purple-50 py-16 md:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="display-md text-ink">Curated Wellness Book Bundles</h3>
            <p className="mt-4 text-body">
              A handpicked collection of wellness and mindfulness books to keep you
              inspired, focused and growing long after the challenge ends.
            </p>
            <Link to="/challenge/phase-1-heal" className="btn-primary mt-7">
              Join the Challenge <Arrow className="h-4 w-4" />
            </Link>
          </div>
          <img
            src={IMG.challenge.book}
            alt="Wellness book bundle"
            className="h-auto w-full rounded-[2rem] object-cover shadow-soft"
          />
        </div>
      </section>
    </PageTransition>
  );
}
