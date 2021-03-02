import { isNumber } from "lodash";
import { spec } from "../spec/spec";

export function pos$(num: number): boolean {
  spec({ func: "pos$", spec: { numIsInt: isNumber(num) } });
  return num > 0;
}
