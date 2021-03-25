const { maxKey } = require("generic");
const { max } = require("math");

describe("maxKey", function () {
  const strLen = (item) => item.length | 0;
  it("should return maxKey for array of values", function () {
    expect(maxKey(strLen, "asd", "bsd", "dsd", "long word")).toEqual("long word");
  });
  it("should return last maxKey for array of values when multiple", function () {
    expect(maxKey(strLen, "asd", "bsd", "dsd")).toEqual("dsd");
  });
  it("should find the key that has highest value in object", function () {
    const maxVal = (obj) => max(...Object.values(obj));
    const obj1 = { a: 3, b: 7, c: 9 };
    const obj2 = { a: 2, b: 3, c: 4 };
    const objColl = [obj1, obj2];
    expect(maxKey(maxVal, ...objColl)).toEqual(obj1);
  });
  it("should find the key that has highest value in set", function () {
    const setLen = (set) => set.size;
    const set1 = new Set(["abc", "defc", "abcde"]);
    const set2 = new Set(["a", "bc"]);
    const setColl = [set1, set2];
    expect(maxKey(setLen, ...setColl)).toEqual(set1);
  });
  it("should find the key that has highest value in map", function () {
    const maxVal = (map) => max(...map.values());
    const map1 = new Map([
      ["a", 3],
      ["b", 7],
      ["c", 9]
    ]);
    const map2 = new Map([
      ["a", 2],
      ["b", 3],
      ["c", 4]
    ]);
    const mapColl = [map1, map2];
    expect(maxKey(maxVal, ...mapColl)).toEqual(map1);
  });
});
