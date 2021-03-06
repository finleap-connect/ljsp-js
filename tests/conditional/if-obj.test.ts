import { ifObj } from "../../lib/conditional";

describe("ifObj", () => {
  it("returns value if true", () => {
    expect(ifObj(true, { name: "John Doe" })).toStrictEqual({ name: "John Doe" });
  });
  it("returns obj if false", () => {
    expect(ifObj(false, { name: "John Doe" })).toStrictEqual({});
  });
});
