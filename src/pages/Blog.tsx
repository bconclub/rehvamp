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
            className="group grid gap-6 overflow-hidden rounded-[2rem] bg-purple p-5 shadow-card md:grid-cols-2"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full min-h-[300px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center md:py-6 md:pr-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-green">
                Featured
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-green">
                {featured.title}
              </h2>
              <p className="mt-4 text-white/85">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-green group-hover:gap-3">
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
                className="group flex h-full flex-col rounded-3xl bg-purple p-5 shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-56 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
      </section>
    </PageTransition>
  );
}
