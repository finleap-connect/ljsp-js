import { empty$, eq } from "../generic";
import { gt$ } from "../math";
import { condp } from "../conditional";

export function map(fn: Function, ...args: Array<any>) {
  if (empty$(args)) {
    return function (stepFunction: Function) {
      return function (...args: any[]) {
        const len = args.length;
        const [result, ...rest] = args;
        // prettier-ignore
        return condp(eq, len,
          0, () => stepFunction(),
          1, () => stepFunction(result),
          () => {
            return stepFunction(result, fn(...rest));
          }
        );
      };
    };
  } else {
    const shortest = args.reduce((acc, cur) => (gt$(acc.length, cur.length) ? acc : cur));
    const result = [];

    for (let x = 0; x < shortest.length; x++) {
      const col = getColumn(args, x);
      result.push(fn(...col));
    }

    return result;
  }
}

function getColumn(arr: Array<any>, column: number) {
  return arr.map((set) => set[column]);
}
