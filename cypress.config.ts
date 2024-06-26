import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
      options: {
        projectConfig: {
          root: "",
          sourceRoot: "",
          buildOptions: {},
        },
      },
    },
    specPattern: "**/*.cy.ts",
  },
});
