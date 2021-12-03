import { selectKeys } from "../../lib/list/select-keys";

describe("selectKeys", function () {
  it("should return a map containing only those entries in map whose key is in keys", function () {
    expect(selectKeys({ one: 1, two: 2, three: 3 }, ["one", "two"])).toEqual({ one: 1, two: 2 });
  });
});
