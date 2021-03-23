import { function$ } from "../generic/function$";
import { empty$ } from "../generic";

export function and(...rest: Array<any>) {
  if (empty$(rest)) return true;

  let result;
  for (let x = 0; x < rest.length; x++) {
    const current = rest[x];
    result = function$(current) ? current() : current;
    if (!result) {
      return result;
    }
  }
  return result;
}
