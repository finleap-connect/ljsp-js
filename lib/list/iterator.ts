/**
 * @param {[]} set
 * @returns {function(): (*|undefined)}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function iterator(set) {
  let count = 0;
  return function () {
    if (count < set.length) {
      let value = set[count];
      count += 1;
      return value;
    }
  };
}
