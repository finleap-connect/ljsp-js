import { dissoc } from "../../lib/object/dissoc";

describe("dissoc", function () {
  it("should dissoc keys from object", function () {
    const obj = { a: "a", b: "b", c: "c" };
    expect(dissoc(obj, "a", "b")).toEqual({ c: "c" });
  });
  it("should return keys from object when no keys passed", function () {
    const obj = { a: "a", b: "b", c: "c" };
    expect(dissoc(obj)).toEqual(obj);
  });
});
