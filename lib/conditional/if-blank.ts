import { ifYes } from "./if-yes";

/**
 * @param {boolean | Function} condition
 * @param {*} consequent
 * @returns {*|string}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'condition' implicitly has an 'any' type... Remove this comment to see the full error message
export function ifBlank(condition, consequent) {
  return ifYes(condition, consequent) || "";
}
