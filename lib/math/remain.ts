import { spec } from "../spec/spec";
import { pos$ } from "./pos$";

export function remain(dividend: number, divisor: number): number {
  spec({
    func: "quot",
    spec: { isDividendInteger: pos$(dividend), isDivisorInteger: pos$(dividend) }
  });
  return dividend % divisor;
}
