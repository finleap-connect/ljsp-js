import { first, isEmpty } from "lodash";
import { cond, ELSE } from "./conditional";

function _str(delimiter, ...rest) {
  const args = first(rest);
  // prettier-ignore
  return cond(
    isEmpty(args), "",
    args.length === 1, () => first(args).toString(),
    ELSE, () => {
      const result = args.map((arg) => arg.toString());
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
