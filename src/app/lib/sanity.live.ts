import { createClient, defineLive } from 'next-sanity'
import { preview_token } from './sanity.client'

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // Target the experimental API version
    stega: { studioUrl: '/studio' },
})


if (!preview_token) {
    throw new Error('Missing SANITY_API_READ_TOKEN')
}

export const { sanityFetch, SanityLive } = defineLive({
    client: client.withConfig({ apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION }),
    serverToken: preview_token,
    browserToken: preview_token,
})