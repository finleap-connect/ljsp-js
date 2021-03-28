import { TPrimitive } from "../types/TPrimitive";
import { eq } from "../generic/eq";
import { undefined$ } from "../generic/undefined$";
import { runFnOrGetValue } from "./internal/run-fn-or-get-value";
import { _loopArgPairs } from "../internal/_loop-arg-pairs";

/**
 * Takes an expression, and a set of clauses.
 * Each clause can take the form of either:
 * test-constant result-expr
 * (test-constant1 ... test-constantN)  result-expr
 * The test-constants are not evaluated. They must be compile-time
 * literals.  If the expression is equal to a
 * test-constant, the corresponding result-expr is returned. A single
 * default expression can follow the clauses, and its value will be
 * returned if no clause matches. If no default expression is provided
 * and no clause matches, undefined is returned.
 * All manner of constant expressions are acceptable in `cases`,
 * including numbers, strings, booleans, and Symbols. The
 * test-constants need not be all of the same type.
 */
export function cases(expression: TPrimitive, ...rest: any[]) {
  return _loopArgPairs(rest, (predicate: any, winner: any) => {
    if (undefined$(winner)) {
      return [predicate];
    } else if (eq(predicate, expression)) {
      return [runFnOrGetValue(winner)];
    }
  });
}
