import { spec } from "../spec/spec";
import { _eq } from "./internal/_eq";
import { isObject } from "./is-object";
import { isTypedSet } from "./is-typed-set";

export function eq<T>(...rest: Array<T>) {
  spec({
    func: "eq",
    spec: { typeIsPrimitive: isTypedSet(rest, (item) => !isObject(item) && !Array.isArray(item)) }
  });
  return _eq(rest, simpleNotEqual);
}

function simpleNotEqual<T>(left: T, right: T) {
  return left !== right;
}
