import { flattenChildTree } from "../../lib/list/flatten-child-tree";

describe("flattenChildTree", function () {
  it("should flatten a child tree", function () {
    expect(
      flattenChildTree([
        {
          one: 1,
          children: [
            {
              two: 2,
              children: [
                {
                  three: 3,
                  children: []
                }
              ]
            }
          ]
        },
        {
          one: 1,
          children: [
            {
              two: 2,
              children: []
            }
          ]
        }
      ])
    ).toEqual([
      { one: 1, children: [{ two: 2, children: [{ three: 3, children: [] }] }] },
      { two: 2, children: [{ three: 3, children: [] }] },
      { three: 3, children: [] },
      { one: 1, children: [{ two: 2, children: [] }] },
      { two: 2, children: [] }
    ]);
  });
});
