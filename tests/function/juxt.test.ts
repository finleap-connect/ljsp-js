import { juxt } from "../../lib/function";

describe("juxt", () => {
  it("returns an array containing the juxtaposition of the composed functions", () => {
    const fn = juxt(
      (n: number) => n * 2,
      (n: number) => n + 1
    );
    const r = fn(3);
    expect(r.length).toEqual(2);
    expect(r).toEqual([6, 4]);
  });
});
