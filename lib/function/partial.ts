import { apply } from "./apply";

export function partial(fn: Function, ...rest: any[]) {
  return function (...args: any[]) {
    return apply(fn, [...rest, ...args]);
  };
}
