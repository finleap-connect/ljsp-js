import { isNumber } from "lodash";
import { spec } from "../spec/spec";
import { add } from "./add";

export function inc(num: number): number {
  spec({ func: "inc", spec: { isInteger: isNumber(num) } });
  return add(num, 1);
}
