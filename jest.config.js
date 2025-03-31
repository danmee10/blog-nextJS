module.exports = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  // Use ts-jest for TypeScript and babel-jest for JavaScript
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    // Map non-JS modules if needed
  },
  // Tell Jest to treat only TypeScript files as ESM explicitly.
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  // Let Jest transform these ESM packages even though they live in node_modules.
  transformIgnorePatterns: ["/node_modules/(?!(remark|remark-html)/)"],
};