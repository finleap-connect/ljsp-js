const { cond, ELSE } = require("conditional");

describe("cond", () => {
  it("evaluates expression, returns value", () => {
    const score = 85;
    // prettier-ignore
    const grade = cond(
      score >= 90, "A",
      score >= 80, "B",
      score >= 70, "C",
      score >= 60, "D",
      ELSE, "F"
    );
    expect(grade).toStrictEqual("B");
  });

  it("evaluates expression, returns undefined when no match found", () => {
    const score = 40;
    // prettier-ignore
    const grade = cond(
      score >= 90, "A",
      score >= 80, "B",
      score >= 70, "C",
      score >= 60, "D",
    );
    expect(grade).toStrictEqual(undefined);
  });

  it("returns ELSE when no expression is matched", () => {
    const score = 40;
    // prettier-ignore
    const grade = cond(
      score >= 90, "A",
      score >= 80, "B",
      score >= 70, "C",
      score >= 60, "D",
      ELSE, "F"
    );
    expect(grade).toStrictEqual("F");
  });

  describe("lazy evaluation", () => {
    it("evaluates expression, returns evaluated function value", () => {
      const score = 85;
      // prettier-ignore
      const grade = cond(
        () => score >= 90, () => "A",
        () => score >= 80, () => "B",
        () => score >= 70, () => "C",
        () => score >= 60, () => "D",
        ELSE, "F"
      );
      expect(grade).toStrictEqual("B");
    });
  });
});
