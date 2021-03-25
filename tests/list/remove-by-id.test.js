const { removeById } = require("../../lib/list/remove-by-id");

describe("removeById", function () {
  it("should remove an item from an Array of Objects by the value of the Object's ID property", function () {
    const set = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const result = removeById(set, 2);
    expect(result).toEqual([{ id: 1 }, { id: 3 }]);
  });
  it("should remove an item from an Array of Objects by a provided ID property", function () {
    const set = [{ name: 1 }, { name: 2 }, { name: 3 }];
    const result = removeById(set, 2, "name");
    expect(result).toEqual([{ name: 1 }, { name: 3 }]);
  });
});
