const { diff } = require("./diff");

describe("diff", function () {
  describe("primitive", function () {
    it("compare equal", function () {
      expect(() => {
        diff("one", "one");
      }).toThrowError(/Assertion Failed/);
    });
  });
  describe("arrays", function () {
    it("compare equal", function () {
      const result = diff([1, 2, 3], [1, 2, 3]);
      expect(result[0]).toEqual([]);
      expect(result[0]).toEqual([]);
      expect(result[2]).toEqual([1, 2, 3]);
    });
    it("compare unequal", function () {
      const result = diff([1, 2, 3, 4], [1, 2, 5]);
      expect(result[0]).toEqual([3, 4]);
      expect(result[1]).toEqual([5]);
      expect(result[2]).toEqual([1, 2]);
    });
  });
  describe("objects", function () {
    it("compare equal", function () {
      const x = { a: "b", c: "d" };
      const y = { a: "b", c: "d" };
      const result = diff(x, y);

      expect(result[0]).toEqual({});
      expect(result[0]).toEqual({});
      expect(result[2]).toEqual({ a: "b", c: "d" });
    });
    it("compare unequal", function () {
      const x = { a: "b", c: "d", e: "f" };
      const y = { a: "b", c: "d", g: "h" };
      const result = diff(x, y);

      expect(result[0]).toEqual({ e: "f" });
      expect(result[1]).toEqual({ g: "h" });
      expect(result[2]).toEqual({ a: "b", c: "d" });
    });
  });
});
