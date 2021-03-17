const { first } = require("../../lib/list");
const { upperCase } = require("../../lib/string");
const { tf } = require("../../lib/function/tf");

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
