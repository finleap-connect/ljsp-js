import { empty$ } from "../generic/empty$";
import { runFnOrGetValue } from "./internal/run-fn-or-get-value";

export function and(...rest: Array<any>) {
  if (empty$(rest)) return true;

  let result;
  for (let x = 0; x < rest.length; x++) {
    const current = rest[x];
    result = runFnOrGetValue(current);
    if (!result) {
      return result;
    }
  }
  return result;
}
