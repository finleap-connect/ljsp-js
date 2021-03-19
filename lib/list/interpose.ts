import { isEmpty } from "lodash";

/**
 * @param {*} sep
 * @param {[]} set
 * @returns {(function(*): *)|*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'sep' implicitly has an 'any' type.
export function interpose(sep, set) {
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
