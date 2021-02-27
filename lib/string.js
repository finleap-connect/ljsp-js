import { first, isEmpty, isString } from "lodash";
import { cond, ELSE } from "./conditional";
import { isRegExp, void$ } from "./generic";
import { spec } from "./spec";

function _str(delimiter, ...rest) {
  const args = first(rest);
  // prettier-ignore
  return cond(
    isEmpty(args),
    "",
    args.length === 1,
    () => {
      const val = first(args);
      return void$(val) ? "" : val.toString();
    },
    ELSE,
    () => {
      const result = args.map((arg) => (void$(arg) ? "" : arg.toString()));
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
  const isNull = str === undefined || str === null;
  spec({ func: "blank$", spec: { strIsString: isString(str) || isNull } });
  return isNull || str.trim() === "";
}

/**
 * Replaces the first instance of match with replacement in s. Functions
 * similarly to native JS replace (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
 * @param {string} str
 * @param {string | RegExp} matcher
 * @param {string} replacement
 */
export function replaceFirst(str, matcher, replacement) {
  if (isRegExp(matcher)) {
    const regExStr = matcher.toString();
    const lastIndex = regExStr.lastIndexOf("/");
    const parsed = regExStr.slice(1, lastIndex);
    const args = regExStr.slice(lastIndex + 1).replace("g", "");
    matcher = new RegExp(parsed, args);
  }
  return str.replace(matcher, replacement);
}
