import { gt$ } from "../math/gt$";
import { lt$ } from "../math/lt$";

export function lazyMap(fn: Function, ...args: Array<any>) {
  const shortest = args.reduce((acc, cur) => (gt$(acc.length, cur.length) ? acc : cur));
  let index = 0;

  return function () {
    if (lt$(index, shortest.length)) {
      const col = getColumn(args, index);
      index++;
      return fn(...col);
    } else {
      return undefined;
    }
  };
}

function getColumn(arr: Array<any>, column: number) {
  return arr.map((set) => set[column]);
}
