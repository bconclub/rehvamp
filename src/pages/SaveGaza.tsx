import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import { Arrow, Heart, Leaf, Shield, Book } from "../components/Icons";
import { IMG } from "../images";

const HELP = [
  {
    icon: Heart,
    text: "Supporting emergency clinics to treat malnutrition and provide maternal care.",
  },
  {
    icon: Leaf,
    text: "Ensuring families have safe drinking water.",
  },
  {
    icon: Shield,
    text: "Creating trauma-informed child-friendly environments for play and psychosocial support.",
  },
  {
    icon: Book,
    text: "Preparing to rebuild temporary learning spaces and restore education when safe.",
  },
];

export default function SaveGaza() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden bg-purple text-white">
        <img
          src={IMG.gaza.g1}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple via-purple/85 to-purple/50" />
        <div className="container-x relative py-20 md:py-28">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow text-green"
          >
            Emergency Appeal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 max-w-3xl text-white display-lg"
          >
            Save Gaza's Children. Stand Against Starvation and Violence.
          </motion.h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Children in Gaza are living through unimaginable suffering. With your
            support, REHVAMP stands ready to provide healing, care and hope.
          </p>
          <div className="mt-8">
            <Link to="/get-involved" className="btn-green">
              Take Action <Arrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The World's Deadliest Place to Be a Child */}
      <section className="bg-purple-50 py-16 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={IMG.gaza.g3}
              alt="Children in Gaza"
              className="h-auto w-full rounded-[2rem] object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-lg text-ink">
              The World's Deadliest Place to Be a Child
            </h2>
            <p className="mt-5 text-body">
              The suffering being inflicted on Gaza's children is unfathomable.
            </p>
            <ul className="mt-4 space-y-2.5 text-body">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                <span>
                  In just over 21 months of conflict, more than{" "}
                  <strong className="text-ink">18,000 children</strong> have been
                  killed.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                <span>
                  Hundreds more are dying every day from{" "}
                  <strong className="text-ink">starvation and preventable disease</strong>.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                <span>
                  Life expectancy has dropped by almost{" "}
                  <strong className="text-ink">35 years</strong>, from 75.5 years
                  to just 40.6.
                </span>
              </li>
            </ul>
            <p className="mt-5 text-body">
              Gaza is now officially in famine. Our teams report children too weak
              to cry. In child-friendly spaces, some say they no longer wish to
              live. One child told us:
            </p>
            <blockquote className="mt-4 border-l-4 border-green py-1 pl-5 font-display text-2xl leading-snug text-purple">
              "I wish I was in heaven where my mother is. In heaven there is love,
              there is food, there is water."
            </blockquote>
            <Link to="/get-involved" className="btn-primary mt-7">
              Take Action <Arrow className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* What We're Doing to Help */}
      <section className="bg-green-100 py-16 md:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="display-lg text-ink">What We're Doing to Help</h2>
            <p className="mt-4 text-body">
              With the support of global partners and compassionate individuals
              like you, REHVAMP is committed to bringing hope and healing:
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {HELP.map((h, i) => (
              <Reveal key={h.text} delay={i * 0.08}>
                <div className="flex h-full gap-5 rounded-3xl bg-white p-7 shadow-soft">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple">
                    <h.icon className="h-6 w-6" />
                  </span>
                  <p className="text-body">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link to="/get-involved" className="btn-primary">
              Donate to the appeal <Arrow className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
