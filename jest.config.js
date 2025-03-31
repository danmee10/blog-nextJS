module.exports = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    // Map non-JS modules (if needed)
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  transformIgnorePatterns: ["/node_modules/(?!(remark|remark-html)/)"],
};