/**
 * @param {Function} fn
 * @param {Function} itr
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'fn' implicitly has an 'any' type.
export function forIt(fn, itr) {
  let x;
  while ((x = itr())) {
    fn(x);
  }
}
