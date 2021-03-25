const { iterator } = require("./iterator");
const { forIt } = require("./for-it");

describe("forIt", function () {
  it("should loop over an iterator", function () {
    const test = jest.fn();
    const it = iterator([1, 2, 3]);
    forIt(test, it);
    expect(test.mock.calls.length).toBe(3);
    expect(test).toHaveBeenCalledWith(1);
  });
});