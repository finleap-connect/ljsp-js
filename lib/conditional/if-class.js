import { ifYes } from "./if-yes";

/**
 * @param {boolean | Function} condition
 * @param {string} className
 * @returns {*|string}
 */
export function ifClass(condition, className) {
  return ifYes(condition, className) || "";
}
