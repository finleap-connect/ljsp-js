import { reduceKv } from "../../lib/list/reduce-kv";

describe("reduceKv", function () {
  it("should reduce a kv pair", function () {
    function flipKv(acc: { [x: string]: any }, key: any, value: string | number) {
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
