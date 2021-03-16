import { spec } from "../spec";

export function dotimes(times: number, fn: Function) {
  spec({ func: "doTimes", spec: { timesIsNumber: Number.isInteger(times) } });
  for (let x = 0; x < times; x++) {
    fn(x);
  }
}
