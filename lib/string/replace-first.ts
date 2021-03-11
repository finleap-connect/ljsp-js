import { regExp$ } from "../generic/reg-exp$";

/**
 * Replaces the first instance of match with replacement in s. Functions
 * similarly to native JS replace (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
 * @param {string} str
 * @param {string | RegExp} matcher
 * @param {string} replacement
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'str' implicitly has an 'any' type.
export function replaceFirst(str, matcher, replacement) {
  if (regExp$(matcher)) {
    const regExStr = matcher.toString();
    const lastIndex = regExStr.lastIndexOf("/");
    const parsed = regExStr.slice(1, lastIndex);
    const args = regExStr.slice(lastIndex + 1).replace("g", "");
    matcher = new RegExp(parsed, args);
  }
  return str.replace(matcher, replacement);
}
