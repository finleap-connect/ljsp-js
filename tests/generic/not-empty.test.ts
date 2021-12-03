import { notEmpty } from"../../lib/generic/not-empty";

describe("notEmpty", () => {
  it("should return its argument if the argument is not empty", () => {
    expect(notEmpty([1])).toEqual([1]);
  });
  it("should return its argument if the argument is not empty", () => {
    expect(notEmpty(new Set([1]))).toEqual(new Set([1]));
  });
  it("should return its argument if the argument is not empty", () => {
    const sut = { a: 1 };
    expect(notEmpty(sut)).toBe(sut);
  });
  it("should return undefined if the argument is empty", () => {
    expect(notEmpty([])).toEqual(undefined);
  });
});
