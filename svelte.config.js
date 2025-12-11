import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      $: "src",
    },
  },
  vitePlugin: {
    onwarn: (warning, defaultHandler) => {
      const warningCode = warning.code.toLowerCase();
      if (
        warningCode === "a11y-no-noninteractive-tabindex" ||
        "a11y-missing-attribute" ||
        "a11y_no_static_element_interactions"
      )
        return;
      console.log("svelte:warnings:%s", JSON.stringify(warning));
      defaultHandler(warning);
    },
  },
};

export default config;
