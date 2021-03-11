import { empty$ } from "../generic/empty$";
import { first } from "./first";

/**
 * @param {Function} fn
 * @param {[]} rest
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'fn' implicitly has an 'any' type.
export function mapcat(fn, ...rest) {
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'rest' implicitly has an 'any' type.
  function run(rest) {
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
    const mapped = first(rest.map((set) => set.map(fn), []));
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'acc' implicitly has an 'any' type.
    return mapped.reduce((acc, cur) => {
      return acc.concat(cur);
    }, []);
  }

  if (empty$(rest)) {
    // @ts-expect-error ts-migrate(2556) FIXME: Expected 1 arguments, but got 0 or more.
    return () => run(...rest);
  } else {
    return run(rest);
  }
}
