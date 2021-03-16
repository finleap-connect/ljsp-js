const { get } = require("./get");

describe("get", () => {
  it("should get a property from an object", () => {
    expect(get({ a: 1, b: 2 }, "b")).toBe(2);
  });
  it("should get an index from an Array", () => {
    expect(get([1, 2, 3, 4], 3)).toBe(4);
  });
  it("should get an index from a string", () => {
    expect(get("1234", 3)).toBe("4");
  });
  it("should return undefined if the index doesn't exist", () => {
    expect(get("1234", 30)).toEqual(undefined);
  });
  it("should return the notFound value if provided, and the index doesn't exist", () => {
    expect(get("1234", 30, "hello")).toEqual("hello");
  });
});
