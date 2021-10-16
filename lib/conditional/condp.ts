import { eq } from "../generic/eq";
import { spec } from "../spec/spec";
import { function$ } from "../generic/function$";
import { undefined$ } from "../generic/undefined$";
import { runFnOrGetValue } from "./internal/run-fn-or-get-value";
import { _loopArgPairs } from "../internal/_loop-arg-pairs";

/**
 * Takes a binary predicate, an expression, and a set of clauses.
 * Each clause can take the form of either:
 * test-expr, result-expr
 * test-expr, result-fn
 * For each clause, (pred test-expr expr) is evaluated. If it returns
 * logical true, the clause is a match. If a binary clause matches, the
 * result-expr is returned, if a ternary clause matches, its result-fn,
 * which must be a unary function, is called with the result of the
 * predicate as its argument, the result of that call being the return
 * value of condp. A single default expression can follow the clauses,
 * and its value will be returned if no clause matches. If no default
 * expression is provided and no clause matches, undefined is returned.
 * @param {function} pred
 * @param {*} expr
 * @param {*} rest
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'pred' implicitly has an 'any' type.
export function condp(pred, expr, ...rest) {
  if (eq(rest.length, 0)) {
    return undefined;
  }
  spec(condp, { predIsFunction: function$(pred) });
  return _loopArgPairs(rest, (rawComparator: any, winner: any) => {
    if (undefined$(winner)) {
      return [runFnOrGetValue(rawComparator)];
    }
    const comparison = runFnOrGetValue(rawComparator);
    const result = pred(expr, comparison);
    if (result) {
      return [runFnOrGetValue(winner, result)];
    }
  });
}
