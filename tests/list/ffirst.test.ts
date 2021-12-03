import { ffirst } from "../../lib/list/ffirst";

describe("ffirst", () => {
  it("should return ffirst value", function () {
    const set = [
      [12, 34],
      [56, 78]
    ];
    expect(ffirst(set)).toEqual(12);
  });
  it("should return undefined when set empty", function () {
    const set = [[], []];
    expect(ffirst(set)).toBeUndefined();
  });
});
