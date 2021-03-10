const { runFnOrGetValue } = require("./run-fn-or-get-value");

describe("runFnOrGetValue", () => {
  it("when passed value returns value", () => {
    expect(runFnOrGetValue(5)).toStrictEqual(5);
  });

  it("when passed functions returns value", () => {
    const square = (num) => num * num;
    expect(runFnOrGetValue(square(5))).toStrictEqual(25);
  });
});
