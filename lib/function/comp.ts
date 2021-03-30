import { makeArray } from "../list/make-array";

export function comp(...fns: Array<Function>) {
  return function (...args: Array<any>) {
    return fns.reduceRight((acc, fn) => {
      return fn(...makeArray(acc));
    }, args);
  };
}
