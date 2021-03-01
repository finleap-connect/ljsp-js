import { doWork } from "../generic/do-work";
import { isFunctionSet } from "../generic/is-function-set";
import { spec } from "../spec/spec";

/**
 * @param condition
 * @param rest
 */
export function whenNot(condition, ...rest) {
  spec({ func: "whenNot", spec: { typeIsFunction: isFunctionSet(rest) } });
  if (!condition) {
    return doWork(rest);
  }
}
