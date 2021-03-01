import { spec } from "../spec/spec";
import { isObject } from "./is-object";
import { isTypedSet } from "./is-typed-set";

/**
 * @param {*} rest
 * @returns {boolean}
 */
export function eq(...rest) {
  spec({
    func: "eq",
    spec: { typeIsPrimitive: isTypedSet(rest, (item) => !isObject(item) && !Array.isArray(item)) }
  });
  return _eq(rest, simpleNotEqual);
}

function simpleNotEqual(left, right) {
  return left !== right;
}
