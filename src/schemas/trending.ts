import { defineField, defineType } from "sanity";

export default defineType({
  name: "trending",
  title: "Trending",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      description: "enter a description for the blog post",
      title: "Description",
      type: "string",
    }),

    defineField({
      name: "post",
      title: "Post",
      type: "reference",
      to: [{ type: "post" }],
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "post.name",
      media: "post.mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
