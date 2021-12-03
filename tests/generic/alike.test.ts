import { alike } from "../../lib/generic/alike";

describe("alike", function () {
  it("compares a string and a number using coercion", function () {
    expect(alike("200", 200)).toBeTruthy();
    expect(alike("xyz", 200)).not.toBeTruthy();
  });

  it("compares a string/number and a boolean using coercion", function () {
    expect(alike(true, "1")).toBeTruthy();
    expect(alike("0", false)).toBeTruthy();
    expect(alike("-1", false)).not.toBeTruthy();
  });
});
