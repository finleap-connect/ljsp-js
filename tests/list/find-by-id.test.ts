import { findById } from "../../lib/list/find-by-id";

describe("findById", function () {
  const set = [
    { id: "101", name: "JavaScript 101 for Dummies" },
    { id: "201", name: "JavaScript 201 for Dummies" }
  ];
  it("should find by id", function () {
    expect(findById(set, "101")).toEqual({ id: "101", name: "JavaScript 101 for Dummies" });
    expect(findById(set, "JavaScript 101 for Dummies", "name")).toEqual({
      id: "101",
      name: "JavaScript 101 for Dummies"
    });
  });
  it("should find by custom prop", function () {
    expect(findById(set, "JavaScript 101 for Dummies", "name")).toEqual({
      id: "101",
      name: "JavaScript 101 for Dummies"
    });
  });
});
