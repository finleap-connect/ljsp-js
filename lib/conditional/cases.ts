import { chunk } from "lodash";
import { first, second } from "../list";
import { and } from "./and";
import { TPrimitive } from "../types/TPrimitive";
import { eq } from "../generic/eq";
import { function$ } from "../generic/function$";

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
  const expressions = chunk(rest, 2);
  for (let i = 0; i < expressions.length; i++) {
    const cur = expressions[i];
    const predicate = first(cur);
    // If this is the default case, then return it.
    if (and(eq(i, expressions.length - 1), eq(cur.length, 1))) {
      return predicate;
    }
    if (eq(predicate, expression)) {
      const winner = second(cur);
      return function$(winner) ? winner() : winner;
    }
  }
}
