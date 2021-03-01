import { isEmpty } from "lodash";
import { spec } from "../spec/spec";

/**
 * @param {*} sep
 * @param {[]} set
 * @returns {(function(*): *)|*}
 */
export function interpose(sep, set) {
  spec({ func: "interpose", spec: { setIsArray: Array.isArray(set) } });
  function run(set) {
    return set.reduce((acc, cur) => {
      return !isEmpty(acc) ? acc.concat([sep, cur]) : [cur].concat(sep);
    }, []);
  }
  if (!set) {
    return run;
  } else {
    return run(set);
  }
}
