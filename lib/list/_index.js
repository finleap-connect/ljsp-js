/**
 * @param {{}[]} objs
 * @param {string[]} keys
 * @returns {*}
 */
import { str } from "../string/str";

export function index(objs, keys) {
  return keys.reduce((acc, cur) => {
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
