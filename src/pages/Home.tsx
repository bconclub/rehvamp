import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import { Arrow, ICONS } from "../components/Icons";
import NewsletterForm from "../components/NewsletterForm";
import VimeoPlayer from "../components/VimeoPlayer";
import Seo from "../components/Seo";
import { FOCUS_AREAS } from "../site";
import { useContent } from "../store";
import { IMG } from "../images";

const VIMEO_ID = "1200983875";

const BE_THE_CHANGE = [
  {
    title: "Donate",
    blurb: "Every donation fuels our programs, from recovery to scholarships.",
    image: IMG.home.classroom,
    tone: "purple" as const,
  },
  {
    title: "Volunteer",
    blurb: "Offer your time, skills or mentorship to support young lives.",
    image: IMG.home.event2,
    tone: "green" as const,
  },
  {
    title: "Fundraise",
    blurb:
      "Collaborate with us to expand access to care, education and opportunity.",
    image: IMG.home.event3,
    tone: "purple" as const,
  },
];

export default function Home() {
  const { posts, stories } = useContent();
  return (
    <PageTransition>
      <Seo
        bareTitle
        title="REHVAMP Foundation · Heal, Grow, Inspire"
        description="REHVAMP Foundation creates safe, supportive and empowering environments where children and young people can heal, grow and inspire."
      />
      {/* 1 - HERO (full-bleed image) */}
      <section className="relative w-full overflow-hidden bg-ink">
        <motion.img
          initial={{ scale: 1.05, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          src={IMG.home.hero}
          alt="A child with paint-covered hands"
          className="h-[58vh] min-h-[360px] w-full object-cover md:h-[82vh]"
        />
      </section>

      {/* 2 - HEAL GROW INSPIRE heading band */}
      <section className="bg-purple-50">
        <div className="container-x py-16 text-center md:py-24">
          <Reveal>
            <h1 className="display-xl text-purple">HEAL GROW INSPIRE</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-body">
              At REHVAMP Foundation, we create safe, supportive and empowering
              environments where children and young people can Heal • Grow •
              Inspire.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3 - Photo + brand-card trio */}
      <section className="bg-purple-50 pb-20">
        <div className="container-x grid items-stretch gap-6 md:grid-cols-3">
          <Reveal className="h-full">
            <img
              src={IMG.home.trioLeft}
              alt="Founder Ishita Gupta with children at play"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover object-top shadow-soft"
            />
          </Reveal>

          <Reveal delay={0.1} className="flex h-full flex-col gap-6">
            {/* creating safe spaces card */}
            <div className="relative min-h-[260px] flex-1 overflow-hidden rounded-3xl bg-purple p-7 shadow-card md:min-h-0">
              <p className="max-w-[55%] font-sans text-2xl font-bold leading-snug text-white">
                creating <span className="text-green">safe spaces</span> for
                children
              </p>
              <img
                src={IMG.home.founderCutout}
                alt=""
                className="pointer-events-none absolute bottom-0 right-6 h-[88%] w-auto object-contain object-bottom sm:right-8"
              />
            </div>
            {/* 15K stat card */}
            <div className="flex shrink-0 items-center justify-between rounded-3xl bg-green p-5 shadow-card">
              <div>
                <p className="font-display text-5xl text-ink">15K+</p>
                <p className="mt-1 text-sm font-semibold text-ink/80">
                  Children Supported
                  <br />
                  Worldwide
                </p>
              </div>
              <div className="flex -space-x-3">
                {[IMG.home.circle1, IMG.home.circle2, IMG.home.circle3].map(
                  (src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-green object-cover"
                    />
                  )
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="h-full">
            <img
              src={IMG.home.trioRight}
              alt="Founder Ishita Gupta studying in a library"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover object-top shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      {/* 4 - Healing Begins with Care */}
      <section className="bg-purple-50 pb-20">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="display-lg text-purple">Healing Begins with Care</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 text-lg text-body">
              <p>
                REHVAMP Foundation is dedicated to creating safe, supportive and
                empowering environments for children and young people.
              </p>
              <p>
                We believe that every child deserves the opportunity to heal from
                challenges, grow with confidence, and inspire change in the world.
              </p>
              <p>
                Through compassion, care and community-driven initiatives, we are
                committed to helping children and young people unlock their full
                potential, where they Heal • Grow • Inspire.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5 - Be the Change (cards with photos) */}
      <section className="bg-green-100 py-16 md:py-24">
        <div className="container-x">
          <Reveal className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <h2 className="display-lg text-ink">Be the Change You Wish to See</h2>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <p className="text-lg text-body md:text-right">
                Take action today to create a brighter tomorrow.
              </p>
              <Link to="/get-involved" className="btn-primary">
                Donate Now <Arrow className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {BE_THE_CHANGE.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div
                  className={`flex h-full flex-col overflow-hidden rounded-3xl shadow-card ${
                    c.tone === "purple" ? "bg-purple" : "bg-green"
                  }`}
                >
                  <div className="p-7">
                    <p
                      className={`text-sm font-semibold uppercase tracking-wider ${
                        c.tone === "purple" ? "text-green" : "text-purple"
                      }`}
                    >
                      {c.title}
                    </p>
                    <p className="mt-2 font-display text-2xl leading-snug text-white">
                      {c.blurb}
                    </p>
                  </div>
                  <img
                    src={c.image}
                    alt=""
                    className="mt-auto h-[340px] w-full object-cover object-top"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6 - TOGETHER, WE MAKE A DIFFERENCE, video section */}
      <section className="relative overflow-hidden bg-purple py-20 md:py-28">
        {/* Mobile backdrop: subtle wing-logo glow (unchanged) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 md:hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 56%, rgba(236,211,255,0.5), rgba(164,91,230,0.18) 26%, transparent 64%), linear-gradient(180deg, rgba(47,12,100,0.22), rgba(33,6,78,0.42))",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[56%] z-0 w-[1100px] max-w-[168vw] -translate-x-1/2 -translate-y-1/2 opacity-60 md:hidden"
        >
          <img src={IMG.logo.wingBg} alt="" className="w-full max-w-none object-contain" />
        </div>
        {/* Desktop backdrop: supplied phones background */}
        <img
          src={IMG.home.togetherBg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full object-cover md:block"
        />
        <div className="container-x relative z-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center text-green">Join Rehvamp</p>
            <h2 className="mt-3 display-lg text-white">
              Together, We Can Make a Difference
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Watch how Rehvamp is tackling doom scrolling, bullying and digital
              well-being, and how you can be part of the change.
            </p>
          </Reveal>

          {/* Mobile: portrait player with the original cover (unchanged) */}
          <Reveal className="mx-auto mt-10 w-full max-w-[340px] md:hidden">
            <div className="rounded-3xl bg-purple-100/20 p-1 shadow-[0_24px_70px_rgba(28,6,64,0.45),0_0_38px_rgba(184,100,255,0.55)] ring-2 ring-purple-200/55">
              <VimeoPlayer
                id={VIMEO_ID}
                poster={IMG.home.doomScrollingCover}
                className="aspect-[9/16] rounded-[1.35rem] shadow-card"
              />
            </div>
          </Reveal>
          {/* Desktop: 16:9 player with the landscape thumbnail */}
          <Reveal className="mx-auto mt-10 hidden w-full max-w-[680px] md:block">
            <div className="rounded-3xl bg-purple-100/20 p-1 shadow-[0_24px_70px_rgba(28,6,64,0.45),0_0_38px_rgba(184,100,255,0.55)] ring-2 ring-purple-200/55">
              <VimeoPlayer
                id={VIMEO_ID}
                poster={IMG.home.togetherThumbnail}
                className="aspect-video rounded-[1.35rem] shadow-card"
              />
            </div>
          </Reveal>

          <Reveal className="mt-14 text-center">
            <p className="mb-6 text-lg text-white/70">Ready to make a difference?</p>
            <Link to="/challenge" className="btn-green">
              Take the Challenge <Arrow className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 7 - JOIN THE MOVEMENT (focus areas) */}
      <section className="bg-green-100 py-16 md:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">What we do</p>
            <h2 className="mt-3 display-lg text-ink">Join the Movement</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {FOCUS_AREAS.map((f, i) => {
              const Icon = ICONS[f.icon as keyof typeof ICONS];
              const purple = i % 2 === 0;
              return (
                <Reveal key={f.title} delay={i * 0.08}>
                  <div
                    className={`flex h-full gap-5 rounded-3xl p-8 shadow-card ${
                      purple ? "bg-purple text-white" : "bg-green text-ink"
                    }`}
                  >
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                        purple ? "bg-green text-purple" : "bg-purple text-white"
                      }`}
                    >
                      <Icon className="h-7 w-7" />
                    </span>
                    <div>
                      <h3
                        className={`font-display text-2xl ${purple ? "text-white" : "text-ink"}`}
                      >
                        {f.title}
                      </h3>
                      <p
                        className={`mt-2 text-sm ${purple ? "text-white/85" : "text-ink/80"}`}
                      >
                        {f.blurb}
                      </p>
                      <Link
                        to="/get-involved"
                        className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 ${
                          purple ? "text-green" : "text-purple"
                        }`}
                      >
                        Learn More <Arrow className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8 - WHAT'S NEW (blog) */}
      <section className="bg-purple-50 py-16 md:py-24">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Latest news</p>
              <h2 className="mt-3 display-lg text-purple">What's New at REHVAMP</h2>
            </div>
            <Link
              to="/blog"
              className="hidden items-center gap-2 font-semibold text-purple hover:gap-3 sm:inline-flex"
            >
              All posts <Arrow className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.1}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-3xl bg-purple p-5 shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-2xl leading-tight text-green">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-4 flex-1 text-sm text-white/85">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-green group-hover:gap-3">
                    Read More <Arrow className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9 - TESTIMONIALS (Real People, Real Change) */}
      <section id="stories" className="scroll-mt-24 bg-green-100 py-16 md:py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="display-lg text-ink">Real People, Real Change</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stories.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.1}>
                <Link
                  to={`/stories/${t.slug}`}
                  className="group flex h-full w-full flex-col rounded-3xl bg-purple p-5 text-left shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={t.image}
                      alt={t.title}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-3xl leading-tight text-green">
                    {t.title}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-white group-hover:gap-3">
                    <Arrow className="h-4 w-4" /> Read Story
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 - NEWSLETTER */}
      <section className="container-x py-16 md:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-purple px-8 py-12 md:px-16 md:py-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-green/30 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-white display-md">Stay in the Loop</h2>
                <p className="mt-3 max-w-md text-white/80">
                  Get the latest stories, milestones and ways to help, straight to
                  your inbox.
                </p>
              </div>
              <NewsletterForm variant="full" source="Home" />
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
