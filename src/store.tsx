import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { BLOG_POSTS, TESTIMONIALS, type BlogPost, type BodyBlock } from "./site";

// ---------------------------------------------------------------------------
// Content store, the backend seam for blog posts & stories.
//
// Today this persists to localStorage so the admin panel works immediately and
// the front page updates live. To move to a real shared backend (Supabase),
// only the load/save functions below need to change, the rest of the app reads
// through useContent() and is unaffected.
// ---------------------------------------------------------------------------

export type Post = BlogPost & { id: string };

export type Story = {
  id: string;
  slug: string;
  title: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  video?: string; // Vimeo id
  body?: BodyBlock[];
};

type ContentState = { posts: Post[]; stories: Story[] };

const STORAGE_KEY = "rehvamp.content.v2";

const uid = () =>
  (globalThis.crypto?.randomUUID?.() ??
    `id-${Math.floor(performance.now() * 1000)}-${Math.random().toString(36).slice(2)}`);

function seed(): ContentState {
  return {
    posts: BLOG_POSTS.map((p) => ({ ...p, id: uid() })),
    stories: TESTIMONIALS.map((t) => ({
      id: uid(),
      slug: t.slug,
      title: t.title,
      quote: t.quote,
      name: t.name,
      role: t.role,
      image: t.image,
      video: t.video,
      body: t.body,
    })),
  };
}

// The code seed (site.ts) is the source of truth for built-in content, so new
// or edited posts/stories ship with every deploy. Without this, a returning
// visitor's stale localStorage snapshot would hide content added after their
// first visit. Any admin-created extras (slugs/stories not in the seed) are
// preserved on top.
function reconcile(stored: ContentState): ContentState {
  const fresh = seed();
  const seedSlugs = new Set(fresh.posts.map((p) => p.slug));
  const extraPosts = (stored.posts ?? []).filter((p) => !seedSlugs.has(p.slug));

  const storyKey = (s: { title: string; name: string }) => `${s.title}|${s.name}`;
  const seedStoryKeys = new Set(fresh.stories.map(storyKey));
  const extraStories = (stored.stories ?? []).filter(
    (s) => !seedStoryKeys.has(storyKey(s))
  );

  return {
    posts: [...extraPosts, ...fresh.posts],
    stories: [...fresh.stories, ...extraStories],
  };
}

function load(): ContentState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as ContentState;
      if (parsed?.posts && parsed?.stories) return reconcile(parsed);
    }
  } catch {
    /* ignore */
  }
  return seed();
}

function save(state: ContentState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

type ContentCtx = ContentState & {
  savePost: (p: Partial<Post>) => void;
  deletePost: (id: string) => void;
  saveStory: (s: Partial<Story>) => void;
  deleteStory: (id: string) => void;
  resetToSeed: () => void;
};

const Ctx = createContext<ContentCtx | null>(null);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ContentState>(() =>
    typeof window === "undefined" ? seed() : load()
  );

  useEffect(() => {
    save(state);
  }, [state]);

  const savePost: ContentCtx["savePost"] = (p) =>
    setState((s) => {
      const slug = p.slug && p.slug.trim() ? slugify(p.slug) : slugify(p.title ?? "post");
      const base: Post = {
        id: p.id ?? uid(),
        slug,
        title: p.title ?? "Untitled",
        date: p.date ?? "",
        excerpt: p.excerpt ?? "",
        tags: p.tags ?? [],
        image: p.image ?? "/images/blog/featured.webp",
        body: p.body ?? [],
      };
      const exists = p.id && s.posts.some((x) => x.id === p.id);
      return {
        ...s,
        posts: exists
          ? s.posts.map((x) => (x.id === p.id ? base : x))
          : [base, ...s.posts],
      };
    });

  const deletePost: ContentCtx["deletePost"] = (id) =>
    setState((s) => ({ ...s, posts: s.posts.filter((x) => x.id !== id) }));

  const saveStory: ContentCtx["saveStory"] = (st) =>
    setState((s) => {
      const base: Story = {
        id: st.id ?? uid(),
        slug: st.slug && st.slug.trim() ? slugify(st.slug) : slugify(st.title ?? "story"),
        title: st.title ?? "Untitled",
        quote: st.quote ?? "",
        name: st.name ?? "",
        role: st.role ?? "",
        image: st.image ?? "/images/home/people-1.webp",
        video: st.video,
        body: st.body,
      };
      const exists = st.id && s.stories.some((x) => x.id === st.id);
      return {
        ...s,
        stories: exists
          ? s.stories.map((x) => (x.id === st.id ? base : x))
          : [base, ...s.stories],
      };
    });

  const deleteStory: ContentCtx["deleteStory"] = (id) =>
    setState((s) => ({ ...s, stories: s.stories.filter((x) => x.id !== id) }));

  const resetToSeed = () => setState(seed());

  return (
    <Ctx.Provider
      value={{ ...state, savePost, deletePost, saveStory, deleteStory, resetToSeed }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useContent() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useContent must be used within ContentProvider");
  return c;
}
