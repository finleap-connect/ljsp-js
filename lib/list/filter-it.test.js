const { iterator } = require("./iterator");
const { filterIt } = require("./filter-it");

describe("filterIt", function () {
  it("should filter an iterable", function () {
    const set = iterator([1, 2, 3, 4, 5]);
    const filtered = filterIt((num) => num > 2, set);
    const result = filtered();
    expect(result).toEqual(3);
  });
});
