import { spec } from "../spec/spec";

/**
 * @param {[]} set
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function frequencies(set) {
  spec({ func: "frequencies", spec: { setIsArray: Array.isArray(set) } });
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'acc' implicitly has an 'any' type.
  return set.reduce((acc, cur) => {
    if (acc.hasOwnProperty(cur)) {
      acc[cur] = acc[cur] + 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
}
