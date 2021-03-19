const { fNil } = require("function");
const { str } = require("string");

describe("fNil", () => {
  function sayHello(first, other) {
    return str("Hello ", first, " and ", other);
  }
  const sayHelloWithDefaults = fNil(sayHello, "John", "Reed");

  it("should replace nil values from template", () => {
    expect(sayHelloWithDefaults()).toEqual("Hello John and Reed");
  });

  it("should replace nil values from args if present", () => {
    expect(sayHelloWithDefaults("Michael")).toEqual("Hello Michael and Reed");
    expect(sayHelloWithDefaults(undefined, "Michael")).toEqual("Hello John and Michael");
  });
});
