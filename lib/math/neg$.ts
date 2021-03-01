import { isNumber } from "lodash";
import { spec } from "../spec/spec";

export function neg$(num: number): boolean {
  spec({ func: "neg$", spec: { numIsInt: isNumber(num) } });
  return num < 0;
}
