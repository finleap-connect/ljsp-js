const { _getType } = require("./_get-type");

describe("_getType", () => {
  describe("primitive", () => {
    it("returns boolean", () => {
      expect(_getType(true)).toStrictEqual("boolean");
    });
    it("returns string", () => {
      expect(_getType("hello world")).toStrictEqual("string");
    });
    it("returns number", () => {
      expect(_getType(10)).toStrictEqual("number");
    });
    it("returns null", () => {
      expect(_getType(null)).toStrictEqual("null");
    });
    it("returns undefined", () => {
      expect(_getType(undefined)).toStrictEqual("undefined");
    });
  });
  describe("non primitive", () => {
    it("returns constructor fn", () => {
      function Person(name) {
        this.name = name;
      }
      Person.prototype = Person;
      const obj = new Person("John");
      expect(_getType(obj)).toStrictEqual("object");
    });
    it("returns object", () => {
      expect(_getType({})).toStrictEqual("object");
    });
    it("returns date", () => {
      expect(_getType(new Date())).toStrictEqual("date");
    });
    it("returns promise", () => {
      expect(_getType(new Promise((r) => r("10")))).toStrictEqual("promise");
    });
  });
});
