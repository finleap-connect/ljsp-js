import { gt$ } from "../math/gt$";
import { lt$ } from "../math/lt$";
import { getArraySetColumn } from "./get-array-set-column";

export function lazyMap(fn: Function, ...args: Array<any>) {
  const shortest = args.reduce((acc, cur) => (gt$(acc.length, cur.length) ? acc : cur));
  let index = 0;

  return function () {
    if (lt$(index, shortest.length)) {
      const col = getArraySetColumn(args, index);
      index++;
      return fn(...col);
    } else {
      return undefined;
    }
  };
}
