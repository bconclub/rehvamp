// SEO constants shared by the <Seo> component and the build-time prerender.
import { SITE } from "./site";

export const SITE_URL = "https://rehvampfoundation.org";
export const DEFAULT_OG = "/og/og-default.jpg";
export const TITLE_SUFFIX = SITE.name; // "REHVAMP Foundation"

/** Compose the <title>: home passes its own full string, others get the suffix. */
export function pageTitle(title: string, bare = false) {
  return bare ? title : `${title} · ${TITLE_SUFFIX}`;
}

/** Make an OG/canonical-safe absolute URL from a path or pass through a full URL. */
export function absoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  return SITE_URL + (pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`);
}
