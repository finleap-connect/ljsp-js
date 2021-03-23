const { instance$ } = require("./instance$");
describe("instance$", () => {
  it("returns true if the second argument is an instance of a primitive", () => {
    expect(instance$(String, "1")).toEqual(true);
  });
  it("returns true if the item is an instance of a known object", () => {
    expect(instance$(Set, new Set())).toEqual(true);
  });
  it("returns true if the second argument is an instance of a custom object", () => {
    class Dog {}
    const dog = new Dog();
    expect(instance$(Dog, dog)).toEqual(true);
  });
  it("returns false if the second argument is not an instance of the first", () => {
    expect(instance$(String, true)).toEqual(false);
  });
});
