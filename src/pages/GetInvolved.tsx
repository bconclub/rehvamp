import PageTransition from "../components/PageTransition";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Arrow, Clock, Heart, Handshake, Share } from "../components/Icons";
import type { SVGProps } from "react";
import { Link } from "react-router-dom";
import { IMG } from "../images";

const WHY = [
  {
    title: "Heal",
    blurb: "Provide hope and restoration to children recovering from hardship.",
    image: IMG.home.heroChildren,
  },
  {
    title: "Grow",
    blurb: "Create opportunities for learning, connection and confidence.",
    image: IMG.home.classroom,
  },
  {
    title: "Inspire",
    blurb: "Motivate young people, and each other, toward positive change.",
    image: IMG.home.event3,
  },
];

const WAYS: {
  title: string;
  blurb: string;
  icon: (p: SVGProps<SVGSVGElement>) => JSX.Element;
}[] = [
  {
    title: "Volunteer Your Time",
    blurb:
      "Give your skills and energy to programmes that change young lives directly.",
    icon: Clock,
  },
  {
    title: "Support Through Giving",
    blurb:
      "Every donation funds healthcare, education and safe spaces for children.",
    icon: Heart,
  },
  {
    title: "Collaborate & Partner",
    blurb:
      "Organisations and businesses can amplify our impact through partnership.",
    icon: Handshake,
  },
  {
    title: "Share the Message",
    blurb:
      "Spread the word. Awareness is the first step toward lasting change.",
    icon: Share,
  },
];

export default function GetInvolved() {
  return (
    <PageTransition>
      <PageHero
        title="Get Involved"
        subtitle="There are many ways to be part of the change. Find the one that fits you."
        tone="green"
      />

      {/* Why */}
      <section className="container-x py-16 md:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Why get involved</p>
          <h2 className="mt-3 display-md">Why Get Involved?</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.1}>
              <div className="group h-full overflow-hidden rounded-3xl border border-teal-100 bg-white shadow-soft">
                <div className="overflow-hidden">
                  <img
                    src={w.image}
                    alt=""
                    className="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-3xl text-teal">{w.title}</h3>
                  <p className="mt-2 text-body">{w.blurb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ways to make impact */}
      <section className="bg-teal-50 py-16 md:py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Make an impact</p>
            <h2 className="mt-3 display-md">Ways You Can Make an Impact</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {WAYS.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="flex h-full gap-5 rounded-3xl bg-white p-7 shadow-soft">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <w.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-ink">{w.title}</h3>
                    <p className="mt-2 text-sm text-body">{w.blurb}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-16 md:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-purple px-8 py-14 text-center text-white md:px-16">
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-green/30 blur-3xl" />
            <h2 className="relative text-white display-md">
              Together, we REHVAMP the future
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/80">
              Join a community driven by compassion. Your time, your voice and
              your generosity make all the difference.
            </p>
            <div className="relative mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-green">
                Join as a Volunteer <Arrow className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-ghost-white">
                Become a Partner
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
