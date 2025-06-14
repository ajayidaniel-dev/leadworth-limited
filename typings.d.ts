import { Reference } from "sanity";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  author: Author[];
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  publishedAt?: string;
  keywords: string;
  relatedPosts: Post[];
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
  connect: string;
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage {
  _type: "block";
  asset: Reference;
}
interface Title {
  _type: "block";
  current: string;
}

interface Admin {
  spacelink: string;
  spacename: string;
  spacedesc: string;
  spaceimage: Image;
  communitylink: string;
  communitydesc: string;
  partnerdesc: Block[];
  partnerlink: string;
}

interface Trending {
  id: string;
  title: string;
  description: string;
  post: Post;
}
