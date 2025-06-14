import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";
import { PortableTextComponents } from "@portabletext/react";

interface ImageValue {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
}

interface VideoValue {
  _type: "video";
  url: string;
  poster?: string;
}

interface AudioValue {
  _type: "audio";
  url: string;
}

interface IframeValue {
  _type: "iframe";
  url: string;
  title?: string;
}

interface MarkProps {
  children: React.ReactNode;
  value?: {
    href?: string;
  };
}

export const RichTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset?._ref) return null;

      return (
        <figure className="my-8 relative">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
            <Image
              className="object-cover transition-transform duration-500 hover:scale-105"
              src={urlFor(value.asset._ref).url()}
              alt={value.alt || "Blog content image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw"
              priority={false}
            />
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-gray-500 ">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    video: ({ value }: { value: VideoValue }) => {
      if (!value?.url) return null;
      return (
        <div className="my-8 overflow-hidden rounded-xl">
          <video controls className="w-full" poster={value.poster}>
            <source src={value.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    },
    audio: ({ value }: { value: AudioValue }) => {
      if (!value?.url) return null;
      return (
        <div className="my-8">
          <audio controls className="w-full">
            <source src={value.url} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        </div>
      );
    },
    iframe: ({ value }: { value: IframeValue }) => {
      if (!value?.url) return null;
      return (
        <div className="my-8">
          <div className="relative aspect-video w-full rounded-xl overflow-hidden">
            <iframe
              src={value.url}
              title={value.title || "Embedded content"}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            />
          </div>
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-xl list-disc pl-6 space-y-3 text-gray-700 ">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-lg list-decimal pl-6 space-y-3 text-gray-700 ">
        {children}
      </ol>
    ),
  },
  block: {
    h1: ({ children }) => {
      const id = children?.toString().toLowerCase().replaceAll(" ", "-");
      return (
        <h1 className="relative text-4xl font-extrabold mt-10 mb-6 text-[#130F45] border-l-8 border-[#F45625] pl-4 bg-[#FFF7F3] rounded-r-xl shadow-sm">
          {children}
          {id && <div id={id} className="absolute -top-20" />}
        </h1>
      );
    },
    h2: ({ children }) => {
      const id = children?.toString().toLowerCase().replaceAll(" ", "-");
      return (
        <h2 className="relative text-3xl font-bold mt-8 mb-5 text-[#130F45] border-l-4 border-[#F45625] pl-3 bg-[#FFF7F3] rounded-r-lg shadow-sm">
          {children}
          {id && <div id={id} className="absolute -top-20" />}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = children?.toString().toLowerCase().replaceAll(" ", "-");
      return (
        <h3 className="relative text-2xl font-semibold mt-6 mb-4 text-[#130F45] border-l-4 border-[#F45625] pl-3 bg-[#FFF7F3] rounded-r-lg shadow-sm">
          {children}
          {id && <div id={id} className="absolute -top-20" />}
        </h3>
      );
    },
    h4: ({ children }) => {
      const id = children?.toString().toLowerCase().replaceAll(" ", "-");
      return (
        <h4 className="relative text-xl font-semibold mt-5 mb-3 text-[#130F45] border-l-4 border-[#F45625] pl-3 bg-[#FFF7F3] rounded-r-md shadow-sm">
          {children}
          {id && <div id={id} className="absolute -top-20" />}
        </h4>
      );
    },
    h5: ({ children }) => {
      const id = children?.toString().toLowerCase().replaceAll(" ", "-");
      return (
        <h5 className="relative text-lg font-semibold mt-4 mb-2 text-[#130F45] border-l-2 border-[#F45625] pl-2 bg-[#FFF7F3] rounded-r shadow-sm">
          {children}
          {id && <div id={id} className="absolute -top-20" />}
        </h5>
      );
    },
    h6: ({ children }) => {
      const id = children?.toString().toLowerCase().replaceAll(" ", "-");
      return (
        <h6 className="relative text-base font-semibold mt-3 mb-2 text-[#130F45] border-l-2 border-[#F45625] pl-2 bg-[#FFF7F3] rounded-r shadow-sm">
          {children}
          {id && <div id={id} className="absolute -top-20" />}
        </h6>
      );
    },
    normal: ({ children }) => (
      <p className="text-lg leading-relaxed mb-6 text-gray-700 ">{children}</p>
    ),
    div: ({ children }) => {
      const data = children?.toString()?.split(" ") || [];
      return (
        <nav className="my-8 p-6 bg-[#FFF7F3] rounded-xl border border-[#F45625]/20">
          <div className="flex flex-wrap gap-3">
            {data.map((item: string, i: number) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-white text-[#130F45] hover:bg-[#F45625]/10 transition-colors border border-[#F45625]/10"
              >
                {item.replaceAll("-", " ")}
              </a>
            ))}
          </div>
        </nav>
      );
    },
    blockquote: ({ children }) => (
      <blockquote className="my-8 pl-6 pr-4 py-4 border-l-8 border-[#F45625] bg-[#FFF7F3] rounded-xl shadow-md italic text-[#130F45] text-lg">
        {children}
      </blockquote>
    ),
  },
  marks: {
    em: ({ children }: MarkProps) => (
      <em className="italic text-[#130F45]">{children}</em>
    ),
    strong: ({ children }: MarkProps) => (
      <strong className="font-bold text-[#F45625]">{children}</strong>
    ),
    highlight: ({ children }: MarkProps) => (
      <mark className="bg-[#FFF7F3] text-[#130F45] px-1 rounded border-b-2 border-[#F45625]">
        {children}
      </mark>
    ),
    link: ({ children, value }: MarkProps) => {
      const rel = "noreferrer noopener";
      const href = value?.href || "#";
      return (
        <Link
          href={href}
          rel={rel}
          target="_blank"
          className="text-[#F45625] hover:underline decoration-[#F45625] decoration-2 underline-offset-2 transition-colors"
        >
          {children}
        </Link>
      );
    },
    code: ({ children }: MarkProps) => (
      <code className="px-2 py-1 rounded-md bg-[#F8F9FB] text-sm font-mono text-[#130F45] border border-[#F45625]/20">
        {children}
      </code>
    ),
  },
};
