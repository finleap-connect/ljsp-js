import { constantly } from "../../lib/function";

describe("constantly", () => {
  it("always returns the same value", () => {
    const fn = constantly(2);
    // @ts-ignore
    expect(fn(1, 2, 3, 4, 5, "22", () => {})).toBe(2);
  });
});
