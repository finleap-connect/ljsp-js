import { ifClass } from "../../lib/conditional";

describe("ifClass", () => {
  it("if truthy, returns value", () => {
    expect(ifClass(true, "border-blue")).toStrictEqual("border-blue");
  });
  it("if falsy, returns expression", () => {
    expect(ifClass(false, "border-red")).toStrictEqual("");
  });
});
