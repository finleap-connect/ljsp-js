/**
 * @param {{}[]} objs
 * @param {string[]} keys
 * @returns {*}
 */
import { str } from "../string/str";

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'objs' implicitly has an 'any' type.
export function index(objs, keys) {
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'acc' implicitly has an 'any' type.
  return keys.reduce((acc, cur) => {
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'obj' implicitly has an 'any' type.
    objs.forEach((obj) => {
      const value = obj[cur];
      const indexProp = str(cur, "_", value);
      if (acc.hasOwnProperty(indexProp)) {
        acc[indexProp].push(obj);
      } else {
        acc[indexProp] = [obj];
      }
    });
    return acc;
  }, {});
}
