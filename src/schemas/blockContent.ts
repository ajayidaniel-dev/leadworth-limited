import { defineType, defineArrayMember } from "sanity";

export default defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" },
        { title: "Quote", value: "blockquote" },
        { title: "Code", value: "code" },
        { title: "Categories", value: "div" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Code", value: "code" },
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strike Through", value: "strike-through" },
          { title: "Highlight", value: "highlight" },
        ],
        annotations: [
          {
            title: "Link",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({ type: "image", options: { hotspot: true } }),
    // Define structure for video, audio, and iframe as objects
    defineArrayMember({
      type: "object",
      name: "video",
      title: "Video",
      fields: [
        { type: "file", name: "url", title: "Video URL" },
        // Add more fields as needed
      ],
    }),
    defineArrayMember({
      type: "object",
      name: "audio",
      title: "Audio",
      fields: [
        { type: "file", name: "url", title: "Audio URL" },
        // Add more fields as needed
      ],
    }),
    defineArrayMember({
      type: "object",
      name: "iframe",
      title: "iFrame",
      fields: [
        { type: "url", name: "url", title: "iFrame URL" },
        // Add more fields as needed
      ],
    }),
    // Add more types or adjust as needed
  ],
});
