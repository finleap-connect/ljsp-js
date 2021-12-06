import { inc } from "../../lib/math";
import { add } from "../../lib/math";
import { lazyMap } from "../../lib/list/lazyMap";

describe("lazyMap", () => {
  it("should map one set", () => {
    const iterator = lazyMap(inc, [1, 2, 3]);
    expect(iterator()).toEqual(2);
    expect(iterator()).toEqual(3);
    expect(iterator()).toEqual(4);
    expect(iterator()).toEqual(undefined);
  });
  it("should map two sets", () => {
    const iterator = lazyMap(add, [1, 2, 3], [4, 5, 6]);
    expect(iterator()).toEqual(5);
    expect(iterator()).toEqual(7);
    expect(iterator()).toEqual(9);
    expect(iterator()).toEqual(undefined);
  });
  it("should map multiple sets", () => {
    const iterator = lazyMap(add, [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]);
    expect(iterator()).toEqual(22);
    expect(iterator()).toEqual(26);
    expect(iterator()).toEqual(30);
    expect(iterator()).toEqual(undefined);
  });
});
