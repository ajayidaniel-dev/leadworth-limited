import { defineField, defineType } from "sanity";

export default defineType({
  name: "admin",
  title: "Admin",
  type: "document",

  fields: [
    defineField({
      name: "note",
      title: "Note",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "spacelink",
      title: "SpaceLink",
      type: "string",
    }),
    defineField({
      name: "spacename",
      title: "SpaceName",
      type: "string",
    }),
    defineField({
      name: "spacedesc",
      title: "SpaceDesc",
      type: "string",
    }),
    defineField({
      name: "spaceimage",
      title: "SpaceImage",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "communitylink",
      title: "CommunityLink",
      type: "string",
    }),
    defineField({
      name: "communitydesc",
      title: "CommunityDesc",
      type: "string",
    }),
    defineField({
      name: "communityadvantage",
      title: "CommunityAdvantage",
      type: "string",
    }),
    defineField({
      name: "partnerdesc",
      title: "PartnerDesc",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    }),
    defineField({
      name: "partnerlink",
      title: "PartnerLink",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      note: "note",
      media: "logo",
    },
    prepare(selection) {
      const { note } = selection;
      return { ...selection, subtitle: note && note };
    },
  },
});
