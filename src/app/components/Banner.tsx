import { Post, Trending } from "../../../typings.d";
import ClientSideRoute from "../components/clientSideRoute";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { timeAgo } from "../lib/time";
import { memo, useMemo } from "react";
import { HiChartBar, HiArrowRight } from "react-icons/hi2";

const TrendingPost = memo(({ post }: { post: Trending }) => {
  const authorName = useMemo(
    () =>
      (post?.post?.author &&
        post?.post?.author[0]?.name.split(" ").slice(0, 2).join(" ")) ||
      "Techgix",
    [post?.post?.author]
  );

  const postDate = useMemo(
    () =>
      timeAgo(
        post?.post?.publishedAt
          ? post?.post?.publishedAt
          : post?.post?._createdAt
      ),
    [post?.post?.publishedAt, post?.post?._createdAt]
  );

  return (
    <ClientSideRoute
      key={post?.post?._id}
      route={`/blog/${post?.post?.slug?.current}`}
    >
      <article className="group cursor-pointer">
        <div className="flex gap-4 bg-white rounded-xl p-4 hover:shadow-xl hover:border-[#F45625] border border-gray-100 transition-all duration-200">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 overflow-hidden rounded-lg">
            {post?.post?.mainImage && (
              <Image
                loading="lazy"
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                src={urlFor(post?.post?.mainImage).url()}
                alt={post?.title || "Trending post image"}
                fill
                sizes="(max-width: 768px) 80px, 96px"
              />
            )}
          </div>
          <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
            <div>
              <h3 className="text-base font-semibold text-[#130F45] line-clamp-2 group-hover:text-[#F45625] transition-colors">
                {post.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                {post?.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-2 text-xs">
              <p className="font-medium text-gray-700">{authorName}</p>
              <time className="text-gray-400">{postDate}</time>
            </div>
          </div>
        </div>
      </article>
    </ClientSideRoute>
  );
});

TrendingPost.displayName = "TrendingPost";

const MainPost = memo(({ post }: { post: Post }) => {
  const authorName = useMemo(
    () => post?.author[0]?.name.split(" ").slice(0, 2).join(" ") || "Techgix",
    [post?.author]
  );

  const postDate = useMemo(
    () => timeAgo(post?.publishedAt ? post?.publishedAt : post?._createdAt),
    [post?.publishedAt, post?._createdAt]
  );

  return (
    <ClientSideRoute route={`/blog/${post?.slug?.current}`}>
      <article className="group cursor-pointer bg-gradient-to-br from-[#130F45]/90 via-[#F45625]/10 to-[#F8F9FB] rounded-2xl overflow-hidden border-2 border-[#130F45]/10 hover:border-[#F45625] shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="relative w-full h-72 lg:h-[400px] overflow-hidden">
          {post?.mainImage && (
            <Image
              loading="eager"
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              src={urlFor(post?.mainImage).url()}
              alt={post?.title || "Featured post image"}
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#130F45]/80 via-transparent to-transparent" />
        </div>

        <div className="p-6 lg:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post?.categories?.map((category) => (
              <span
                key={category._id}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-[#F45625]/10 text-[#F45625] border border-[#F45625]/30"
              >
                {category.title}
              </span>
            ))}
          </div>

          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#130F45] mb-3 group-hover:text-[#F45625] transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-700 text-lg mb-6 line-clamp-2">
            {post?.description}
          </p>

          <div className="flex items-center justify-between border-t border-[#F45625]/20 pt-6">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12">
                <Image
                  className="rounded-full ring-2 ring-[#F45625]/20 object-cover"
                  src={urlFor(post?.author[0]?.image).url() || "/Logo.jpg"}
                  alt={`${authorName}'s profile picture`}
                  fill
                  sizes="48px"
                />
              </div>
              <div>
                <p className="font-medium text-[#130F45]">{authorName}</p>
                <time className="text-sm text-gray-500">{postDate}</time>
              </div>
            </div>
            <div className="flex items-center text-[#F45625] group-hover:translate-x-2 transition-transform">
              <span className="mr-2 font-medium">Read More</span>
              <HiArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </article>
    </ClientSideRoute>
  );
});

MainPost.displayName = "MainPost";

const Banner = memo(
  ({ post, trending }: { post: Post; trending: Trending[] }) => {
    return (
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-8/12">
            <MainPost post={post} />
          </div>

          <aside className="lg:w-4/12 mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-[#FFF7F3] via-white to-[#F8F9FB] rounded-2xl p-6 border-2 border-[#F45625]/20 shadow-lg sticky top-24">
              <div className="flex items-center gap-2 pb-6 border-b border-[#F45625]/20 relative">
                <HiChartBar className="w-5 h-5 text-[#F45625] animate-bounce" />
                <h2 className="text-xl font-bold text-[#130F45]">
                  Trending Now
                </h2>
                <span className="absolute right-0 top-1.5 w-3 h-3 rounded-full bg-[#F45625] animate-pulse shadow-lg" />
              </div>
              <div className="space-y-4 mt-6">
                {trending?.map((post) => (
                  <TrendingPost key={post?.post?._id} post={post} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }
);

Banner.displayName = "Banner";

export default Banner;
