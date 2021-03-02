/**
 * @param {Function} fn
 * @param {Function} it
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'fn' implicitly has an 'any' type.
export function forIt(fn, it) {
  let x;
  while ((x = it())) {
    fn(x);
  }
}
