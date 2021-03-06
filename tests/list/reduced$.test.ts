import { reduced } from "../../lib/list/reduced";
import { reduced$ } from "../../lib/list/reduced$";

describe("reduced$", function () {
  it("should return true if the item has been reduced", function () {
    const test = reduced(1);
    expect(reduced$(test)).toBe(true);
  });
});
