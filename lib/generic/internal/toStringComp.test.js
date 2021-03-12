const { toStringComp } = require("./toStringComp");

describe("toStringComp", function () {
  describe("primitive", function () {
    it("returns boolean", function () {
      expect(toStringComp(true)).toStrictEqual("[object Boolean]");
    });
    it("returns string", function () {
      expect(toStringComp("hello world")).toStrictEqual("[object String]");
    });
    it("returns number", function () {
      expect(toStringComp(10)).toStrictEqual("[object Number]");
    });
    it("returns null", function () {
      expect(toStringComp(null)).toStrictEqual("[object Null]");
    });
    it("returns undefined", function () {
      expect(toStringComp(undefined)).toStrictEqual("[object Undefined]");
    });
  });

  describe("non primitive", function () {
    it("returns constructor fn", function () {
      function Person(name) {
        this.name = name;
      }
      Person.prototype = Person;
      const obj = new Person("John");
      expect(toStringComp(obj)).toStrictEqual("[object Object]");
    });
    it("returns object", function () {
      expect(toStringComp({})).toStrictEqual("[object Object]");
    });
    it("returns date", function () {
      expect(toStringComp(new Date())).toStrictEqual("[object Date]");
    });
    it("returns promise", function () {
      expect(toStringComp(new Promise((r) => r("10")))).toStrictEqual("[object Promise]");
    });
  });
});
