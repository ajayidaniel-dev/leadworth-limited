import { draftMode } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import BlogList from "../../components/BlogList";
import Pagination from "../../components/Pagination";
import Banner from "../../components/Banner";
import { Suspense } from "react";
import { sanityFetch } from "../../lib/sanity.live";

const query = groq`*[_type=="post"] {
  ...,
  author[]->,
  categories[]->
} | order(_createdAt desc)[0..12]`;
export const revalidate = 60; // revalidate this page every 60 seconds

export default async function HomePage() {
  const trend_query = groq`*[_type=="trending"] {
    ...,
  post->{
    ...,
    author[]->
  }
} | order(_createdAt desc)[0..2]`;
  const trending = await sanityFetch({ query: trend_query });
  const mode = await draftMode();
  const posts = await sanityFetch({ query });
  const total = groq`count(*[_type=="post" ])`;
  const resTotal: number = await client.fetch(total);

  if (posts.data.length === 0) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FB] pb-20">
        <div className="mb-6">
          <span className="text-6xl">📝</span>
        </div>
        <h2 className="text-2xl font-bold text-[#130F45] mb-2">
          No blog posts yet!
        </h2>
        <p className="text-gray-600 text-center max-w-md">
          Check back soon for updates, insights, and stories from the Leadworth
          team.
        </p>
      </section>
    );
  }

  if (mode.isEnabled) {
    return (
      <Suspense fallback={<div>Loading preview...</div>}>
        <section className="min-h-screen max-w-7xl mx-auto bg-[#F8F9FB] pb-20">
          <div className="transition-all duration-700 ease-out">
            <Banner trending={trending.data} post={posts.data[0]} />
          </div>

          <div className=" mt-8  transition-all duration-700 ease-out">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#130F45] flex items-center gap-4">
              Latests
              <span className="inline-block w-16 h-1 rounded-full bg-[#F45625] animate-pulse" />
            </h2>
          </div>

          <div className="transition-all duration-700 ease-out">
            <BlogList posts={posts.data.slice(1, 13)} />
          </div>

          <div className="transition-all duration-700 ease-out">
            <Pagination slug="page" total={resTotal} page={1} />
          </div>

          <a
            rel="norefferer"
            className="flex self-center my-8"
            href={"/api/draft-mode/disable"}
          >
            <button className="bg-gray-700 mx-auto transition-all duration-1000 ease-out  w-[200px] py-3 rounded-lg text-white font-semibold active:scale-95 text-[16px] leading-7">
              Leave Draft Mode
            </button>
          </a>
        </section>
      </Suspense>
    );
  }

  return (
    <section className="min-h-screen  bg-[#F8F9FB] pb-20">
      <div className="transition-all duration-700 ease-out">
        <Banner trending={trending.data} post={posts.data[0]} />
      </div>

      <div className="mt-8  transition-all max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8 duration-700 ease-out">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#130F45] flex items-center gap-4">
          Latest Insights
          <span className="inline-block w-16 h-1 rounded-full bg-[#F45625] animate-pulse" />
        </h2>
      </div>

      <div className="transition-all duration-700 ease-out">
        <BlogList posts={posts.data.slice(1, 13)} />
      </div>

      <div className="transition-all duration-700 ease-out">
        <Pagination slug="page" total={resTotal} page={1} />
      </div>
    </section>
  );
}
