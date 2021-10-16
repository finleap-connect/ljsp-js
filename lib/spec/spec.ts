import { object$ } from "../generic/object$";
import { notEmpty$ } from "../generic/not-empty$";
import { string$ } from "../generic/string$";
import { not } from "../generic/not";

let isEnabled = true;

function getFailedSpecs(assertions: any): Array<string> {
  return Object.entries(assertions)
    .filter(([_, value]) => {
      return value === null || value === undefined || value === false;
    })
    .map(([key, _]) => key);
}

function validateSpec(func: any, spec: Record<string, boolean> | undefined) {
  if (!func || !spec || !object$(spec) || not(string$(func))) {
    throw new Error(
      func && string$(func) ? `Malformed Spec in function: ${func}` : `Malformed Spec, missing function label`
    );
  }
}

function normaliseInputs(func: any, spec: Record<string, boolean> | undefined) {
  if (object$(func)) {
    spec = func.spec;
    func = func.func;
  } else {
    func = func.name;
  }
  return { func, spec };
}

export function spec(func: any, spec?: Record<string, boolean> | undefined): void {
  if (!isEnabled) return;

  // If `func` is an object, we assume it is of the standard `spec` object form. Otherwise,
  // we assume that the value being passed in is a a function.
  const { func: _func, spec: _spec } = normaliseInputs(func, spec);

  validateSpec(_func, _spec);

  const failedSpecs = getFailedSpecs(_spec);

  if (notEmpty$(failedSpecs)) {
    throw new Error(`Assertion Failed at function ${_func}: ${failedSpecs.join(", ")}`);
  }
}

export function enableSpecs(enabled$: boolean) {
  isEnabled = enabled$;
}

export const pre = spec;

export const after = spec;
