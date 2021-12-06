import { fNil } from "../../lib/function";
import { str } from "../../lib/string";

describe("fNil", () => {
  function sayHello(first: any, other: any) {
    return str("Hello ", first, " and ", other);
  }
  // @ts-ignore
  const sayHelloWithDefaults = fNil(sayHello, "John", "Reed");

  it("should replace nil values from template", () => {
    expect(sayHelloWithDefaults()).toEqual("Hello John and Reed");
  });

  it("should replace nil values from args if present", () => {
    // @ts-ignore
    expect(sayHelloWithDefaults("Michael")).toEqual("Hello Michael and Reed");
    // @ts-ignore
    expect(sayHelloWithDefaults(undefined, "Michael")).toEqual("Hello John and Michael");
  });
});
