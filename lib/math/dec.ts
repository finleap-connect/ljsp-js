import { isNumber } from "lodash";
import { spec } from "../spec/spec";
import { sub } from "./sub";

export function dec(num: number) {
  spec({ func: "inc", spec: { isInteger: isNumber(num) } });
  return sub(num, 1);
}
