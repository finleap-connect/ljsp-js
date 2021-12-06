import { titleCase } from "../../lib/string/title-case";

describe("title case", () => {
  it('"hello world" to "Hello World"', () => {
    expect(titleCase("hello world")).toStrictEqual("Hello World");
  });
  it('"hello   world" to "Hello   World"', () => {
    expect(titleCase("hello   world")).toStrictEqual("Hello   World");
  });
  it('"1" to "1"', () => {
    expect(titleCase("1")).toStrictEqual("1");
  });
});
