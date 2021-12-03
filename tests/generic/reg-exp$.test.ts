import { regExp$ } from"../../lib/generic/reg-exp$";

describe("isRegExp", function () {
  it("should return true for regex", function () {
    expect(regExp$(/a/)).toBeTruthy();
    expect(regExp$(new RegExp("abcd"))).toBeTruthy();
  });
  it("should return false for non regex", function () {
    expect(regExp$("1234")).not.toBeTruthy();
    expect(regExp$(1234)).not.toBeTruthy();
  });
});
