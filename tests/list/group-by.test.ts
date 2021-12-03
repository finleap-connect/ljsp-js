import { count } from "../../lib/list/count";
import { groupBy } from "../../lib/list/group-by";

describe("groupBy", () => {
  it("should group a set by a function", () => {
    expect(groupBy(count, ["a", "as", "asd", "aa", "asdf", "qwer"])).toEqual({
      1: ["a"],
      2: ["as", "aa"],
      3: ["asd"],
      4: ["asdf", "qwer"]
    });
  });
  it("should group by a primary key in a set of objects", () => {
    expect(
      groupBy("userId", [
        { userId: 1, uri: "/" },
        { userId: 2, uri: "/foo" },
        { userId: 1, uri: "/account" }
      ])
    ).toEqual({
      1: [
        { userId: 1, uri: "/" },
        { userId: 1, uri: "/account" }
      ],
      2: [{ userId: 2, uri: "/foo" }]
    });
  });
});
