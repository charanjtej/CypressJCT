const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more.
  await addCucumberPreprocessorPlugin(on, config);

  on(
    // FIXED: "file:preprocessor" (colon, not a dot) takes care of combining esbuild plugin with the cucumber plugin
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    }),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  // Note: cucumber configuration is normally placed in package.json or .cypress-cucumber-preprocessorrc.json
  // but if you are passing env vars here, keep them inside the 'env' object.
  env: {
    allowCypressEnv: false,
  },
  e2e: {
    setupNodeEvents,
    // We are looking for .feature files in all subfolders under e2e
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: false,
    baseUrl: "https://saucedemo.com/",
  },
});
