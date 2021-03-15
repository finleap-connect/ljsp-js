const { doTimes } = require("./do-times");

describe("dotimes", () => {
  it("should run a side effect n number of times, passing the arg to any callbacks", () => {
    const mockCallback = jest.fn();
    doTimes(2, mockCallback);
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
