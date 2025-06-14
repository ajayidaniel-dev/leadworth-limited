import { defineField, defineType } from "sanity";

export default defineType({
  name: "emails",
  title: "Emails",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "email",
    },
  },
});
