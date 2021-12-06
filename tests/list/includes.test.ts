import { includes } from "../../lib/list/includes";

describe("includes", () => {
  it("should return true if an Array includes", () => {
    expect(includes([1, 2, 3], 2, 3)).toBe(true);
  });
  it("should return true if an Object includes properties", () => {
    expect(includes({ one: 1, two: 2, three: 3 }, "one", "two")).toBe(true);
  });
  it("should return true if an Object includes k-v pairs", () => {
    expect(includes({ one: 1, two: 2, three: 3 }, ["one", 1], ["two", 2])).toBe(true);
  });
  it("should return true if a set includes", () => {
    expect(includes(new Set([1, 2, 3]), 2, 3)).toBe(true);
  });
  it("should return true if a Map includes a key", () => {
    expect(
      includes(
        new Map([
          [1, 2],
          [3, 4]
        ]),
        3
      )
    ).toBe(true);
  });
});
