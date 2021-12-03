import { reduceKv } from "../../lib/list/reduce-kv";

describe("reduceKv", function () {
  it("should reduce a kv pair", function () {
    function flipKv(acc, key, value) {
      acc[value] = key;
      return acc;
    }

    const map = { one: "count", bob: "name", leipzig: "city" };

    expect(reduceKv(flipKv, {}, map)).toEqual({
      city: "leipzig",
      count: "one",
      name: "bob"
    });
  });
});
