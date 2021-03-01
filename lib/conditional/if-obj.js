import { ifYes } from "./if-yes";

/**
 * @param {boolean | Function} condition
 * @param {{}} consequent
 * @returns {*|string}
 */
export function ifObj(condition, consequent) {
  return ifYes(condition, consequent) || {};
}
