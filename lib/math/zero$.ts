import { eq } from "../generic/eq";
import { spec } from "../spec/spec";

export function zero$(num: number): boolean {
  spec({ func: "zero$", spec: { numIsInt: Number.isInteger(num) } });
  return eq(num, 0);
}
