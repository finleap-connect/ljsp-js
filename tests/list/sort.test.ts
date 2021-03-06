import { sort } from "../../lib/list/sort";

describe("sort", function () {
  it("should return a sorted sequence of the items in Array using default functionality", function () {
    // @ts-ignore
    expect(sort([1, 4, 3, 5, 7])).toEqual([1, 3, 4, 5, 7]);
  });
  it("should sort items in an Array when provided a comparator", function () {
    function sortAccent(a: string, b: any) {
      return a.localeCompare(b);
    }
    const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
    expect(sort(sortAccent, items)).toEqual(["adieu", "café", "communiqué", "éclair", "premier", "réservé"]);
  });
});
