import { doWork, isFunctionSet } from "./generic";
import { spec } from "./spec";
import first from "lodash/first";
import isFunction from "lodash/isFunction";
import chunk from "lodash/chunk";

export const ELSE = "else";

/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 * time. If a test returns logical true, cond evaluates and returns
 * the value of the corresponding expr and doesn't evaluate any of the
 * other tests or exprs. (cond) returns nil.
 * @param {*} rest
 * @returns {*}
 */
export function cond(...rest) {
  if (rest.length === 0) {
    return undefined;
  }
  spec({ func: "cond", spec: { argumentLength: rest.length % 2 === 0 } });
  const expressions = chunk(rest, 2);
  for (let i = 0; i < expressions.length; i++) {
    const cur = expressions[i];
    const predicate = first(cur);
    if (isFunction(predicate) ? predicate() : predicate) {
      const winner = cur[1];
      return isFunction(winner) ? winner() : winner;
    }
  }
}

/**
 * Executes an expression when a condition is false, and returns its value.
 * @param condition
 * @param expression
 * @returns {*|undefined}
 */
export function ifNo(condition, expression) {
  return !condition ? expression() : undefined;
}

/**
 * Functional equivalent of a ternary expression.
 * @param {boolean | Function} condition
 * @param {*} expression
 * @returns {*}
 */
export function ifYes(condition, expression) {
  return condition ? expression : undefined;
}

/**
 * Returns `true` if x is not null or undefined, `false` otherwise.
 * @param expression
 * @returns {boolean}
 */
export function some(expression) {
  return expression !== null && expression !== undefined;
}

function runFnOrGetValue(ifTrue, value) {
  return isFunction(ifTrue) ? ifTrue(value) : ifTrue;
}

/**
 * @param {Function | *} condition
 * @param {Function | *} ifTrue
 * @param {Function | *} ifFalse
 * @returns {*}
 */
export function iff(condition, ifTrue, ifFalse) {
  return runFnOrGetValue(condition) ? runFnOrGetValue(ifTrue) : runFnOrGetValue(ifFalse);
}

/**
 * @param value
 * @param ifTrue
 * @param ifFalse
 * @returns {*}
 */
export function ifSome(value, ifTrue, ifFalse) {
  if (value == null) {
    return runFnOrGetValue(ifFalse);
  } else {
    return runFnOrGetValue(ifTrue, value);
  }
}

/**
 * @param {boolean | Function} condition
 * @param {string} className
 * @returns {*|string}
 */
export function ifClass(condition, className) {
  return ifYes(condition, className) || "";
}

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

/**
 * @param rest
 * @returns {function(...[*]): boolean}
 */
export function everyPred(...rest) {
  spec({ func: "everyPred", spec: { typeIsFunction: isFunctionSet(rest) } });
  return (...args) => args.every((arg) => rest.every((fn) => Boolean(fn(arg)) === true));
}
