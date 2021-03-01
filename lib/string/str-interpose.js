import { isString } from "lodash";
import { spec } from "../spec/spec";

/**
 * @param {string} sep
 * @param {string} str
 * @param {string} splitter
 */
export function strInterpose(sep, str, splitter = " ") {
  spec({
    func: "strInterpose",
    spec: {
      strIsString: isString(str),
      splitterIsString: isString(splitter)
    }
  });

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
