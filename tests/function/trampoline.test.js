const { trampoline } = require("function");

describe("trampoline", () => {
  it("creates a recursable function", () => {
    const result = [];
    function foo(x) {
      // Base case
      if (x < 0) {
        result.push("done");
        return "done";
      }
      // "recursive" call
      else {
        return function () {
          result.push(x);
          return foo(--x);
        };
      }
    }
    expect(trampoline(foo, 3)).toEqual("done");
    expect(result).toStrictEqual([3, 2, 1, 0, "done"]);
  });
});
