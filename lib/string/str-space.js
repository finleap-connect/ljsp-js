import { _str } from "./internal/_str";

/**
 * @param rest
 * @returns {string|*}
 */
// sp :: (Any) -> String
export function strSpace(...rest) {
  return _str(" ", rest);
}
