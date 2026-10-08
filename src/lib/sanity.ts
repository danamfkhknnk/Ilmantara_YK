import { createClient } from "@sanity/client";

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET || "production";
const apiVersion = import.meta.env.SANITY_API_VERSION || "2024-01-01";
const token = import.meta.env.SANITY_API_TOKEN || undefined;

export const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion, token, useCdn: !token })
  : null;

/**
 * Site name shown in the header/logo, from a `siteSettings` singleton doc:
 *   { _type: "siteSettings", name: "Ilmantara" }
 * Falls back when SANITY_PROJECT_ID isn't set yet or the query fails, so the
 * site keeps rendering during local dev before the project is created.
 */
export async function getSiteName(fallback = "Ilmantara"): Promise<string> {
  if (!sanityClient) return fallback;
  try {
    const name = await sanityClient.fetch<string | null>(
      `*[_type == "siteSettings"][0].name`
    );
    return name || fallback;
  } catch (error) {
    console.error("[sanity] failed to fetch site name:", error);
    return fallback;
  }
}
