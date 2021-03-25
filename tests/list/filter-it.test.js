const { iterator } = require("../../lib/list/iterator");
const { filterIt } = require("../../lib/list/filter-it");

describe("filterIt", function () {
  it("should filter an iterable", function () {
    const set = iterator([1, 2, 3, 4, 5]);
    const filtered = filterIt((num) => num > 2, set);
    const result = filtered();
    expect(result).toEqual(3);
  });
});
