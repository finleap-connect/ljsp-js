import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testEnvironment: "node",
  verbose: true,
  rootDir: "tests",
  testPathIgnorePatterns: ["./lib", "./node_modules/", "./dist"],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  coverageReporters: ["json-summary", "text", "text-summary", "lcov"]
};

export default config;
