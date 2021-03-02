import { isEmpty, isString } from "lodash";
import { isObject } from "../generic/is-object";

type Spec = { func: string; spec: Record<string, boolean> };

function getFailedSpecs(assertions: Record<string, any>): Array<string> {
  return Object.entries(assertions)
    .filter(([_, value]) => {
      return value === null || value === undefined || value === false;
    })
    .map(([key, _]) => key);
}

export function spec({ func, spec }: Spec): void {
  if (!func || !spec || !isObject(spec) || !isString(func)) {
    throw new Error(
      func && isString(func) ? `Malformed Spec in function: ${func}` : `Malformed Spec, missing function label`
    );
  }
  const failedSpecs = getFailedSpecs(spec);
  if (!isEmpty(failedSpecs)) {
    throw new Error(`Assertion Failed at function ${func}: ${failedSpecs.join(", ")}`);
  }
}

export const pre = spec;

export const after = spec;
