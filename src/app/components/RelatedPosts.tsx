"use client";

import { Post } from "../../../typings.d";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { timeAgo } from "../lib/time";
import ClientSideRoute from "./clientSideRoute";
import { HiArrowSmallRight } from "react-icons/hi2";
import { memo } from "react";

const RelatedPosts = ({ posts }: { posts: Post[] }) => {
  if (!posts?.length) return null;

  return (
    <section className="mt-16 mb-12">
      <div className="flex items-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#130F45] tracking-tight flex items-center">
          <span className="inline-block w-2 h-8 bg-[#F45625] rounded-full mr-3" />
          Related Articles
        </h2>
        <div className="h-px flex-1 mx-6 bg-[#F45625]/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/blog/${post.slug.current}`}>
            <article className="group cursor-pointer bg-white rounded-2xl overflow-hidden border-2 border-[#F45625]/10 hover:border-[#F45625] shadow-md hover:shadow-lg hover:shadow-[#F45625]/20 transition-all duration-200">
              <div className="relative aspect-[16/9] overflow-hidden">
                {post?.mainImage && (
                  <Image
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                  />
                )}
              </div>

              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories?.map((category) => (
                    <span
                      key={category._id}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#F45625]/10 text-[#F45625] border border-[#F45625]/30"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-[#130F45] mb-2 line-clamp-2 group-hover:text-[#F45625] transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                  {post.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Image
                      className="rounded-full ring-2 ring-[#F45625]/20"
                      width={32}
                      height={32}
                      src={urlFor(post.author[0].image).url()}
                      alt={`${post.author[0].name}'s profile picture`}
                    />
                    <div>
                      <p className="text-sm font-medium text-[#130F45]">
                        {post.author[0].name.split(" ").slice(0, 2).join(" ")}
                      </p>
                      <p className="text-xs text-gray-500">
                        {timeAgo(post.publishedAt || post._createdAt)}
                      </p>
                    </div>
                  </div>
                  <HiArrowSmallRight className="w-5 h-5 text-[#F45625] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </article>
          </ClientSideRoute>
        ))}
      </div>
    </section>
  );
};

export default memo(RelatedPosts);
