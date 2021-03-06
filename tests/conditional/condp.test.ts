import { condp } from "../../lib/conditional";
import { lt$ } from "../../lib/math";

describe("condp", () => {
  it("evaluates a binary predicate, matches test expression, returns result expression", () => {
    // prettier-ignore
    const result = condp(lt$, 15,
      1, "one",
      10, "ten",
      100, "hundred",
      1000, "thousand",
      "default"
    );
    expect(result).toStrictEqual("hundred");
  });

  it("evaluates a binary predicate, matches test expression, returns evaluated result function", () => {
    // prettier-ignore
    const result = condp(lt$, 15,
      1, "one",
      10, "ten",
      100, (r: any) => r ? "evaluates true" : "evaluates false",
      1000, "thousand",
      "default"
    );
    expect(result).toStrictEqual("evaluates true");
  });

  it("does not match any test expression, returns undefined", () => {
    // prettier-ignore
    const result = condp(lt$, 3000,
      1, "one",
      10, "ten",
      100, "hundred",
      1000, "thousand",
    );
    expect(result).toStrictEqual(undefined);
  });

  it("does not match test expression, returns default result expression", () => {
    // prettier-ignore
    const result = condp(lt$, 2000,
      1, "one",
      10, "ten",
      100, "hundred",
      1000, "thousand",
      "default"
    );
    expect(result).toStrictEqual("default");
  });
});
