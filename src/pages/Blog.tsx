import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { useContent } from "../store";
import { Arrow } from "../components/Icons";

export default function Blog() {
  const { posts } = useContent();
  const [featured, ...rest] = posts;

  if (!featured) {
    return (
      <PageTransition>
        <PageHero eyebrow="Blog" title="Stories of change" />
        <section className="container-x py-20 text-center text-body">
          No posts yet, check back soon.
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <PageHero
        eyebrow="Blog"
        title="Stories of change"
        subtitle="News, reflections and milestones from the REHVAMP community."
      />

      <section className="container-x py-16 md:py-20">
        {/* Featured */}
        <Reveal>
          <Link
            to={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-[2rem] border border-teal-100 bg-white shadow-soft md:grid-cols-2"
          >
            <div className="overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full min-h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal">
                Featured · {featured.date}
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink">
                {featured.title}
              </h2>
              <p className="mt-4 text-body">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-teal group-hover:gap-3">
                Read more <Arrow className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
              <Link
                to={`/blog/${post.slug}`}
                className="group block h-full overflow-hidden rounded-3xl border border-teal-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal">
                    {post.date}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-tight text-ink">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm text-body">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
