import { isEmpty, isString } from "lodash";
import { isObject } from "../generic/is-object";

function getFailedSpecs(assertions) {
  return Object.entries(assertions)
    .filter(([_, value]) => {
      return value === null || value === undefined || value === false;
    })
    .map(([key, _]) => key);
}

/**
 * @param {string} func
 * @param {object} spec
 */
export function spec({ func, spec }) {
  if (!func || !spec || !isObject(spec) || !isString(func)) {
    throw new Error(
      func && isString(func)
        ? `Malformed Spec in function: ${func}`
        : `Malformed Spec, missing function label`
    );
  }
  const failedSpecs = getFailedSpecs(spec);
  if (!isEmpty(failedSpecs)) {
    throw new Error(`Assertion Failed at function ${func}: ${failedSpecs.join(", ")}`);
  }
}

export const pre = spec;

export const after = spec;
