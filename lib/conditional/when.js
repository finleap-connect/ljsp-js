import { doWork } from "../generic/do-work";
import { isFunctionSet } from "../generic/is-function-set";
import { spec } from "../spec/spec";

/**
 * @param condition
 * @param rest
 */
export function when(condition, ...rest) {
  spec({ func: "when", spec: { typeIsFunction: isFunctionSet(rest) } });
  if (condition) {
    return doWork(rest);
  }
}
