/**
 * @param {[]} set
 * @param {*} rest
 * @returns {*[]}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function notIncludes(set, ...rest) {
  return !rest.every((item) => set.includes(item));
}
