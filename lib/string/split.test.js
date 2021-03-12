const { split } = require("./split");

describe("split", () => {
  it("should split a string on a RegExp", () => {
    expect(split("Monkeys love Mangoes", /\s/)).toEqual(["Monkeys", "love", "Mangoes"]);
  });
  it("should split a string on a string", () => {
    expect(split("Monkeys love Mangoes", " ")).toEqual(["Monkeys", "love", "Mangoes"]);
  });
  it("should limit the maximum number of strings to return", () => {
    expect(split("q1w2e3r4t5y6u7i8o9p0", /\d+/, 5)).toEqual(["q", "w", "e", "r", "t5y6u7i8o9p0"]);
  });
});
