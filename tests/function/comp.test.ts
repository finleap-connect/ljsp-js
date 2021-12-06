import { add } from "../../lib/math";
import { str } from "../../lib/string";
import { comp } from "../../lib/function";

describe("comp", () => {
  it("should compose a set of functions, running them r-t-l", () => {
    expect(comp(Number, str, add)(8, 8, 8)).toEqual(24);
  });
});
