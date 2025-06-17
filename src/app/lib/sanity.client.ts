import { createClient, type QueryParams } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!; // "pv8y60vp"
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!; // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION; // "2022-11-16"
export const token = process.env.NEXT_PUBLIC_SANITY_API_KEY;
export const preview_token = process.env.NEXT_PUBLIC_SANITY_PREVIEW_KEY;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
  //stega: { studioUrl: process.env.NEXT_PUBLIC_STUDIO_URL }
});

export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60, // default revalidation time in seconds
  tags = [],
}: {
  query: QueryString
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}) {
  return client.fetch(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate, // for simple, time-based revalidation
      tags, // for tag-based revalidation
    },
  })
}