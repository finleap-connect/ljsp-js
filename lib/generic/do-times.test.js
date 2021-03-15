const { dotimes } = require("./dotimes");

describe("dotimes", () => {
  it("should run a side effect n number of times, passing the arg to any callbacks", () => {
    const mockCallback = jest.fn();
    dotimes(4, mockCallback);
    expect(mockCallback.mock.calls.length).toEqual(4);
  });
});
