import { count } from "../../lib/list/count";

describe("count", () => {
  it("counts the number of items in an array", () => {
    expect(count([1, 2, 3])).toEqual(3);
  });
  it("counts the number of items in an object", () => {
    expect(count({ one: 1, two: 2, three: 3 })).toEqual(3);
  });
  it("counts the number of letters in a string", () => {
    expect(count("hello")).toEqual(5);
  });
  it("counts the number of values in a set", () => {
    expect(count(new Set([1, 2, 3]))).toEqual(3);
  });
  it("counts the number of values in a map", () => {
    expect(
      count(
        new Map([
          ["key1", "value1"],
          ["key2", "value2"]
        ])
      )
    ).toEqual(2);
  });
  it("returns 0 is the argument is null", () => {
    expect(count(null)).toEqual(0);
  });
  it("returns 0 is the argument is undefined", () => {
    expect(count(undefined)).toEqual(0);
  });
});
