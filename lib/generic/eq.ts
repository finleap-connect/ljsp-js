import { spec } from "../spec/spec";
import { _eq } from "./internal/_eq";
import { isObject } from "./is-object";
import { isTypedSet } from "./is-typed-set";

export function eq(...rest: any) {
  spec({
    func: "eq",
    spec: { typeIsPrimitive: isTypedSet(rest, (item) => !isObject(item) && !Array.isArray(item)) }
  });
  return _eq(rest, simpleNotEqual);
}

function simpleNotEqual(left: any, right: any) {
  return left !== right;
}
