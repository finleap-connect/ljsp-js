import { first, isEmpty, isString } from "lodash";
import { cond, ELSE, iff, or } from "./conditional";
import { eq, void$ } from "./generic";
import { spec } from "./spec";

function _str(delimiter, ...rest) {
  const args = first(rest);
  // prettier-ignore
  return cond(
    isEmpty(args), "",
    eq(args.length, 1), () => {
      const val = first(args);
      return void$(val) ? "" : val.toString();
    },
    ELSE, () => {
      const result = args.map((arg) => iff(void$(arg), "", () => arg.toString()));
      return result.join(delimiter);
    }
  );
}

/**
 * @param rest
 * @returns {string|*}
 */
// str :: (Any) -> String
export function str(...rest) {
  return _str("", rest);
}

/**
 * @param rest
 * @returns {string|*}
 */
// sp :: (Any) -> String
export function strSpace(...rest) {
  return _str(" ", rest);
}

/**
 * @param {string} rest
 * @returns {*}
 */
// sp :: (Any) -> String
export function toPath(...rest) {
  return _str("/", rest);
}

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

/**
 * @param str
 * @returns {boolean}
 */
export function blank$(str) {
  const isNull = void$(str);
  spec({ func: "blank$", spec: { strIsString: or(isString(str), isNull) } });
  return or(isNull, eq(str.trim(), ""));
}
