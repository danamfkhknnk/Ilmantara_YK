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
export type Project = {
  title: string;
  name?: string;
  slug: string;
  description?: string;
  category?: string;
  year?: string;
  url?: string;
  imageUrl?: string;
  imageAlt?: string;
};
export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  tag?: string;
  color?: string;
};
export type ProcessTag = { label: string; active?: boolean };
export type ProcessStep = {
  index: string;
  week?: string;
  title: string;
  shortBody?: string;
  fullBody?: string;
};
export type Process = { tags: ProcessTag[]; steps: ProcessStep[] };

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
 * Portfolio projects, mirrored from the `portofolio-astro` PROJECTS data.
 * Shown on /work when Sanity has no `project` documents yet.
 */
const PROJECTS_FALLBACK: Project[] = [
  {
    title: "Premium Shopify Website & E-commerce Store for Wellness Brands",
    name: "myart",
    slug: "myart",
    description:
      "With hands-on experience building custom third-party Shopify apps using Laravel, I help store owners solve problems that native Shopify features and existing apps simply can't cover.",
    category: "Shopify Template",
    year: "2025",
    url: "https://test-ihmol6aj.myshopify.com/",
    imageUrl: "/images/work/project-wellness.png",
    imageAlt: "Wellness brands Shopify store",
  },
  {
    title: "Interactive Shopify Art Commission with Real-Time VRM Face Tracking",
    name: "miseart",
    slug: "miseart",
    description:
      "With a strong focus on creative, interactive Shopify experiences, I help brands stand out in a crowded eCommerce space by combining clean, conversion-focused design with cutting-edge interactivity that visitors actually remember.",
    category: "Shopify Template",
    year: "2025",
    url: "https://mise-u5ukp4yf.myshopify.com",
    imageUrl: "/images/work/project-vrm.png",
    imageAlt: "Art commission site with real-time VRM face tracking",
  },
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
 * Client testimonials for Ilmantara web-dev work. Shown on home + work when
 * Sanity has no `testimonial` documents yet.
 */
const TESTIMONIALS_FALLBACK: Testimonial[] = [
  {
    quote:
      "Every sale update broke our old theme. Ilmantara rebuilt it clean, and our checkout hasn't glitched once since. Conversion went from 0.8% to 1.9% in two months.",
    name: "Ayu Lestari",
    role: "Owner, wellness store",
    tag: "myart",
    color: "#FF5B24",
  },
  {
    quote:
      "My old commission form got maybe three requests a month. The new page with the live avatar preview gets that in a week, and half the messages mention the demo.",
    name: "Misa K.",
    role: "Independent illustrator",
    tag: "miseart",
    color: "#10B37A",
  },
  {
    quote:
      "I gave him a messy spreadsheet of subscription rules on Monday. By Friday there was a staging link where I could pause, swap, and prorate everything myself.",
    name: "Dimas Prasetyo",
    role: "Founder, coffee subscription",
    tag: "Laravel",
    color: "#A8562E",
  },
  {
    quote:
      "I was nervous hiring six time zones away. Then the updates started landing every morning my time, with a video walkthrough. Never felt far.",
    name: "Jonas Weber",
    role: "Online retailer, Berlin",
    tag: "Shopify",
    color: "#4B3BFF",
  },
  {
    quote:
      "Fixed price with no surprises, the one thing every other developer got wrong. He replied on WhatsApp faster than my own team.",
    name: "Ratna Dewi",
    role: "Boutique owner, Jakarta",
    tag: "Shopify",
    color: "#D4A72C",
  },
  {
    quote:
      "Only complaint: he's usually booked, so we waited three weeks to start. Worth it. The admin panel he built saves our ops team an hour a day.",
    name: "Andre Wijaya",
    role: "Startup founder",
    tag: "Web app",
    color: "#1FB8A6",
  },
];

/**
 * Testimonials, from `testimonial` documents ordered by `order`:
 *   { quote, name, role, tag, color }
 * Falls back to Ilmantara house testimonials so the sections keep rendering
 * before the documents exist in the dataset.
 */
export async function getTestimonials(
  fallback: Testimonial[] = TESTIMONIALS_FALLBACK
): Promise<Testimonial[]> {
  if (!sanityClient) return fallback;
  try {
    const items = await sanityClient.fetch<Testimonial[] | null>(
      `*[_type == "testimonial"] | order(order asc) { quote, name, role, tag, color }`
    );
    return items?.length ? items : fallback;
  } catch (error) {
    console.error("[sanity] failed to fetch testimonials:", error);
    return fallback;
  }
}

/**
 * Process section content, from the `process` singleton doc (_id: "process"):
 *   { tags: [{ label, active }], steps: [{ index, week, title, shortBody, fullBody }] }
 * Shared by home and work. Falls back to the house copy so the section keeps
 * rendering before the document exists in the dataset.
 */
const PROCESS_FALLBACK: Process = {
  tags: [
    { label: "Discovery", active: true },
    { label: "Full-stack" },
    { label: "API & Database" },
    { label: "Deployment" },
  ],
  steps: [
    {
      index: "01",
      week: "WEEK 1",
      title: "Discover",
      shortBody: "Understand the problem",
      fullBody:
        "I learn about your business, users, and challenges to understand what needs to be built. No assumptions, just the right questions.",
    },
    {
      index: "02",
      week: "WEEK 1-2",
      title: "Define",
      shortBody: "Plan the right solution",
      fullBody:
        "We define the scope, features, and technical approach, turning your ideas into a clear plan with measurable goals.",
    },
    {
      index: "03",
      week: "WEEKS 2-6",
      title: "Develop",
      shortBody: "Build frontend and backend",
      fullBody:
        "I design and build the frontend, backend, APIs, and database, testing each part to make sure everything works together.",
    },
    {
      index: "04",
      week: "WEEK 6+",
      title: "Deliver",
      shortBody: "Launch, test, and optimize",
      fullBody:
        "I deploy your product, test it in production, fix issues, and optimize performance to keep everything running smoothly.",
    },
  ],
};

export async function getProcess(fallback: Process = PROCESS_FALLBACK): Promise<Process> {
  if (!sanityClient) return fallback;
  try {
    const doc = await sanityClient.fetch<Process | null>(
      `*[_type == "process"][0]{tags[]{label, active}, steps[]{index, week, title, shortBody, fullBody}}`
    );
    if (doc?.steps?.length) {
      return { tags: doc.tags?.length ? doc.tags : fallback.tags, steps: doc.steps };
    }
    return fallback;
  } catch (error) {
    console.error("[sanity] failed to fetch process:", error);
    return fallback;
  }
}

/**
 * Portfolio projects, from `project` documents ordered by `order`:
 *   { title, name, slug, description, category, year, url, image{asset, alt} }
 * Falls back to the mirrored portofolio-astro data so /work keeps rendering
 * before the documents exist in the dataset.
 */
export async function getProjects(fallback: Project[] = PROJECTS_FALLBACK): Promise<Project[]> {
  if (!sanityClient) return fallback;
  try {
    const items = await sanityClient.fetch<Project[] | null>(
      `*[_type == "project"] | order(order asc) {
        title, name, "slug": slug.current, description, category, year, url,
        "imageUrl": image.asset->url, "imageAlt": image.alt
      }`
    );
    return items?.length ? items : fallback;
  } catch (error) {
    console.error("[sanity] failed to fetch projects:", error);
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
