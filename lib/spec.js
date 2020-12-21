import isEmpty from "lodash/isEmpty";
import isObject from "lodash/isObject";
import isString from "lodash/isString";

/**
 * A Condition (Pre|Post) error
 * @param location
 * @constructor
 */
function ConditionError(location) {
  this.message = `${location} failed`;
}

function getFailedSpecs(assertions) {
  return Object.entries(assertions)
    .filter(([_, value]) => {
      return value === null || value === undefined || value === false;
    })
    .map(([key, _]) => key);
}

/**
 * Will evaluate an array of Booleans, or Boolanies (truthy|falsy) for
 * the existence of a false(y)
 * @param {string} func
 * @param {object} spec
 */
export function spec({ func, spec }) {
  if (!func || !spec || !isObject(spec) || !isString(func)) {
    throw new Error(
      func && isString(func) ? `Malformed Spec in function: ${func}` : `Malformed Spec, missing function label`
    );
  }
  const failedSpecs = getFailedSpecs(spec);
  if (!isEmpty(failedSpecs)) {
    try {
      throw new Error(`Assertion Failed at function ${func}: ${failedSpecs.join(", ")}`);
    } catch (error) {
      throw new ConditionError(func);
    }
  }
}

/**
 * Asserts a statement
 */

export const pre = spec;

export const after = spec;
