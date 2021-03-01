/**
 * Wraps `x` in a way such that a `reduce` will terminate with the value `x`
 * @param {*} item
 * @returns {{item: *}}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
export function reduced(item) {
  const reducible = { item };

  // Create a non-standard, non-serialisable property to mark this object as reduced
  Object.defineProperty(reducible, "____reduced", {
    value: true,
    writable: false,
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ value: boolean; writable: fals... Remove this comment to see the full error message
    enumberable: false
  });

  return reducible;
}
