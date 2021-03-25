const { natJoin } = require("../../lib/list/nat-join");

describe("join", () => {
  describe("two args", () => {
    it("should return a Cartesian product if there are no common keys", () => {
      const firstRelation = [{ a: 1 }, { a: 2 }];
      const secondRelation = [{ b: 1 }, { b: 2 }];
      const result = natJoin(firstRelation, secondRelation);
      expect(result).toEqual([
        [{ a: 1 }, { b: 1 }],
        [{ a: 1 }, { b: 2 }],
        [{ a: 2 }, { b: 1 }],
        [{ a: 2 }, { b: 2 }]
      ]);
    });
  });
  it("should return the relation corresponding to the natural join if there is a common key", () => {
    const firstRelation = [
      { name: "betsy", owner: "brian", kind: "cow" },
      { name: "jake", owner: "brian", kind: "horse" },
      { name: "josie", owner: "dawn", kind: "cow" }
    ];

    const secondRelation = [
      { kind: "cow", personality: "stoic" },
      { kind: "horse", personality: "skittish" }
    ];

    const result = natJoin(firstRelation, secondRelation);

    expect(result).toEqual([
      { kind: "cow", personality: "stoic", name: "betsy", owner: "brian" },
      {
        kind: "horse",
        personality: "skittish",
        name: "jake",
        owner: "brian"
      },
      { kind: "cow", personality: "stoic", name: "josie", owner: "dawn" }
    ]);
  });
  it("should return the relation corresponding to the natural join using a key map to join the sets", () => {
    const firstRelation = [
      { name: "betsy", owner: "brian", kind: "cow" },
      { name: "jake", owner: "brian", kind: "horse" },
      { name: "josie", owner: "dawn", kind: "cow" }
    ];

    const secondRelation = [
      { species: "cow", personality: "stoic" },
      { species: "horse", personality: "skittish" }
    ];

    const result = natJoin(firstRelation, secondRelation, ["kind", "species"]);

    expect(result).toEqual([
      {
        species: "cow",
        personality: "stoic",
        name: "betsy",
        owner: "brian",
        kind: "cow"
      },
      {
        species: "horse",
        personality: "skittish",
        name: "jake",
        owner: "brian",
        kind: "horse"
      },
      {
        species: "cow",
        personality: "stoic",
        name: "josie",
        owner: "dawn",
        kind: "cow"
      }
    ]);
  });
});
