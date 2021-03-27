import { function$ } from "../../generic/function$";

type IsBoolean = any | ((arg: any) => any);

export function runFnOrGetValue(ifTrue: IsBoolean, value?: any) {
  return function$(ifTrue) ? ifTrue(value) : ifTrue;
}
