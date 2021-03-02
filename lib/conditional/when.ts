import { doWork } from "../generic/do-work";
import { isFunctionSet } from "../generic/is-function-set";
import { spec } from "../spec/spec";

/**
 * @param condition
 * @param rest
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'condition' implicitly has an 'any' type... Remove this comment to see the full error message
export function when(condition, ...rest) {
  spec({ func: "when", spec: { typeIsFunction: isFunctionSet(rest) } });
  if (condition) {
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'any[]' is not assignable to para... Remove this comment to see the full error message
    return doWork(rest);
  }
}
