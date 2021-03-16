const { escape } = require("../../lib/string/escape");

describe("escape", function () {
  const str = "Hello Clojure World!";
  const numStr = "123";
  const ab = "ab";
  it("escapes each characters", function () {
    const map = {
      "!": "!!!"
    };
    expect(escape(str, map)).toEqual("Hello Clojure World!!!");
  });

  it("escapes space characters", function () {
    const map1 = {
      " ": "-"
    };
    const map2 = {
      "!": "!!!",
      " ": "-"
    };
    expect(escape(str, map1)).toEqual("Hello-Clojure-World!");
    expect(escape(str, map2)).toEqual("Hello-Clojure-World!!!");
  });

  it("escapes each space and '!' characters", function () {
    expect(
      escape(str, {
        "!": "!!!",
        " ": "-"
      })
    ).toEqual("Hello-Clojure-World!!!");
  });
  it("escapes string where a replacement string contains a char in the replacement map", function () {
    expect(escape(numStr, { 1: "2", 2: "3", 3: "4" })).toEqual("234");
    expect(escape(ab, { a: "b", b: "a" })).toEqual("ba");
  });
});
