/**
 * @param {Function} fn
 * @param {Function} it
 */
export function forIt(fn, it) {
  let x;
  while ((x = it())) {
    fn(x);
  }
}
