import { isFunction } from "lodash";

export function runFnOrGetValue(ifTrue, value) {
  return isFunction(ifTrue) ? ifTrue(value) : ifTrue;
}
