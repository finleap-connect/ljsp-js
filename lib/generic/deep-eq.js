import { isEqual } from "lodash";
import { spec } from "../spec/spec";
import { _eq } from "./internal/_eq";
import { isObject } from "./is-object";
import { isTypedSet } from "./is-typed-set";

/**
 * @param {[] | object} rest
 * @returns {boolean}
 */
export function deepEq(...rest) {
  spec({
    func: "eq",
    spec: { typeIsStructural: isTypedSet(rest, (item) => isObject(item) || Array.isArray(item)) }
  });
  return _eq(rest, deepNotEqual);
}

function deepNotEqual(left, right) {
  return !isEqual(left, right);
}
