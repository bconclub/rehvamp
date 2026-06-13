import { useParams, Link, Navigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import NewsletterForm from "../components/NewsletterForm";
import { useContent } from "../store";
import { Arrow } from "../components/Icons";
import type { BodyBlock } from "../site";

function Block({ b, i }: { b: BodyBlock; i: number }) {
  switch (b.type) {
    case "h2":
      return (
        <h2 className="mt-10 font-display text-3xl text-ink first:mt-0">
          {b.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-6 font-display text-2xl text-purple">{b.text}</h3>
      );
    case "blockquote":
      return (
        <blockquote className="my-6 rounded-2xl border-l-4 border-purple bg-purple-50 py-5 pl-6 pr-5">
          <p className="font-display text-2xl leading-snug text-ink">
            {b.text}
          </p>
          {b.by && (
            <cite className="mt-3 block text-sm font-semibold not-italic text-purple">
              — {b.by}
            </cite>
          )}
        </blockquote>
      );
    case "ul":
      return (
        <ul className="space-y-2 pl-1">
          {b.items.map((item, j) => (
            <li key={j} className="flex gap-3 text-lg text-body">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p key={i} className="text-lg leading-relaxed text-body">
          {b.text}
        </p>
      );
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const { posts } = useContent();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <PageTransition>
      {/* Header */}
      <section className="bg-purple-50">
        <div className="container-x py-12 md:py-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple hover:gap-3 transition-all"
          >
            <Arrow className="h-4 w-4 rotate-180" /> Back to blog
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-purple">
            {post.date}
          </p>
          <h1 className="mt-3 max-w-3xl display-md text-ink">{post.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-body">{post.excerpt}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-purple/10 px-3 py-1 text-xs font-medium text-purple"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="container-x -mt-2">
        <Reveal>
          <img
            src={post.image}
            alt={post.title}
            className="h-[280px] w-full rounded-[2rem] object-cover shadow-soft md:h-[440px]"
          />
        </Reveal>
      </div>

      {/* Body */}
      <article className="container-x grid gap-12 py-14 lg:grid-cols-[1fr_320px]">
        <Reveal className="max-w-2xl">
          <div className="space-y-5">
            {post.body.map((b, i) => (
              <Block key={i} b={b} i={i} />
            ))}
          </div>

          {post.relatedPage && (
            <div className="mt-10 flex items-center justify-between gap-4 rounded-2xl bg-purple p-6 flex-wrap">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-green">
                  Related Programme
                </p>
                <p className="mt-1 font-display text-xl text-white">
                  {post.relatedPage.label}
                </p>
              </div>
              <Link
                to={post.relatedPage.to}
                className="btn-green shrink-0"
              >
                View Page <Arrow className="h-4 w-4" />
              </Link>
            </div>
          )}

          <div className="mt-5 flex items-center gap-3 rounded-2xl bg-green-100 p-6">
            <span className="h-2 w-2 shrink-0 rounded-full bg-green" />
            <p className="text-sm text-body">
              Inspired by this story?{" "}
              <Link
                to="/get-involved"
                className="font-semibold text-purple hover:underline"
              >
                Get involved
              </Link>{" "}
              and help us heal, grow and inspire.
            </p>
          </div>
        </Reveal>

        {/* Sidebar */}
        <aside>
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="font-display text-2xl text-ink">
                Related stories
              </h3>
              <ul className="mt-4 space-y-4">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link to={`/blog/${r.slug}`} className="group flex gap-3">
                      <img
                        src={r.image}
                        alt=""
                        className="h-16 w-16 shrink-0 rounded-xl object-cover"
                      />
                      <span className="text-sm font-medium text-ink group-hover:text-purple">
                        {r.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-purple p-6 text-white">
              <h3 className="font-display text-2xl text-white">
                Stay in the loop
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Get our latest stories straight to your inbox.
              </p>
              <NewsletterForm variant="compact" source={`Blog: ${post.slug}`} />
            </div>
          </div>
        </aside>
      </article>
    </PageTransition>
  );
}
