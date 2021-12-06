// @ts-nocheck
import { next } from "../list/next";
import { notEmpty$ } from "../generic/not-empty$";
import { object$ } from "../generic/object$";

export function updateIn(map: object, keys: string[], func: Function, ...args: any): object {
  let current = keys[0];
  let rest = next(keys);
  if (notEmpty$(rest)) {
    if (object$(map[current])) {
      return Object.assign({}, map, { [current]: updateIn(map[current], rest, func, ...args) });
    } else {
      throw new Error("Invalid property: there is no property at this level");
    }
  } else {
    return Object.assign({}, map, { [current]: func(map[current], ...args) });
  }
}
