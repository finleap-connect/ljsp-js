import { swap } from "../../lib";
import { addWatch } from "../../lib";

describe("addWatch", function () {
  it("should add a watcher to an Object", function () {
    const ferret = { one: 1, two: 2, three: 3 };
    const test = jest.fn();

    const watchedFerret = addWatch(ferret, "two", (key: any, object: any, oldState: any, newState: any) => {
      test(`"ferret updated: ${key}, ${oldState} - ${newState}"`);
    });

    swap(watchedFerret, (ferret: { two: number }) => {
      ferret.two = 42;
      return ferret;
    });

    expect(test).toHaveBeenCalledWith('"ferret updated: two, 2 - 42"');
  });
});
