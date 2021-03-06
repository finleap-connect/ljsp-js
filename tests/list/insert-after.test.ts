import { insertAfter } from "../../lib/list/insert-after";

describe("insertAfter", function () {
  it("should insert an item after another in an Array", function () {
    expect(insertAfter({ source: [1, 2, 3, 4], insert: 5, locator: (item: number) => item === 3 })).toEqual([
      1, 2, 3, 5, 4
    ]);
  });
});
