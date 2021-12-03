import { walk } from "../../lib/list/walk";

describe("walk", function () {
  it("should walk a set", function () {
    expect(
      walk(
        (i: number) => i * 2,
        (set: any[]) => set.reduce((acc, cur) => acc + cur),
        [1, 2, 3, 4, 5]
      )
    ).toBe(30);
  });
  it("should walk an Object", function () {
    expect(
      walk(
        // @ts-ignore
        ([key, value]) => [key, value + 1],
        (set: any) => set,
        { one: 1, two: 2, three: 3 }
      )
    ).toEqual({
      one: 2,
      two: 3,
      three: 4
    });
  });
});
