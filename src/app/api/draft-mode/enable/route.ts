
import { client, preview_token } from '../../../lib/sanity.client';
import { defineEnableDraftMode } from 'next-sanity/draft-mode'

export const { GET } = defineEnableDraftMode({
    client: client.withConfig({ token: preview_token }),
})