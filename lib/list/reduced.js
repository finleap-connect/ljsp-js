/**
 * Wraps `x` in a way such that a `reduce` will terminate with the value `x`
 * @param {*} item
 * @returns {{item: *}}
 */
export function reduced(item) {
  const reducible = { item };

  // Create a non-standard, non-serialisable property to mark this object as reduced
  Object.defineProperty(reducible, "____reduced", {
    value: true,
    writable: false,
    enumberable: false
  });

  return reducible;
}
