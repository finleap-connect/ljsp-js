const { subs } = require("../../lib/string/subs");

describe("subs", () => {
  it("should return a substring, capped at str.len by default", () => {
    expect(subs("Monkey", 1)).toBe("onkey");
  });
  it("should return a substring, within a set", () => {
    expect(subs("Monkey", 1, 3)).toBe("on");
  });
});
