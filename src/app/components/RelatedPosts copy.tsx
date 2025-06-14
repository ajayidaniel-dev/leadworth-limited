"use client";

import { Post } from "@/typings";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { timeAgo } from "@/lib/time";
import ClientSideRoute from "./clientSideRoute";
import { HiArrowSmallRight } from "react-icons/hi2";
import { memo } from "react";

const RelatedPosts = ({ posts }: { posts: Post[] }) => {
  if (!posts?.length) return null;

  return (
    <section className="mt-16 mb-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Related Articles
        </h2>
        <div className="h-px flex-1 mx-6 bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/blog/${post.slug.current}`}>
            <article className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-200">
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
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                  {post.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <Image
                      className="rounded-full ring-2 ring-gray-100 dark:ring-gray-700"
                      width={32}
                      height={32}
                      src={urlFor(post.author[0].image).url()}
                      alt={`${post.author[0].name}'s profile picture`}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {post.author[0].name.split(" ").slice(0, 2).join(" ")}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {timeAgo(post.publishedAt || post._createdAt)}
                      </p>
                    </div>
                  </div>
                  <HiArrowSmallRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
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
