const { insertBefore } = require("./insert-before");

describe("insertBefore", function () {
  it("should insert an item before another in an Array", function () {
    expect(insertBefore({ source: [1, 2, 3, 4], insert: 5, locator: (item) => item === 3 })).toEqual([1, 2, 5, 3, 4]);
  });
});
