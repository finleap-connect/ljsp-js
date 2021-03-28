const { _loopArgPairs } = require("../_loop-arg-pairs");

describe("_argsLoop", function () {
  it("should loop arguments in pairs n, n +1", function () {
    const test = jest.fn();
    _loopArgPairs([1, 2, 3, 4], test);
    expect(test.mock.calls.length).toBe(2);
  });
});
