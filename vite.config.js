import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { ogImageUrl } from "./src/data";

const headers = [
  `<title>Supakarin Niansupornpun Resume</title>`,
  `<meta name="title" content="Supakarin Niansupornpun Resume" />`,
  `<meta name="description" content="Interactive & printable résumé with tailored skills fitted in single letter page." />`,
  `<meta name="viewport" content="width=device-width, initial-scale=1" />`,
  `<meta property="og:type" content="website" />`,
  `<meta property="og:title" content="Supakarin Niansupornpun Resume" />`,
  `<meta property="og:description" content="Interactive & printable résumé with tailored skills fitted in single letter page." />`,
  `<meta property="og:image" content=${ogImageUrl} />`,
  `<meta name="twitter:title" content="Supakarin Niansupornpun Resume" />`,
  `<meta name="twitter:card" content="summary_large_image" />`,
  `<meta name="twitter:image" content=${ogImageUrl} />`,
];

const htmlPlugin = () => {
  return {
    name: "html-transform",
    transformIndexHtml(html) {
      return html.replace(
        /<!-- This comment will be replaced with htmlPlugin in vite.config.js -->/,
        headers.join("\n")
      );
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), htmlPlugin()],
});
