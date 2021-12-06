import { project } from "../../lib/object/project";

describe("project", function () {
  it("should strip out unwanted properties pairs from an Object", function () {
    expect(project({ one: 1, two: 2, three: 3 }, ["one", "three"])).toEqual([{ one: 1, three: 3 }]);
  });
  it("should unwanted properties from a set of Objects", function () {
    expect(
      project(
        [
          { one: 1, two: 2, three: 3 },
          { one: 1, two: 2, three: 3 }
        ],
        ["one", "three"]
      )
    ).toEqual([
      { one: 1, three: 3 },
      { one: 1, three: 3 }
    ]);
  });
});
