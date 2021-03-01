import { _str } from "./internal/_str";

/**
 * @param {string} rest
 * @returns {*}
 */
// sp :: (Any) -> String

export function toPath(...rest) {
  return _str("/", rest);
}
