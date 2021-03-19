module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["<rootDir>/lib/spec/"],
  modulePaths: ["<rootDir>/lib/"]
};
