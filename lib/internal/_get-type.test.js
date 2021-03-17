const { _getType } = require("./_get-type");

// Jest is not playing nicely with TS Enums, so using string constants

describe("_getType", function () {
  describe("primitive", function () {
    it("returns boolean", function () {
      expect(_getType(true)).toStrictEqual("boolean");
    });
    it("returns string", function () {
      expect(_getType("hello world")).toStrictEqual("string");
    });
    it("returns number", function () {
      expect(_getType(10)).toStrictEqual("number");
    });
    it("returns null", function () {
      expect(_getType(null)).toStrictEqual("null");
    });
    it("returns undefined", function () {
      expect(_getType(undefined)).toStrictEqual("undefined");
    });
  });

  describe("non primitive", function () {
    it("returns constructor fn", function () {
      function Person(name) {
        this.name = name;
      }
      Person.prototype = Person;
      const obj = new Person("John");
      expect(_getType(obj)).toStrictEqual("object");
    });
    it("returns object", function () {
      expect(_getType({})).toStrictEqual("object");
    });
    it("returns date", function () {
      expect(_getType(new Date())).toStrictEqual("date");
    });
    it("returns promise", function () {
      expect(_getType(new Promise((r) => r("10")))).toStrictEqual("promise");
    });
  });
});
