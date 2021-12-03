import { true$ } from"../../lib/generic/true$";

describe("true$", () => {
  it("should return true if the argument is true", () => {
    expect(true$(true)).toEqual(true);
  });
  it("should return false if the argument is false", () => {
    expect(true$(false)).toEqual(false);
  });
});
