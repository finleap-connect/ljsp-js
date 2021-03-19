import { eq } from "../generic/eq";
import { first } from "./first";

export function intersection(...rest: Array<any>) {
  if (eq(rest.length, 1)) {
    return first(rest);
  }
  return rest.reduce((acc, cur) => {
    const comparison = new Set(cur);
    return [...new Set(acc)].filter((x) => comparison.has(x));
  });
}
