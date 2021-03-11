import { notEq } from "../generic";
import { spec } from "../spec";
import { eq } from "../generic";

export function odd$(num: number): boolean {
  spec({ func: "odd$", spec: { numIsInt: Number.isInteger(num) } });
  return eq(num, 0) ? false : notEq(num % 2, 0);
}
