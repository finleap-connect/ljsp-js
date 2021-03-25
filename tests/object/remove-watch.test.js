const { swap } = require("../../lib");
const { addWatch } = require("../../lib");
const { removeWatch } = require("../../lib");

describe("removeWatch", function () {
  it("should do nothing", function () {
    const ferret = { one: 1, two: 2, three: 3 };
    const test = jest.fn();

    const watchedFerret = addWatch(ferret, "two", (key, object, oldState, newState) => {
      test(`"ferret updated: ${key}, ${oldState} - ${newState}"`);
    });

    swap(watchedFerret, (ferret) => {
      ferret.two = 42;
      return ferret;
    });

    expect(test).toHaveBeenCalledWith('"ferret updated: two, 2 - 42"');

    removeWatch(watchedFerret, "two");

    swap(watchedFerret, (ferret) => {
      ferret.two = 42;
      return ferret;
    });

    expect(test.mock.calls.length).toBe(1);
  });
});
