import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Arrow, ICONS } from "../components/Icons";
import { FOCUS_AREAS } from "../site";
import { IMG } from "../images";

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

      {/* Mission & Vision */}
      <section className="bg-teal-50 py-16 md:py-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-white p-9 shadow-soft">
              <h3 className="font-display text-3xl text-teal">Our Mission</h3>
              <p className="mt-4 text-body">
                To empower vulnerable children and young people through
                healthcare, education and safe spaces, giving them the tools and
                support they need to heal and thrive.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-white p-9 shadow-soft">
              <h3 className="font-display text-3xl text-green-600">Our Vision</h3>
              <p className="mt-4 text-body">
                A world where every child, regardless of background, can heal,
                grow and inspire positive change in their communities and beyond.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Focus areas */}
      <section className="container-x py-16 md:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">What we do</p>
          <h2 className="mt-3 display-md">Our focus areas</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FOCUS_AREAS.map((f, i) => {
            const Icon = ICONS[f.icon as keyof typeof ICONS];
            return (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-teal-100 bg-white p-7 transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-body">{f.blurb}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* How we work */}
      <section className="bg-purple py-16 text-white md:py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-teal-200">How we work</p>
            <h2 className="mt-3 text-white display-md">
              Rooted in community, focused on impact
            </h2>
            <p className="mt-5 text-white/80">
              We collaborate with local communities, partners and volunteers to
              deliver practical, lasting support, meeting children where they
              are and walking with them as they heal and grow.
            </p>
            <Link to="/get-involved" className="btn-green mt-7">
              Join the cause <Arrow className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[IMG.about.a1, IMG.home.classroom, IMG.home.people2, IMG.home.people3].map(
                (src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className={`w-full rounded-2xl object-cover ${i % 2 ? "h-40" : "h-56"}`}
                  />
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
