/**
 * @param {[]} set
 * @param {Function} fn
 * @returns {Boolean}
 */
export function isTypedSet(set, fn) {
  return set.every((item) => fn(item));
}
