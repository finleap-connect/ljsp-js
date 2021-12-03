import { updateSet } from "../../lib/list/update-set";

describe("updateSet", function () {
  it("should update a set based on the Object's ID property", function () {
    const set = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const result = updateSet(set, { id: 2, name: "Pete" });
    expect(result).toEqual([{ id: 1 }, { id: 2, name: "Pete" }, { id: 3 }]);
  });
  it("should update a set based on a provided ID property", function () {
    const set = [{ name: 1 }, { name: 2 }, { name: 3 }];
    const result = updateSet(set, { name: 2, age: 22 }, "name");
    expect(result).toEqual([{ name: 1 }, { name: 2, age: 22 }, { name: 3 }]);
  });
});
