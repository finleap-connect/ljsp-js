import { assoc } from "../../lib/list/assoc";

describe("assoc", () => {
  it("should add values to a map", () => {
    expect(assoc({}, { one: "value", two: "another value" })).toEqual({ one: "value", two: "another value" });
  });
  it("should overwrite values in a map", () => {
    expect(assoc({ one: "one" }, { one: "two" })).toEqual({ one: "two" });
  });
  it("should treat void values as an empty map", () => {
    expect(assoc(null, { one: "value", two: "another value" })).toEqual({ one: "value", two: "another value" });
  });
  it("should replace values in an Array by index", () => {
    expect(assoc([1, 2, 3], 1, "a")).toEqual([1, "a", 3]);
  });
});
