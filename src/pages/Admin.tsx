import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { useContent, slugify, type Post, type Story } from "../store";
import { IMG } from "../images";
import { Arrow } from "../components/Icons";

// Flatten the image manifest into a pick-list for the image fields.
const IMAGE_OPTIONS = Object.values(IMG).flatMap((group) =>
  typeof group === "string" ? [group] : Object.values(group)
);

const PASSCODE = "rehvamp"; // simple local gate, replace with real auth when a backend is wired

export default function Admin() {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem("rehvamp.admin") === "1"
  );
  const [tab, setTab] = useState<"posts" | "stories">("posts");

  if (!authed) return <Gate onPass={() => setAuthed(true)} />;

  return (
    <PageTransition>
      <section className="bg-purple py-10 text-white">
        <div className="container-x flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow text-green">Admin</p>
            <h1 className="mt-1 font-display text-4xl text-white">Content Manager</h1>
          </div>
          <Link to="/" className="btn-green">
            View site <Arrow className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="container-x py-10">
        <div className="mb-8 inline-flex rounded-full border border-purple-100 bg-white p-1">
          {(["posts", "stories"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-6 py-2 text-sm font-semibold capitalize transition-colors ${
                tab === t ? "bg-purple text-white" : "text-body hover:text-purple"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        {tab === "posts" ? <PostsAdmin /> : <StoriesAdmin />}
      </section>
    </PageTransition>
  );
}

function Gate({ onPass }: { onPass: () => void }) {
  const [v, setV] = useState("");
  const [err, setErr] = useState(false);
  return (
    <PageTransition>
      <section className="container-x flex min-h-[70vh] items-center justify-center py-20">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (v === PASSCODE) {
              sessionStorage.setItem("rehvamp.admin", "1");
              onPass();
            } else setErr(true);
          }}
          className="w-full max-w-sm rounded-[2rem] border border-purple-100 bg-white p-8 shadow-soft"
        >
          <p className="eyebrow">Admin</p>
          <h1 className="mt-2 font-display text-3xl text-ink">Enter passcode</h1>
          <input
            autoFocus
            type="password"
            value={v}
            onChange={(e) => {
              setV(e.target.value);
              setErr(false);
            }}
            className="input mt-5"
            placeholder="Passcode"
          />
          {err && <p className="mt-2 text-sm text-red-500">Incorrect passcode.</p>}
          <button className="btn-primary mt-5 w-full">Unlock</button>
          <p className="mt-4 text-center text-xs text-body/70">
            Default passcode: <code className="font-semibold">rehvamp</code>
          </p>
        </form>
      </section>
    </PageTransition>
  );
}

const empty = "rounded-2xl border border-dashed border-purple-100 p-6 text-center text-sm text-body";

function PostsAdmin() {
  const { posts, savePost, deletePost, resetToSeed } = useContent();
  const [editing, setEditing] = useState<Partial<Post> | null>(null);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      {/* list */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-2xl text-ink">Blog Posts ({posts.length})</h2>
          <button
            onClick={() =>
              setEditing({ title: "", date: "", excerpt: "", tags: [], body: [{ type: "p", text: "" }], image: IMG.blog.featured })
            }
            className="btn-primary !px-5 !py-2.5"
          >
            + New
          </button>
        </div>
        <div className="space-y-3">
          {posts.length === 0 && <div className={empty}>No posts.</div>}
          {posts.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-3 rounded-2xl border border-purple-100 bg-white p-3"
            >
              <img src={p.image} alt="" className="h-14 w-14 shrink-0 rounded-xl object-cover" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-ink">{p.title}</p>
                <p className="truncate text-xs text-body">{p.date} · /{p.slug}</p>
              </div>
              <button onClick={() => setEditing(p)} className="text-sm font-semibold text-purple hover:underline">
                Edit
              </button>
              <button
                onClick={() => confirm(`Delete "${p.title}"?`) && deletePost(p.id)}
                className="text-sm font-semibold text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <button onClick={() => confirm("Reset all content to the original seed?") && resetToSeed()} className="mt-6 text-xs text-body/60 hover:text-purple">
          Reset to original content
        </button>
      </div>

      {/* editor */}
      <div className="rounded-[2rem] border border-purple-100 bg-white p-6 shadow-soft">
        {editing ? (
          <PostForm
            key={editing.id ?? "new"}
            initial={editing}
            onSave={(p) => {
              savePost(p);
              setEditing(null);
            }}
            onCancel={() => setEditing(null)}
          />
        ) : (
          <div className="flex h-full min-h-[200px] items-center justify-center text-center text-sm text-body">
            Select a post to edit, or click <span className="mx-1 font-semibold text-purple">+ New</span>.
          </div>
        )}
      </div>
    </div>
  );
}

function PostForm({
  initial,
  onSave,
  onCancel,
}: {
  initial: Partial<Post>;
  onSave: (p: Partial<Post>) => void;
  onCancel: () => void;
}) {
  const [f, setF] = useState({
    id: initial.id,
    title: initial.title ?? "",
    slug: initial.slug ?? "",
    date: initial.date ?? "",
    excerpt: initial.excerpt ?? "",
    tags: (initial.tags ?? []).join(", "),
    image: initial.image ?? IMG.blog.featured,
    body: (initial.body ?? []).map((b) => ("text" in b ? b.text : "items" in b ? b.items.join("\n") : "")).filter(Boolean).join("\n\n"),
  });
  const set = (k: string, v: string) => setF((s) => ({ ...s, [k]: v }));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave({
          id: f.id,
          title: f.title,
          slug: f.slug || slugify(f.title),
          date: f.date,
          excerpt: f.excerpt,
          tags: f.tags.split(",").map((t) => t.trim()).filter(Boolean),
          image: f.image,
          body: f.body.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean).map((text) => ({ type: "p" as const, text })),
        });
      }}
      className="space-y-4"
    >
      <Field label="Title">
        <input required className="input" value={f.title} onChange={(e) => set("title", e.target.value)} />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Slug (auto from title if blank)">
          <input className="input" value={f.slug} placeholder={slugify(f.title)} onChange={(e) => set("slug", e.target.value)} />
        </Field>
        <Field label="Date">
          <input className="input" placeholder="January 23, 2025" value={f.date} onChange={(e) => set("date", e.target.value)} />
        </Field>
      </div>
      <Field label="Excerpt">
        <textarea rows={2} className="input resize-none" value={f.excerpt} onChange={(e) => set("excerpt", e.target.value)} />
      </Field>
      <Field label="Tags (comma-separated)">
        <input className="input" value={f.tags} onChange={(e) => set("tags", e.target.value)} />
      </Field>
      <ImageField value={f.image} onChange={(v) => set("image", v)} />
      <Field label="Body (blank line between paragraphs)">
        <textarea rows={7} className="input resize-none" value={f.body} onChange={(e) => set("body", e.target.value)} />
      </Field>
      <div className="flex gap-3 pt-1">
        <button type="submit" className="btn-primary">Save Post</button>
        <button type="button" onClick={onCancel} className="btn-outline">Cancel</button>
      </div>
    </form>
  );
}

