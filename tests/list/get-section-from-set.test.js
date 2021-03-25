const { getSectionFromSet } = require("../../lib/list/get-section-from-set");

describe("getSectionFromSet", function () {
  it("should get a section from a set", function () {
    const set = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = getSectionFromSet(set, 2, 4);
    expect(result).toEqual([5, 6, 7, 8]);
  });
});
