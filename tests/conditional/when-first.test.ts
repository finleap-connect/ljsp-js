import { whenFirst } from "../../lib/conditional";

describe("whenFirst", () => {
  it("should get the first item in an Array, if it is truthy, it will run body, making the first item available to any functions", () => {
    expect(whenFirst([1, 2, 3], (a: number) => a + 2)).toBe(3);
  });
  it("should get the first item in an Array, if it is truthy, it will run body, returning the last computed value/expressions", () => {
    expect(whenFirst([1, 2, 3], (a: number) => a + 2, "Ferret", "Marmoset")).toBe("Marmoset");
  });
  it("should return undefined if the first value is void", () => {
    expect(whenFirst([null, 2, 3], (a: number) => a + 2, "Ferret", "Marmoset")).toEqual(undefined);
  });
  it("should return undefined if the Array is empty", () => {
    expect(whenFirst([], (a: number) => a + 2, "Ferret", "Marmoset")).toEqual(undefined);
  });
});
