import { notEq } from "../generic/not-eq";
import { spec } from "../spec/spec";

export function odd$(num: number): boolean {
  spec({ func: "odd$", spec: { numIsInt: Number.isInteger(num) } });
  return notEq(num % 2, 0);
}
