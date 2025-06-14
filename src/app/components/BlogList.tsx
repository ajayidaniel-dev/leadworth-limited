"use client";

import urlFor from "../lib/urlFor";
import Image from "next/image";
import ClientSideRoute from "./clientSideRoute";
import { Post } from "../../../typings.d";
import { timeAgo } from "../lib/time";
import React, { memo, useMemo } from "react";

type Props = {
  posts: Post[];
};

const BlogPostCard = memo(({ post }: { post: Post }) => {
  const authorName = useMemo(
    () =>
      (post?.author &&
        post?.author[0]?.name.split(" ").slice(0, 2).join(" ")) ||
      "Techgix",
    [post?.author]
  );

  const postDate = useMemo(
    () => timeAgo(post?.publishedAt ? post?.publishedAt : post?._createdAt),
    [post?.publishedAt, post?._createdAt]
  );

  return (
    <ClientSideRoute
      key={post._id + post._createdAt}
      route={`/blog/${post?.slug?.current}`}
    >
      <div className="flex flex-col group cursor-pointer rounded-2xl bg-gradient-to-br from-[#FFF7F3] via-white to-[#F8F9FB] border-2 border-[#130F45]/10 hover:border-[#F45625] shadow-lg hover:shadow-2xl transition-all duration-300 p-4 md:p-6">
        <div className="relative w-full h-48 lg:h-64 overflow-hidden rounded-xl">
          {post?.mainImage && (
            <Image
              loading="lazy"
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              src={urlFor(post?.mainImage).url()}
              alt={post?.title || "Blog post image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
            />
          )}
        </div>
        <div className="mt-6 space-y-4 flex-1 flex flex-col">
          <div className="flex flex-wrap gap-2">
            {post?.categories?.map((category) => (
              <div
                key={category._id}
                className="text-[#F45625] text-xs font-semibold px-3 py-1 rounded-full bg-[#F45625]/10 border border-[#F45625]/30 hover:bg-[#F45625]/20 transition-colors"
              >
                {category.title}
              </div>
            ))}
          </div>
          <div className="space-y-2 flex-1">
            <h3 className="text-xl font-extrabold tracking-tight line-clamp-2 text-[#130F45] group-hover:text-[#F45625] transition-colors">
              {post.title}
            </h3>
            <p className="text-sm line-clamp-2 text-gray-600">
              {post?.description}
            </p>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-[#F45625]/20 mt-auto">
            <div className="flex items-center space-x-3">
              <Image
                className="rounded-full object-cover ring-2 ring-[#F45625]/20"
                width={32}
                height={32}
                src={
                  (post?.author && urlFor(post?.author[0].image).url()) ||
                  "/Logo.jpg"
                }
                alt={`${post?.author?.[0]?.name || "Author"}'s profile picture`}
              />
              <span className="text-sm font-semibold text-[#130F45] group-hover:text-[#F45625] transition-colors">
                {authorName}
              </span>
            </div>
            <time className="text-xs text-gray-400">{postDate}</time>
          </div>
        </div>
      </div>
    </ClientSideRoute>
  );
});

BlogPostCard.displayName = "BlogPostCard";

const BlogList = ({ posts }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-2 sm:px-4 lg:px-10 gap-8 gap-y-12 pb-24">
        {posts.map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default memo(BlogList);
