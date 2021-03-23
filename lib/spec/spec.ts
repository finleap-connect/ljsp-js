import { object$ } from "../generic/object$";
import { notEmpty$ } from "../generic/not-empty$";
import { string$ } from "../generic/string$";
import { not } from "../generic/not";

type Spec = { func: string; spec: Record<string, boolean> };

function getFailedSpecs(assertions: Record<string, any>): Array<string> {
  return Object.entries(assertions)
    .filter(([_, value]) => {
      return value === null || value === undefined || value === false;
    })
    .map(([key, _]) => key);
}

export function spec({ func, spec }: Spec): void {
  if (!func || !spec || !object$(spec) || not(string$(func))) {
    throw new Error(
      func && string$(func) ? `Malformed Spec in function: ${func}` : `Malformed Spec, missing function label`
    );
  }
  const failedSpecs = getFailedSpecs(spec);
  if (notEmpty$(failedSpecs)) {
    throw new Error(`Assertion Failed at function ${func}: ${failedSpecs.join(", ")}`);
  }
}

export const pre = spec;

export const after = spec;
