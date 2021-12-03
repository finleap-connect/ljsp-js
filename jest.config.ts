import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  testPathIgnorePatterns: ["./lib/spec/", "./node_modules/", "./dist"],
  testMatch: ["**/?(*.)+(test).+(ts)"],
  transform: {
    "^.+\\.(ts)$": "ts-jest"
  },
  coverageReporters: ["json-summary", "text", "text-summary", "lcov"]
};

export default config;
