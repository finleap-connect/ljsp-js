const { dotimes } = require("../../lib/generic/dotimes");

describe("dotimes", () => {
  it("should run a side effect n number of times, passing the arg to any callbacks", () => {
    const mockCallback = jest.fn();
    dotimes(4, mockCallback);
    expect(mockCallback.mock.calls.length).toEqual(4);
  });
  it("should send the index to the function in each iteration", () => {
    const mockCallback = jest.fn();
    dotimes(3, mockCallback);
    expect(mockCallback).toBeCalledWith(0);
    expect(mockCallback).toBeCalledWith(1);
    expect(mockCallback).toBeCalledWith(2);
  });
});
