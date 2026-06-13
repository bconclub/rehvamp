import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL, DEFAULT_OG, pageTitle, absoluteUrl } from "../seo";

// Per-page <head> manager. Updates the document title and all SEO/social meta
// tags on navigation. No dependency — it upserts tags directly so it works
// with the static index.html defaults (and the build-time prerender, which
// bakes the same values into each route's HTML for crawlers that don't run JS).
function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  image,
  bareTitle = false,
  noindex = false,
}: {
  title: string;
  description: string;
  image?: string;
  bareTitle?: boolean;
  noindex?: boolean;
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = pageTitle(title, bareTitle);
    const url = SITE_URL + pathname;
    const img = absoluteUrl(image ?? DEFAULT_OG);

    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex,nofollow" : "index,follow");

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "REHVAMP Foundation");
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:image", img);
    upsertMeta("property", "og:url", url);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", img);

    upsertLink("canonical", url);
  }, [title, description, image, bareTitle, noindex, pathname]);

  return null;
}
