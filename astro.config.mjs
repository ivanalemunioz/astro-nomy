import db from "@astrojs/db";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import simpleStackForm from "simple-stack-form";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://master.d2d6nm464xuoqs.amplifyapp.com",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark-dimmed",
      },
      gfm: true,
    }),
    icon(),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    db(),
    simpleStackForm(),
  ],
  output: "static",
  // adapter: vercel({
  //   analytics: true,
  // }),
});
