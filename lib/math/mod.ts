import { spec } from "../spec/spec";
import { pos$ } from "./pos$";

export function mod(dividend: number, divisor: number): number {
  spec({
    func: "quot",
    spec: { isDividendInteger: pos$(dividend), isDivisorInteger: pos$(dividend) }
  });
  let mod = dividend % divisor;
  if (mod < 0) {
    mod = divisor < 0 ? mod - divisor : mod + divisor;
  }
  return mod;
}
