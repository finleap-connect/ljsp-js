import { runFnOrGetValue } from "./internal/run-fn-or-get-value";

export function iff(condition: any, ifTrue: any, ifFalse: any) {
  return runFnOrGetValue(condition) ? runFnOrGetValue(ifTrue) : runFnOrGetValue(ifFalse);
}
