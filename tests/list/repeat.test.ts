import { repeat } from "../../lib/list/repeat";

describe("repeat", function () {
  it("should repeat a sequence of primitives", function () {
    const repeater = repeat(5, "x");

    expect(repeater()).toBe("x");
    expect(repeater()).toBe("x");
  });
  it("should repeat a sequence of Objects (cloned)", function () {
    const repeater = repeat(5, { one: 1 });

    expect(repeater()).toEqual({ one: 1 });
    expect(repeater()).toEqual({ one: 1 });
  });
});
