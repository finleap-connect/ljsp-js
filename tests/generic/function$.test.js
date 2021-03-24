const { function$ } = require("../../lib/generic/function$");

describe("function$", function () {
  it("should return true if the test is an arrow function", function () {
    expect(function$(() => {})).toBe(true);
  });
  it("should return true if the test is a generator function", function () {
    function* generator() {}
    expect(function$(generator)).toBe(true);
  });
  it("should return true if the test is an async function", function () {
    async function asynch() {}
    expect(function$(asynch)).toBe(true);
  });
  it("should return true if the test is a function declaration", function () {
    function named() {}
    expect(function$(named)).toBe(true);
  });
  it("should return true if the test is a function expression", function () {
    const named = function () {};
    expect(function$(named)).toBe(true);
  });
  it("should return true if the test is an object method", function () {
    const obj = {
      test() {}
    };
    expect(function$(obj.test)).toBe(true);
  });
});
