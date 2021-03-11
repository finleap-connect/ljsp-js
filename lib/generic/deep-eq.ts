import { isEqual } from "lodash";
import { spec } from "../spec/spec";
import { _eq } from "./internal/_eq";
import { object$ } from "./object$";
import { typedSet$ } from "./internal/typed-set$";

export function deepEq(...rest: Array<any>): boolean {
  spec({
    func: "eq",
    spec: { typeIsStructural: typedSet$(rest, (item) => object$(item) || Array.isArray(item)) }
  });
  return _eq(rest, deepNotEqual);
}

function deepNotEqual(left: any, right: any): boolean {
  return !isEqual(left, right);
}
