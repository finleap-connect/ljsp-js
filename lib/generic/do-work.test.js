const { doWork } = require("./do-work");

describe("doWork", function () {
  it("should return undefined when no args provided", function () {
    expect(doWork()).toBeUndefined();
  });
  it("should return element when 1 arg provided", function () {
    const set = [() => "one"];
    expect(doWork(...set)).toEqual("one");
  });
  it("should return last element when more than 1 provided", function () {
    const set = [() => "one", () => "two", () => "three"];
    expect(doWork(...set)).toEqual("three");
  });
});
