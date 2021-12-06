import { dotimes } from "../../lib/generic/dotimes";

describe("dotimes", function () {
  it("should run a function n times", function () {
    const test = jest.fn();
    dotimes(5, test);
    expect(test.mock.calls.length).toBe(5);
  });
});
