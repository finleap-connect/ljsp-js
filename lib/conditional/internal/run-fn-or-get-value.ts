import { isFunction } from "lodash";

type IsBoolean = any | ((arg: any) => any);

export function runFnOrGetValue(ifTrue: IsBoolean, value: any) {
  return isFunction(ifTrue) ? ifTrue(value) : ifTrue;
}
