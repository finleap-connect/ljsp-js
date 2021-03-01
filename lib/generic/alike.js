import { _eq } from "./internal/_eq";

/**
 * Performs a coercive comparison of two values, using ES's Abstract Equality Comparison
 * @param rest
 * @returns {boolean}
 */
export function alike(...rest) {
  return _eq(rest, looseNotEqual);
}

function looseNotEqual(left, right) {
  return left != right;
}
