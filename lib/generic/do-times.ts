import { isFunction } from "lodash";
import { spec } from "../spec";

export function doTimes(times: number, ...rest: Array<any>) {
  spec({ func: "doTimes", spec: { timesIsNumber: Number.isInteger(times) } });
  for (let x = 0; x < times; x++) {
    const expression = rest[x];
    if (isFunction(expression)) {
      expression(x);
    } else {
      expression;
    }
  }
}
