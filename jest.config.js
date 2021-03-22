module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["<rootDir>/lib/spec/", "<rootDir>/node_modules/"],
  modulePaths: ["<rootDir>/lib/"]
};
