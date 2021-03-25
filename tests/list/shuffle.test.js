const { shuffle } = require("../../lib/list/shuffle");

describe("shuffle", () => {
  it("should return the args when one arg is passed", () => {
    expect(shuffle([0])).toEqual([0]);
  });
  it("should swap the values if only two args", () => {
    expect(shuffle([0, 1])).toEqual([1, 0]);
  });
  it("should shuffl the values of 3+ args", () => {
    expect(shuffle([0, 1, 2])).not.toEqual([0, 1, 2]);
  });
});
