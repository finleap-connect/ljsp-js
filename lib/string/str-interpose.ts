import { isString } from "lodash";
import { spec } from "../spec/spec";

/**
 * @param {string} sep
 * @param {string} str
 * @param {string} splitter
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'sep' implicitly has an 'any' type.
export function strInterpose(sep, str, splitter = " ") {
  spec({
    func: "strInterpose",
    spec: {
      strIsString: isString(str),
      splitterIsString: isString(splitter)
    }
  });

  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'str' implicitly has an 'any' type.
  function run(str) {
    sep = sep.toString();
    return str.split(splitter).join(sep);
  }

  if (!str) {
    return run;
  } else {
    return run(str);
  }
}
