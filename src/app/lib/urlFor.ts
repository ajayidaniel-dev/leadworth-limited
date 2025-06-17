import { client } from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function urlFor(source: any) {
  if (!source) {
    return { url: () => "/light_logo.png" };
  }
  return builder?.image(source) || "/light_logo.png";
}
