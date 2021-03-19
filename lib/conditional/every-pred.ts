/**
 * @param rest
 * @returns {function(...[*]): boolean}
 */
// @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'rest' implicitly has an 'any[]' ty... Remove this comment to see the full error message
export function everyPred(...rest) {
  // @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'args' implicitly has an 'any[]' ty... Remove this comment to see the full error message
  return (...args) => args.every((arg) => rest.every((fn) => Boolean(fn(arg))));
}
