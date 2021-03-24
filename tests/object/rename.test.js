const { rename } = require("../../lib/object/rename");

describe("rename", function () {
  it("should rename fields", function () {
    const users = [
      { name: "John Doe", country: "US", pin: 100001 },
      { name: "Micheal Klark", country: "US" },
      { name: "Sheldon", country: "Cooper", zip: 20001 }
    ];

    expect(rename(users, { pin: "zip" })).toEqual([
      { name: "John Doe", country: "US", zip: 100001 },
      { name: "Micheal Klark", country: "US" },
      { name: "Sheldon", country: "Cooper", zip: 20001 }
    ]);
  });
});