function StoriesAdmin() {
  const { stories, saveStory, deleteStory } = useContent();
  const [editing, setEditing] = useState<Partial<Story> | null>(null);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-2xl text-ink">Stories ({stories.length})</h2>
          <button
            onClick={() => setEditing({ title: "", quote: "", name: "", role: "", image: IMG.home.heroChildren })}
            className="btn-primary !px-5 !py-2.5"
          >
            + New
          </button>
        </div>
        <div className="space-y-3">
          {stories.length === 0 && <div className={empty}>No stories.</div>}
          {stories.map((s) => (
            <div key={s.id} className="flex items-center gap-3 rounded-2xl border border-purple-100 bg-white p-3">
              <img src={s.image} alt="" className="h-14 w-14 shrink-0 rounded-full object-cover" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-ink">{s.title}</p>
                <p className="truncate text-xs text-body">{s.name} · {s.role}</p>
              </div>
              <button onClick={() => setEditing(s)} className="text-sm font-semibold text-purple hover:underline">Edit</button>
              <button onClick={() => confirm(`Delete "${s.title}"?`) && deleteStory(s.id)} className="text-sm font-semibold text-red-500 hover:underline">Delete</button>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] border border-purple-100 bg-white p-6 shadow-soft">
        {editing ? (
          <StoryForm
            key={editing.id ?? "new"}
            initial={editing}
            onSave={(s) => {
              saveStory(s);
              setEditing(null);
            }}
            onCancel={() => setEditing(null)}
          />
        ) : (
          <div className="flex h-full min-h-[200px] items-center justify-center text-center text-sm text-body">
            Select a story to edit, or click <span className="mx-1 font-semibold text-purple">+ New</span>.
          </div>
        )}
      </div>
    </div>
  );
}

function StoryForm({
  initial,
  onSave,
  onCancel,
}: {
  initial: Partial<Story>;
  onSave: (s: Partial<Story>) => void;
  onCancel: () => void;
}) {
  const [f, setF] = useState({
    id: initial.id,
    title: initial.title ?? "",
    quote: initial.quote ?? "",
    name: initial.name ?? "",
    role: initial.role ?? "",
    image: initial.image ?? IMG.home.heroChildren,
  });
  const set = (k: string, v: string) => setF((s) => ({ ...s, [k]: v }));
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(f);
      }}
      className="space-y-4"
    >
      <Field label="Title / headline">
        <input required className="input" value={f.title} onChange={(e) => set("title", e.target.value)} />
      </Field>
      <Field label="Quote">
        <textarea rows={3} className="input resize-none" value={f.quote} onChange={(e) => set("quote", e.target.value)} />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name">
          <input className="input" value={f.name} onChange={(e) => set("name", e.target.value)} />
        </Field>
        <Field label="Role">
          <input className="input" value={f.role} onChange={(e) => set("role", e.target.value)} />
        </Field>
      </div>
      <ImageField value={f.image} onChange={(v) => set("image", v)} />
      <div className="flex gap-3 pt-1">
        <button type="submit" className="btn-primary">Save Story</button>
        <button type="button" onClick={onCancel} className="btn-outline">Cancel</button>
      </div>
    </form>
  );
}

function ImageField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <Field label="Image (pick from library or paste a URL/path)">
      <div className="flex items-center gap-3">
        <img src={value} alt="" className="h-12 w-12 shrink-0 rounded-lg object-cover" />
        <input
          className="input"
          list="img-options"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <datalist id="img-options">
          {IMAGE_OPTIONS.map((src) => (
            <option key={src} value={src} />
          ))}
        </datalist>
      </div>
    </Field>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink">{label}</span>
      {children}
    </label>
  );
}
