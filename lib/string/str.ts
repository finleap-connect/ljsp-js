import { _str } from "./internal/_str";

/**
 * @param rest
 * @returns {string|*}
 */
// str :: (Any) -> String
// @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'rest' implicitly has an 'any[]' ty... Remove this comment to see the full error message
export function str(...rest) {
  return _str("", rest);
}
