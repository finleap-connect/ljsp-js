import { _str } from "./internal/_str";

/**
 * @param rest
 * @returns {string|*}
 */
// str :: (Any) -> String
export function str(...rest: Array<any>) {
  return _str("", rest);
}
