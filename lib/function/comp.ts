import { makeArray } from "../list";

export function comp(...fns: Array<Function>) {
  return function (...args: Array<any>) {
    return fns.reduceRight((acc, fn) => {
      return fn(...makeArray(acc));
    }, args);
  };
}
