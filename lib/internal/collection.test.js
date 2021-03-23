const { first } = require("../list");
const { Collection } = require("./collection");

describe("collection", () => {
  describe("array", () => {
    it("should return the count", () => {
      const coll = Collection([1]);
      expect(coll.count).toBe(1);
    });
    it("should append an item", () => {
      const coll = Collection([1]);
      coll.append(2);
      expect(coll.source).toEqual([1, 2]);
    });
    it("should prepend an item", () => {
      const coll = Collection([1]);
      coll.prepend(2);
      expect(coll.source).toEqual([2, 1]);
    });
    it("should get an item", () => {
      const coll = Collection([1]);
      expect(coll.get(0)).toBe(1);
    });
    it("should append a collection", () => {
      const coll = Collection([1]);
      coll.appendAll([2, 3]);
      expect(coll.source).toEqual([1, 2, 3]);
    });
    it("should tell if a collection is empty", () => {
      const coll = Collection([]);
      expect(coll.empty$).toBe(true);
    });
    it("should tell if a collection is NOT empty", () => {
      const coll = Collection([1]);
      expect(coll.empty$).toBe(false);
    });
    it("should tell if a collection contains an element", () => {
      const coll = Collection([1]);
      expect(coll.contains$(1)).toBe(true);
    });
    it("should tell if a collection does not contain an element", () => {
      const coll = Collection([1]);
      expect(coll.contains$(2)).toBe(false);
    });
    it("should remove an element", () => {
      const coll = Collection([1, 2]);
      coll.remove(2);
      expect(coll.source).toEqual([1]);
    });
  });
  describe("string", () => {
    it("should return the count", () => {
      const coll = Collection("123");
      expect(coll.count).toBe(3);
    });
    it("should append an item", () => {
      const coll = Collection("1");
      coll.append("2");
      expect(coll.source).toBe("12");
    });
    it("should get an item", () => {
      const coll = Collection("123");
      expect(coll.get(1)).toBe("2");
    });
    it("should append a collection", () => {
      const coll = Collection("12");
      coll.appendAll("34");
      expect(coll.source).toBe("1234");
    });
    it("should tell if a collection is empty", () => {
      const coll = Collection("");
      expect(coll.empty$).toBe(true);
    });
    it("should tell if a collection is NOT empty", () => {
      const coll = Collection("1");
      expect(coll.empty$).toBe(false);
    });
    it("should tell if a collection contains an element", () => {
      const coll = Collection("1234");
      expect(coll.contains$("3")).toBe(true);
    });
    it("should tell if a collection does not contain an element", () => {
      const coll = Collection("1234");
      expect(coll.contains$("7")).toBe(false);
    });
    it("should remove an element", () => {
      const coll = Collection("1234");
      coll.remove("2");
      expect(coll.source).toEqual("134");
    });
  });
  describe("object", () => {
    it("should return the count", () => {
      const coll = Collection({ one: 1, two: 2, three: 3 });
      expect(coll.count).toBe(3);
    });
    it("should append an item", () => {
      const coll = Collection({ one: 1, two: 2, three: 3 });
      coll.append({ four: 4 });
      expect(coll.source).toEqual({ one: 1, two: 2, three: 3, four: 4 });
    });
    it("should get an item", () => {
      const coll = Collection({ one: 1, two: 2, three: 3 });
      expect(coll.get(1)).toEqual(["two", 2]);
    });
    it("should append a collection", () => {
      const coll = Collection({ one: 1, two: 2, three: 3 });
      coll.appendAll({ four: 4, five: 5 });
      expect(coll.source).toEqual({ one: 1, two: 2, three: 3, four: 4, five: 5 });
    });
    it("should tell if a collection is empty", () => {
      const coll = Collection({});
      expect(coll.empty$).toBe(true);
    });
    it("should tell if a collection is NOT empty", () => {
      const coll = Collection({ one: 1, two: 2, three: 3 });
      expect(coll.empty$).toBe(false);
    });
    it("should tell if a collection contains an element", () => {
      const coll = Collection({ one: 1, two: 2, three: 3 });
      expect(coll.contains$("one")).toBe(true);
    });
    it("should tell if a collection does not contain an element", () => {
      const coll = Collection({ one: 1, two: 2, three: 3 });
      expect(coll.contains$("five")).toBe(false);
    });
    it("should remove an element", () => {
      const coll = Collection({ one: 1, two: 2, three: 3 });
      coll.remove("one");
      expect(coll.source).toEqual({ two: 2, three: 3 });
    });
  });
  describe("set", () => {
    it("should return the count", () => {
      const coll = Collection(new Set([1, 2, 3]));
      expect(coll.count).toBe(3);
    });
    it("should append an item", () => {
      const coll = Collection(new Set([1, 2, 3]));
      coll.append(4);
      expect(coll.source).toEqual(new Set([1, 2, 3, 4]));
    });
    it("should get an item", () => {
      const coll = Collection(new Set([1, 2, 3]));
      expect(coll.get(1)).toEqual(2);
    });
    it("should append a collection", () => {
      const coll = Collection(new Set([1, 2, 3]));
      coll.appendAll(new Set([4, 5]));
      expect(coll.source).toEqual(new Set([1, 2, 3, 4, 5]));
    });
    it("should tell if a collection is empty", () => {
      const coll = Collection(new Set());
      expect(coll.empty$).toBe(true);
    });
    it("should tell if a collection is NOT empty", () => {
      const coll = Collection(new Set([1, 2, 3]));
      expect(coll.empty$).toBe(false);
    });
    it("should tell if a collection contains an element", () => {
      const coll = Collection(new Set([1, 2, 3]));
      expect(coll.contains$(2)).toBe(true);
    });
    it("should tell if a collection does not contain an element", () => {
      const coll = Collection(new Set([1, 2, 3]));
      expect(coll.contains$(5)).toBe(false);
    });
    it("should remove an element", () => {
      const coll = Collection(new Set([1, 2, 3]));
      coll.remove(2);
      expect(coll.source).toEqual(new Set([1, 3]));
    });
  });
  describe("map", () => {
    it("should return the count", () => {
      const coll = Collection(
        new Map([
          ["one", 1],
          ["two", 2]
        ])
      );
      expect(coll.count).toBe(2);
    });
    it("should append an item", () => {
      const coll = Collection(
        new Map([
          ["one", 1],
          ["two", 2]
        ])
      );
      coll.append(["three", 3]);
      expect(coll.source).toEqual(
        new Map([
          ["one", 1],
          ["two", 2],
          ["three", 3]
        ])
      );
    });
    it("should get an item", () => {
      const coll = Collection(
        new Map([
          ["one", 1],
          ["two", 2]
        ])
      );
      expect(coll.get(1)).toEqual(["two", 2]);
    });
    it("should append a collection", () => {
      const coll = Collection(
        new Map([
          ["one", 1],
          ["two", 2]
        ])
      );
      coll.appendAll(new Map([["four", 5]]));
      expect(coll.source).toEqual(
        new Map([
          ["one", 1],
          ["two", 2],
          ["four", 5]
        ])
      );
    });
    it("should tell if a collection is empty", () => {
      const coll = Collection(new Map());
      expect(coll.empty$).toBe(true);
    });
    it("should tell if a collection is NOT empty", () => {
      const coll = Collection(
        new Map([
          ["one", 1],
          ["two", 2]
        ])
      );
      expect(coll.empty$).toBe(false);
    });
    it("should tell if a collection contains an element", () => {
      const coll = Collection(
        new Map([
          ["one", 1],
          ["two", 2]
        ])
      );
      expect(coll.contains$("one")).toBe(true);
    });
    it("should tell if a collection does not contain an element", () => {
      const coll = Collection(
        new Map([
          ["one", 1],
          ["two", 2]
        ])
      );
      expect(coll.contains$(5)).toBe(false);
    });
    it("should remove an element", () => {
      const coll = Collection(
        new Map([
          ["one", 1],
          ["two", 2]
        ])
      );
      coll.remove("one");
      expect(coll.source).toEqual(new Map([["two", 2]]));
    });
  });
  describe("existing collections", () => {
    it("should not create a new Collection when passed a Collection", () => {
      const sut = Collection([1, 2, 3]);
      const sut2 = Collection(sut);
      expect(sut).toBe(sut2);
    });
    it("should not generate a circular reference when passing a Collection to a method that uses Collections internally", () => {
      const sut = Collection([1, 2, 3]);
      const firstItem = first(sut);
      expect(firstItem).toBe(1);
    });
  });
});
