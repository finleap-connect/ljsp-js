import { add } from "../../lib/math";
import { inc } from "../../lib/math";
import { updateIn } from "../../lib/object/update-in";

describe("updateIn", function () {
  it("should update a value in a nested structure", function () {
    const base = { a: { b: 4 } };
    expect(updateIn(base, ["a", "b"], inc)).toEqual({
      a: {
        b: 5
      }
    });
  });
  it("should update a value in a nested structure with args to the update function", function () {
    const base = { a: { b: 4 } };
    expect(updateIn(base, ["a", "b"], add, 10)).toEqual({
      a: {
        b: 14
      }
    });
  });
});
