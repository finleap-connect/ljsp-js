import { spec } from "./spec";
import first from "lodash/first";
import isEmpty from "lodash/isEmpty";
import { cond, ELSE } from "./conditional";
import { isStringSet } from "./generic";

function _str(delimiter, ...rest) {
  const args = first(rest);
  // prettier-ignore
  return cond(
    isEmpty(args), "",
    args.length === 1, () => first(args).toString(),
    ELSE, () => {
      const result = args.map((arg) => arg.toString())
      return result.join(delimiter)
    }
  );
}

/**
 * Concatenates strings
 * @param rest
 * @returns {string|*}
 */
// str :: (Any) -> String
export function str(...rest) {
  spec({ func: "str", spec: { areAllStrings: rest.length > 1 && isStringSet(rest) } });
  return _str("", rest);
}

/**
 * Concatenates strings with a space
 * @param rest
 * @returns {string|*}
 */
// sp :: (Any) -> String
export function strSpace(...rest) {
  return _str(" ", rest);
}

/**
 * Concatenates strings into a path separated string.
 * @param {string} rest
 * @returns {*}
 */
// sp :: ...String -> String
export function toPath(...rest) {
  spec({ func: "toPath", spec: { areAllStrings: isStringSet(rest) } });
  return _str("/", rest);
}
