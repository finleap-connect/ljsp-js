import { TAnyObject } from "../types/t-any-object";

export function dissoc(obj: TAnyObject, ...rest: string[]) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    if (!rest.includes(key)) {
      // @ts-ignore
      acc[key] = val;
    }
    return acc;
  }, {});
}
