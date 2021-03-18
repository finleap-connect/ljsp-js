const { memoize } = require("function");

// takes an argument to return the fibonacci value
const fibonacci = (n) => {
  if (n === 1) return 1;
  return n * fibonacci(n - 1);
};

// takes two object and returns the sum of values of keys in a with b.
const addObjectProp = (a, b) => {
  const result = {};
  Object.keys(a).forEach((k) => {
    result[k] = parseInt(a[k]) + parseInt(b[k]);
  });
  return result;
};

describe("memoize", function () {
  it("memoizes function with single argument", function () {
    const memoizedFiboNacci = memoize(fibonacci);

    expect(memoizedFiboNacci(5)).toEqual(120);
    expect(memoizedFiboNacci.getCache().size).toEqual(1);

    expect(memoizedFiboNacci(6)).toEqual(720);
    expect(memoizedFiboNacci.getCache().size).toEqual(2);
  });
  it("memoizes function with objects", function () {
    const cacheKey = (x, y) => `${x.a}-${x.b}-${y.a}-${y.b}`;

    const memoizeAdd = memoize(addObjectProp, cacheKey);

    let x = { a: 1, b: 1 },
      y = { a: 2, b: 2 },
      z = { a: 3, b: 3 };

    expect(memoizeAdd(x, y)).toEqual({ a: 3, b: 3 });
    expect(memoizeAdd.getCache().size).toEqual(1);
    expect(memoizeAdd(y, z)).toEqual({ a: 5, b: 5 });
    expect(memoizeAdd.getCache().size).toEqual(2);
  });
});
