import { useParams, Link, Navigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import VimeoPlayer from "../components/VimeoPlayer";
import { Arrow } from "../components/Icons";
import { useContent } from "../store";

export default function StoryDetail() {
  const { slug } = useParams();
  const { stories } = useContent();
  const story = stories.find((s) => s.slug === slug);
  if (!story) return <Navigate to="/" replace />;

  return (
    <PageTransition>
      <Seo
        title={story.title}
        description={story.quote}
        image={story.image}
      />

      {/* Header */}
      <section className="bg-purple-50">
        <div className="container-x py-12 md:py-16">
          <Link
            to="/#stories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple transition-all hover:gap-3"
          >
            <Arrow className="h-4 w-4 rotate-180" /> Back to stories
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-purple">
            Real People, Real Change
          </p>
          <h1 className="mt-3 max-w-3xl display-md text-ink">{story.title}</h1>
          {(story.name || story.role) && (
            <p className="mt-3 text-sm font-semibold text-body">
              {story.name}
              {story.name && story.role ? " · " : ""}
              {story.role}
            </p>
          )}
        </div>
      </section>

      {/* Video / image */}
      <div className="container-x -mt-2">
        <Reveal className="mx-auto max-w-3xl">
          {story.video ? (
            <VimeoPlayer
              id={story.video}
              poster={story.image}
              className="aspect-video rounded-[2rem] shadow-card"
            />
          ) : (
            <img
              src={story.image}
              alt={story.title}
              className="aspect-video w-full rounded-[2rem] object-cover shadow-soft"
            />
          )}
        </Reveal>
      </div>

      {/* Quote */}
      <section className="container-x py-14">
        <Reveal className="mx-auto max-w-2xl">
          <blockquote className="rounded-2xl border-l-4 border-purple bg-purple-50 py-6 pl-6 pr-5">
            <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
              "{story.quote}"
            </p>
            {story.name && (
              <cite className="mt-4 block text-sm font-semibold not-italic text-purple">
                {story.name}
                {story.role ? `, ${story.role}` : ""}
              </cite>
            )}
          </blockquote>

          <div className="mt-8 flex items-center gap-3 rounded-2xl bg-green-100 p-6">
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
      </section>
    </PageTransition>
  );
}
