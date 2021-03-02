import { _str } from "./internal/_str";

/**
 * @param {string} rest
 * @returns {*}
 */
// sp :: (Any) -> String

// @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'rest' implicitly has an 'any[]' ty... Remove this comment to see the full error message
export function toPath(...rest) {
  return _str("/", rest);
}
