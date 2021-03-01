import { chunk, isFunction } from "lodash";
import { eq } from "../generic/eq";
import { first } from "../list/first";
import { nth } from "../list/nth";
import { second } from "../list/second";
import { spec } from "../spec/spec";
import { and } from "./and";

export const ELSE = "else";

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
export function condp(pred, expr, ...rest) {
  if (eq(rest.length, 0)) {
    return undefined;
  }
  spec({ func: "condp", spec: { predIsFunction: isFunction(pred) } });
  const clauses = chunk(rest, 2);
  for (let i = 0; i < clauses.length; i++) {
    const currentClause = nth(clauses, i);
    const rawComparator = first(currentClause);
    // If this is the default case, then return it.
    if (and(eq(i, clauses.length - 1), eq(currentClause.length, 1))) {
      return rawComparator;
    }
    const comparison = isFunction(rawComparator) ? rawComparator() : rawComparator;
    const result = pred(expr, comparison);
    if (result) {
      const winner = second(currentClause);
      return isFunction(winner) ? winner(result) : winner;
    }
  }
}
