import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Arrow } from "../components/Icons";
import { IMG } from "../images";

const FOCUS = [
  {
    title: "Healthcare & Mental Health",
    body: "Healing begins with care. We work to improve access to both physical and emotional support, so children feel safe, supported and seen.",
    tone: "purple" as const,
  },
  {
    title: "Access to Education",
    body: "Growth comes through learning. We create opportunities for education, skills and empowerment so that every child can reach their fullest potential.",
    tone: "green" as const,
  },
  {
    title: "Anti-Bullying & Advocacy",
    body: "Inspiration flourishes in safe spaces. We stand against harassment, discrimination and stigma, fostering environments where children are valued and protected.",
    tone: "purple" as const,
  },
  {
    title: "Empowerment & Resilience",
    body: "To inspire others, children must first believe in themselves. We nurture confidence, resilience and self-worth so they can rise above adversity and become beacons of hope for others.",
    tone: "green" as const,
  },
];

export default function About() {
  return (
    <PageTransition>
      <PageHero eyebrow="About Us" title="About Us" tone="ink" />

      {/* Intro */}
      <section className="bg-green-100 py-16 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="display-lg text-ink">REHVAMP Foundation</h2>
            <div className="mt-5 space-y-4 text-lg text-body">
              <p>
                REHVAMP Foundation is founded by{" "}
                <span className="font-semibold text-purple">Ishita Gupta</span>,
                with a vision to create safe, supportive and empowering
                environments for children and young people.
              </p>
              <p>
                At REHVAMP, we believe every child deserves the chance to Heal •
                Grow • Inspire. To heal from the pain of trauma. To grow through
                education, care and opportunity. And to inspire not only their own
                future, but the future of their families, communities and the
                world.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={IMG.about.a1}
              alt="Children supported by REHVAMP"
              className="h-[360px] w-full rounded-[2rem] object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      {/* A Message from Our Founder */}
      <section className="bg-purple-50 py-16 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="display-lg text-ink">A Message from Our Founder</h2>
            <div className="mt-5 space-y-4 text-lg text-body">
              <p>
                REHVAMP was born out of a simple but powerful belief: every child
                holds limitless potential if only they are given the chance to
                shine.
              </p>
              <p>
                I have seen how barriers, whether poverty, bullying, lack of
                access to education, or silence around mental health, can strip
                young people of their confidence and dreams. But I have also seen
                the transformation that happens when a child is given love,
                support and opportunity.
              </p>
              <p>
                Through REHVAMP, I want to create that transformation for as many
                children as possible: to help them heal from their struggles, grow
                into their true potential, and inspire others through their
                journey.
              </p>
              <p className="font-semibold text-purple">Ishita Gupta, Founder</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src={IMG.founder.portrait}
                alt="Ishita Gupta, Founder"
                className="h-[460px] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="bg-green-100 py-16 md:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="display-lg text-ink">Our Focus Areas</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FOCUS.map((f, i) => {
              const purple = f.tone === "purple";
              return (
                <Reveal key={f.title} delay={i * 0.08}>
                  <div className={`h-full rounded-3xl p-7 shadow-card ${purple ? "bg-purple" : "bg-green"}`}>
                    <h3 className={`font-display text-2xl ${purple ? "text-green" : "text-purple"}`}>
                      {f.title}
                    </h3>
                    <p className={`mt-3 text-sm ${purple ? "text-white/85" : "text-ink/85"}`}>
                      {f.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-purple-50 py-16 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={IMG.home.event3}
              alt="Children supported by REHVAMP"
              className="h-auto w-full rounded-[2rem] object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-lg text-ink">How We Work</h2>
            <p className="mt-5 text-lg text-body">
              We design programs rooted in compassion, addressing the challenges
              that children and young people face every day. By collaborating with
              communities, educators and advocates, we provide practical support
              and build long-lasting impact.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Join the Cause */}
      <section className="container-x py-16 md:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-purple px-8 py-14 text-center text-white md:px-16">
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-green/30 blur-3xl" />
            <h2 className="relative text-white display-md">Join the Cause</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/85">
              Every child deserves the chance to Heal • Grow • Inspire. Join us as
              a donor, volunteer or partner and help make it possible.
            </p>
            <div className="relative mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/get-involved" className="btn-green">
                Donate Now <Arrow className="h-4 w-4" />
              </Link>
              <Link to="/get-involved" className="btn-ghost-white">
                Get Involved
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
