import React from "react";
import { defineQuery, groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../components/RichTextComponents";
import Link from "next/link";
import Comment from "../../../components/Comment";
import SharePost from "../../../components/SharePost";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Post } from "../../../../../typings.d";
import { sanityFetch } from "../../../lib/sanity.live";
import RelatedPosts from "../../../components/RelatedPosts";

// Brand colors
const NAVY = "#130F45";
const ORANGE = "#F45625";
// const LIGHT = "#F8F9FB";
// const CHARCOAL = "#23272F";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// Reusable query for both metadata and page data
const POST_QUERY = `*[_type=="post" && slug.current == $slug][0]{
  ...,
  author[]->,
  categories[]->,
  relatedPosts[]->{
    ...,
    author[]->,
    categories[]->,
  }
}`;

export const generateStaticParams = async () => {
  const query = groq`*[_type=="post" && !(_id in path("drafts.**"))]{
    slug
  }`;
  const slugs: Post[] = await client.fetch(query);
  return slugs.map((slug) => ({
    slug: slug?.slug?.current,
  }));
};

export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const query = defineQuery(POST_QUERY);
  const post: Post = (await sanityFetch({ query, params: { slug } })).data;

  if (!post) return {};

  const imageUrl = urlFor(post?.mainImage).url();

  return {
    title: post.title,
    description: post.description,
    icons: {
      icon: imageUrl,
      shortcut: imageUrl,
      apple: imageUrl,
    },
    applicationName: post.title,
    twitter: {
      card: "summary_large_image",
      site: "@techgix",
      creator: "@impulsejs",
      images: imageUrl,
      description: post.description,
      title: post.title,
    },
    alternates: {
      canonical: `https://techgix.xyz/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      url: `https://techgix.xyz/blog/${slug}`,
      title: post.title,
      description: post.description,
      siteName: "Techgix",
      images: [{ url: imageUrl }],
      publishedTime: post._createdAt,
      modifiedTime: post._updatedAt,
    },
    keywords: post.keywords?.split(" "),
  };
}

function PostHeader({ post }: { post: Post }) {
  return (
    <section
      className="relative rounded-2xl overflow-hidden mb-8 shadow-lg"
      style={{
        background: `linear-gradient(90deg, ${NAVY} 60%, ${ORANGE} 100%)`,
      }}
    >
      <div className="relative aspect-[21/9] w-full">
        <Image
          className="object-cover"
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#130F45]/95 via-[#130F45]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#F45625]/10 to-[#130F45]/10" />
      </div>

      <div className="relative px-4 sm:px-8 py-10 -mt-24 md:-mt-36">
        <div className="max-w-4xl mx-auto bg-[#130F45]/80 rounded-xl p-4 sm:p-8 shadow-xl backdrop-blur-md">
          <div className="flex flex-wrap gap-2 mb-4 items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-[#F45625] animate-pulse mr-2" />
            {post.categories.map((category) => (
              <span
                key={category._id}
                className="px-3 py-1 text-xs sm:text-sm font-semibold text-white bg-[#F45625] shadow-md rounded-full tracking-wide border-2 border-white/10"
              >
                {category.title}
              </span>
            ))}
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 drop-shadow-xl leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-white/80 mb-6 max-w-2xl">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex flex-wrap gap-4">
              {post.author?.map((author) => (
                <Link
                  key={author._id}
                  href={`/writers/${author.slug?.current}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-[#F45625]/60 group-hover:ring-[#F45625] transition-all shadow-md">
                    <Image
                      src={urlFor(author.image).url()}
                      alt={author.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold group-hover:text-[#F45625] transition-colors">
                      {author.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70">
                      {new Date(
                        post.publishedAt || post._createdAt
                      ).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PostPage = async ({ params }: Props) => {
  const { slug } = await params;
  const query = defineQuery(POST_QUERY);
  const post: Post = (await sanityFetch({ query, params: { slug } })).data;

  if (!post) return notFound();

  return (
    <article className="min-h-screen pb-20 bg-[#F8F9FB] ">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <PostHeader post={post} />

        <div className="rounded-2xl bg-white shadow-xl p-4 sm:p-8 -mt-6 mb-12 relative z-10">
          <div className="prose prose-lg prose-primary mx-auto max-w-none text-[#23272F]">
            <PortableText value={post.body} components={RichTextComponents} />
          </div>

          <div className="mt-10">
            <SharePost {...post} />
          </div>

          {post.relatedPosts?.length > 0 && (
            <div className="mt-12">
              <RelatedPosts posts={post.relatedPosts} />
            </div>
          )}

          <div className="mt-16">
            <Comment id={post._id} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostPage;
