import { spec } from "../spec/spec";
import { pos$ } from "./pos$";

export function quot(dividend: number, divisor: number): number {
  spec({
    func: "quot",
    spec: { isDividendInteger: pos$(dividend), isDivisorInteger: pos$(dividend) }
  });
  return Math.trunc(dividend / divisor);
}
