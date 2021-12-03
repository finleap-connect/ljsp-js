import { first } from "../../lib/list";
import { upperCase } from "../../lib/string";
import { tf } from "../../lib/function";

describe("thread first", () => {
  it("runs the functions top to bottom", () => {
    expect(
      tf(
        "a b c d",
        upperCase,
        (string: string) => string.replace("A", "X"),
        (string: string) => string.split(" "),
        first
      )
    ).toBe("X");
  });
});
