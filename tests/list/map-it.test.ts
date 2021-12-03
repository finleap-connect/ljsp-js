import { inc } from "../../lib/math";
import { iterator } from "../../lib/list/iterator";
import { mapIt } from "../../lib/list/map-it";

describe("mapIt", function () {
  it("should map over an iterator", function () {
    const test = iterator([1, 2, 3]);
    const result = mapIt(inc, test);
    expect(result()).toBe(2);
  });
});
