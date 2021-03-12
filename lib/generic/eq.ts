import { spec } from "../spec";
import { _eq } from "./internal/_eq";
import { object$ } from "./object$";
import { typedSet$ } from "./internal/typed-set$";
import { Primitive } from "../types/primitive";

export function eq(...rest: Array<Primitive>) {
  spec({
    func: "eq",
    spec: { typeIsPrimitive: typedSet$(rest, (item) => !object$(item) && !Array.isArray(item)) }
  });
  return _eq(rest, simpleNotEqual);
}

function simpleNotEqual(left: any, right: any) {
  return left !== right;
}
