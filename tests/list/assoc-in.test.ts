import { assocIn } from "../../lib/list/assoc-in";

describe("assocIn", function () {
  describe("collection of objects", function () {
    const users = [
      { name: "James", age: 26 },
      { name: "John", age: 43 }
    ];
    it("replaces values", function () {
      expect(assocIn(users, [1, "age"], 44)).toEqual([
        { name: "James", age: 26 },
        { name: "John", age: 44 }
      ]);
    });
    it("inserts missing attribute", function () {
      expect(assocIn(users, [1, "password"], "nhoJ")).toEqual([
        { name: "James", age: 26 },
        { password: "nhoJ", name: "John", age: 43 }
      ]);
      assocIn(users, [2], { name: "Jack", age: 19 });
    });
    it("inserts new record to set", function () {
      expect(assocIn(users, [2], { name: "Jack", age: 19 })).toEqual([
        { name: "James", age: 26 },
        { name: "John", age: 43 },
        { name: "Jack", age: 19 }
      ]);
    });
  });
  describe("collection of arrays", function () {
    const set = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ];
    it("replaces values", function () {
      expect(assocIn(set, [0, 0], 0)).toEqual([
        [0, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ]);
    });
  });
});
