import { isEmpty } from "lodash";
import { spec } from "../spec/spec";

/**
 * @param {*} sep
 * @param {[]} set
 * @returns {(function(*): *)|*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'sep' implicitly has an 'any' type.
export function interpose(sep, set) {
  spec({ func: "interpose", spec: { setIsArray: Array.isArray(set) } });
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
  function run(set) {
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'acc' implicitly has an 'any' type.
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
