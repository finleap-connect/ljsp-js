const { juxt } = require("function");

describe("juxt", () => {
  it("returns an array containing the juxtaposition of the composed functions", () => {
    const fn = juxt(
      (n) => n * 2,
      (n) => n + 1
    );
    const r = fn(3);
    expect(r.length).toEqual(2);
    expect(r).toEqual([6, 4]);
  });
});
