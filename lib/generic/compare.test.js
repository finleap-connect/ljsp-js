const { compare } = require("./compare");

describe("compare", () => {
  describe("number comparisons", () => {
    it("left greater than right returns 1", () => {
      expect(compare(1, 0)).toBe(1);
    });
    it("left equal to right returns 0", () => {
      expect(compare(1, 1)).toBe(0);
    });
    it("left less than right returns -1", () => {
      expect(compare(0, 1)).toBe(-1);
    });
  });
  describe("string comparisons", () => {
    it("left greater than right returns 1", () => {
      expect(compare("def", "abc")).toBe(3);
    });
    it("left equal to right returns 0", () => {
      expect(compare("abc", "abc")).toBe(0);
    });
    it("left less than right returns delta between different letters", () => {
      expect(compare("abc", "def")).toBe(-3);
    });
  });
  describe("Boolean comparisons", () => {
    it("true false returns 1", () => {
      expect(compare(true, false)).toBe(1);
    });
    it("false true returns -1", () => {
      expect(compare(false, true)).toBe(-1);
    });
    it("true true returns 0", () => {
      expect(compare(true, true)).toBe(0);
    });
    it("false false returns 0", () => {
      expect(compare(false, false)).toBe(0);
    });
  });
  describe("Array comparisons", () => {
    describe("Array<Number>", () => {
      it("left greater than right returns 1", () => {
        expect(compare([1, 2, 3], [0, 2, 3])).toBe(1);
      });
      it("left equal to right returns 0", () => {
        expect(compare([1, 2, 3], [1, 2, 3])).toBe(0);
      });
      it("left less than right returns -1", () => {
        expect(compare([0, 2, 3], [1, 2, 3])).toBe(-1);
        expect(compare([1, 0, 3], [1, 2, 3])).toBe(-1);
      });
    });
    describe("Array<string>", () => {
      it("left greater than right returns 1", () => {
        expect(compare(["d", "e", "f"], ["a", "b", "c"])).toBe(3);
      });
      it("left equal to right returns 0", () => {
        expect(compare(["d", "e", "f"], ["d", "e", "f"])).toBe(0);
      });
      it("left less than right returns -1", () => {
        expect(compare(["a", "e", "f"], ["d", "e", "f"])).toBe(-3);
        expect(compare(["d", "b", "f"], ["d", "e", "f"])).toBe(-3);
      });
    });
    describe("Array<Boolean>", () => {
      it("left greater than right returns 1", () => {
        expect(compare([true, true, true], [true, false, true])).toBe(1);
      });
      it("left equal to right returns 0", () => {
        expect(compare([true, false, true], [true, false, true])).toBe(0);
      });
      it("left less than right returns -1", () => {
        expect(compare([false, false, true], [true, false, true])).toBe(-1);
      });
    });
    describe("Array<string | number | boolean>", () => {
      it("left greater than right returns 1", () => {
        expect(compare([true, "a", 2], [true, "a", 1])).toBe(1);
      });
      it("left equal to right returns 0", () => {
        expect(compare([true, "a", 1], [true, "a", 1])).toBe(0);
      });
      it("left less than right returns -1", () => {
        expect(compare([true, "a", 1], [true, "a", 2])).toBe(-1);
        expect(compare([true, "a", 1], [true, "b", 1])).toBe(-1);
      });
    });
    it("returns undefined for an unsupported comparison", () => {
      expect(
        compare(
          () => {},
          () => {}
        )
      ).toBe(undefined);
    });
    it("left more elements than right returns 1", () => {
      expect(compare(["a", "e", "f", "g"], ["d", "e", "f"])).toBe(1);
    });
    it("left less elements than right returns -1", () => {
      expect(compare(["z", "y"], ["d", "e", "f"])).toBe(-1);
    });
  });
});
