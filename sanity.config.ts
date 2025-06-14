import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/schemas";
import { myTheme } from "./theme";
import StudioNavbar from "./src/app/components/StudioNavBar";
import { structureTool } from 'sanity/structure';
import Logo from "./src/app/components/Logo";
import { presentationTool } from 'sanity/presentation';
import { resolve } from "./sanity.presentation.resolve";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export default defineConfig({
  basePath: "/studio",
  name: "leadworth",
  title: "Leadworth Consulting Limited",
  icon: Logo,
  projectId,
  dataset,

  plugins: [

    structureTool({
      //defaultDocumentNode: defaultDocumentNode,
    }),
    visionTool(),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,

});
