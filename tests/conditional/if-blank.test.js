const { ifBlank } = require("../../lib/conditional/if-blank");

describe("ifBlank", () => {
  it("if truthy, returns value", () => {
    expect(ifBlank(true, "hello world")).toStrictEqual("hello world");
  });
  it("if falsy, returns expression", () => {
    expect(ifBlank(false, "hello world")).toStrictEqual("");
  });
});
