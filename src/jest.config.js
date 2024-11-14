module.exports = {
  setupFiles: ["./jest.polyfills.js"],
  globals: {
    TextEncoder: require("util").TextEncoder,
    TextDecoder: require("util").TextDecoder,
  },
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
};
