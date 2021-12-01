import { TPrimitive } from "../types/TPrimitive";
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
export declare function cases(expression: TPrimitive, ...rest: any[]): any;
