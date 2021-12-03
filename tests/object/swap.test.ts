import { conj } from "../../lib/list";
import { swap } from "../../lib/object/swap";

describe("swap", function () {
  it("should swap values in an object", function () {
    const obj = { one: 1, two: { abe: "eff" } };

    expect(swap(obj, conj, { three: "test" }, { four: "four" })).toEqual({
      four: "four",
      one: 1,
      three: "test",
      two: {
        abe: "eff"
      }
    });
  });
});
