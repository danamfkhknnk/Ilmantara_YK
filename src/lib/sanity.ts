import { createClient } from "@sanity/client";

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET || "production";
const apiVersion = import.meta.env.SANITY_API_VERSION || "2024-01-01";
const token = import.meta.env.SANITY_API_TOKEN || undefined;

export const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion, token, useCdn: !token })
  : null;

export type NavItem = { label: string; href: string };
export type SocialItem = { label: string; href: string; muted?: boolean };
export type SiteSettings = { name: string; location: string };

const SITE_SETTINGS_FALLBACK: SiteSettings = {
  name: "Ilmantara",
  location: "Yogyakarta, Indonesia",
};

const NAVIGATION_FALLBACK: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Playground", href: "/playground" },
];

const SOCIAL_LINKS_FALLBACK: SocialItem[] = [
  { label: "LinkedIn", href: "#" },
  { label: "Upwork", href: "#" },
  { label: "hello@ilmantara.com", href: "mailto:hello@ilmantara.com", muted: true },
];

/**
 * Studio name + location, from the `siteSettings` singleton doc
 * (_id: "siteSettings"): { name: "Ilmantara", location: "Yogyakarta, Indonesia" }
 * Falls back when SANITY_PROJECT_ID isn't set or the query fails, so the
 * site keeps rendering even before the document exists in the dataset.
 */
export async function getSiteSettings(
  fallback: SiteSettings = SITE_SETTINGS_FALLBACK
): Promise<SiteSettings> {
  if (!sanityClient) return fallback;
  try {
    const doc = await sanityClient.fetch<Partial<SiteSettings> | null>(
      `*[_type == "siteSettings"][0]{name, location}`
    );
    return {
      name: doc?.name || fallback.name,
      location: doc?.location || fallback.location,
    };
  } catch (error) {
    console.error("[sanity] failed to fetch site settings:", error);
    return fallback;
  }
}

/** Convenience wrapper for just the name, e.g. the header logo. */
export async function getSiteName(fallback = SITE_SETTINGS_FALLBACK.name): Promise<string> {
  const settings = await getSiteSettings({ ...SITE_SETTINGS_FALLBACK, name: fallback });
  return settings.name;
}

/**
 * Main menu, from the `navigation` singleton doc (_id: "navigation"):
 *   { items: [{ label: "Home", href: "/" }, ...] }
 * Shared by the header nav and the footer's "Pages" column, so editing it
 * in Sanity updates both.
 */
export async function getNavigation(fallback: NavItem[] = NAVIGATION_FALLBACK): Promise<NavItem[]> {
  if (!sanityClient) return fallback;
  try {
    const items = await sanityClient.fetch<NavItem[] | null>(
      `*[_type == "navigation"][0].items[]{label, href}`
    );
    return items?.length ? items : fallback;
  } catch (error) {
    console.error("[sanity] failed to fetch navigation:", error);
    return fallback;
  }
}

/**
 * Social / contact links, from the `socialLinks` singleton doc
 * (_id: "socialLinks"): { items: [{ label, href, muted? }, ...] }
 * Used by the footer's "Elsewhere" column.
 */
export async function getSocialLinks(fallback: SocialItem[] = SOCIAL_LINKS_FALLBACK): Promise<SocialItem[]> {
  if (!sanityClient) return fallback;
  try {
    const items = await sanityClient.fetch<SocialItem[] | null>(
      `*[_type == "socialLinks"][0].items[]{label, href, muted}`
    );
    return items?.length ? items : fallback;
  } catch (error) {
    console.error("[sanity] failed to fetch social links:", error);
    return fallback;
  }
}
