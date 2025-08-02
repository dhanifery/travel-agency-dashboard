import { reactRouter } from "@react-router/dev/vite";
import {
  sentryReactRouter,
  type SentryReactRouterBuildOptions,
} from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig((config) => {
  const env = loadEnv(config.mode, process.cwd(), "");

  const sentryConfig: SentryReactRouterBuildOptions = {
    org: "js-mastery-z0",
    project: "travel-agency",
    // An auth token is required for uploading source maps;
    // store it in an environment variable to keep it secure.
    authToken: env.SENTRY_AUTH_TOKEN,
    // ...
  };
  return {
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
      reactRouter(),
      sentryReactRouter(sentryConfig, config),
    ],
    ssr: {
      noExternal: [/@syncfusion/],
    },
  };
});
