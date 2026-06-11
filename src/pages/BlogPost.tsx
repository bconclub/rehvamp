import { useParams, Link, Navigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import { useContent } from "../store";
import { Arrow, Leaf } from "../components/Icons";

export default function BlogPost() {
  const { slug } = useParams();
  const { posts } = useContent();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <PageTransition>
      {/* Header */}
      <section className="bg-teal-50">
        <div className="container-x py-12 md:py-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:gap-3"
          >
            <Arrow className="h-4 w-4 rotate-180" /> Back to blog
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-teal">
            {post.date}
          </p>
          <h1 className="mt-3 max-w-3xl display-md">{post.title}</h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white px-3 py-1 text-xs font-medium text-teal"
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
          <div className="space-y-5 text-lg leading-relaxed text-body">
            {post.body.map((para, i) =>
              i === 1 ? (
                <blockquote
                  key={i}
                  className="border-l-4 border-teal py-2 pl-5 font-display text-2xl leading-snug text-ink"
                >
                  {para}
                </blockquote>
              ) : (
                <p key={i}>{para}</p>
              )
            )}
          </div>

          <div className="mt-10 flex items-center gap-3 rounded-2xl bg-teal-50 p-6">
            <Leaf className="h-6 w-6 text-teal" />
            <p className="text-sm text-body">
              Inspired by this story?{" "}
              <Link to="/get-involved" className="font-semibold text-teal hover:underline">
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
              <h3 className="font-display text-2xl text-ink">Related stories</h3>
              <ul className="mt-4 space-y-4">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link to={`/blog/${r.slug}`} className="group flex gap-3">
                      <img
                        src={r.image}
                        alt=""
                        className="h-16 w-16 shrink-0 rounded-xl object-cover"
                      />
                      <span className="text-sm font-medium text-ink group-hover:text-teal">
                        {r.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-purple p-6 text-white">
              <h3 className="font-display text-2xl text-white">Stay in the loop</h3>
              <p className="mt-2 text-sm text-white/70">
                Get our latest stories straight to your inbox.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 flex flex-col gap-2"
              >
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="rounded-xl bg-white/15 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-green"
                />
                <button className="btn-green w-full">Subscribe</button>
              </form>
            </div>
          </div>
        </aside>
      </article>
    </PageTransition>
  );
}
