import { complement } from "../../lib/function";
import { odd$ } from "../../lib/math";

describe("complement", () => {
  it("returns complement value", () => {
    expect(complement(odd$)(5)).not.toBeTruthy();
  });
});
