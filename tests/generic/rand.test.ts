import { rand } from"../../lib/generic/rand";

describe("rand", function () {
  it("should generate a random number", function () {
    const first = rand(1);
    const second = rand(1);
    expect(first).not.toBe(second);
  });
});
