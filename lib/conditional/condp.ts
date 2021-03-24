import { eq } from "../generic/eq";
import { first } from "../list/first";
import { nth } from "../list/nth";
import { second } from "../list/second";
import { spec } from "../spec/spec";
import { partition } from "../list/partition";
import { function$ } from "../generic/function$";

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
    spec({ func: "condp", spec: { predIsFunction: function$(pred) } });
  const def = Symbol();
  const clauses = partition(2, 2, [def], rest);
  for (let i = 0; i < clauses.length; i++) {
    const currentClause = nth(clauses, i);
    const rawComparator = first(currentClause);
    const winner = second(currentClause);
    // If this is the default case, then return it.
    if (eq(winner, def)) {
      return function$(rawComparator) ? rawComparator() : rawComparator;
    }
    const comparison = function$(rawComparator) ? rawComparator() : rawComparator;
    const result = pred(expr, comparison);
    if (result) {
      return function$(winner) ? winner(result) : winner;
    }
  }
}
