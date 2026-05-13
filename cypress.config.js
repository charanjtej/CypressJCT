const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
      // Forces esbuild to append source maps directly into the test file
      sourcemap: "inline",
    }),
  );
  return config;
}

module.exports = defineConfig({
  projectId: "d83pya",
  allowCypressEnv: true, // <-- Must be exactly here at the root level
  e2e: {
    setupNodeEvents,
    // specPattern: "cypress/e2e/**/*.feature", //if this is not defined, default one will be: filename.cy.js
    supportFile: false,
    baseUrl: "https://saucedemo.com",
  },
});
