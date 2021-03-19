const { first } = require("list");
const { upperCase } = require("string");
const { tf } = require("function");

describe("thread first", () => {
  it("runs the functions top to bottom", () => {
    expect(
      tf(
        "a b c d",
        upperCase,
        (string) => string.replace("A", "X"),
        (string) => string.split(" "),
        first
      )
    ).toBe("X");
  });
});
