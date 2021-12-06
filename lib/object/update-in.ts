// @ts-nocheck
import { next } from "../list/next";

export function updateIn(map: object, keys: string[], func: Function, ...args: any): any {
  let current = keys[0];
  let rest = next(keys);
  if (rest) {
    return Object.assign({}, map, { [current]: updateIn(map[current], rest, func, ...args) });
  } else {
    return Object.assign({}, map, { [current]: func(map[current], ...args) });
  }
}
