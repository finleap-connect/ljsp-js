import { frequencies } from "../../lib/list/frequencies";

describe("frequencies", () => {
  it("should return the frequencies for an Array", () => {
    expect(frequencies([1, 2, 1, 1, 2])).toEqual({ 1: 3, 2: 2 });
  });
  it("should return the frequencies for a string", () => {
    expect(frequencies("11122")).toEqual({ 1: 3, 2: 2 });
  });
  // Sets, Objects, and Maps do not have duplicates
});
