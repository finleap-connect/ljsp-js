import { runFnOrGetValue } from "./internal/run-fn-or-get-value";

export function ifYes(condition: any, expression: any) {
  return condition ? runFnOrGetValue(expression) : undefined;
}
