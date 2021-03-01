import { eq } from "../generic/eq";
import { spec } from "../spec/spec";

export function even$(num: number): boolean {
  spec({ func: "even$", spec: { numIsInt: Number.isInteger(num) } });
  return eq(num % 2, 0);
}
