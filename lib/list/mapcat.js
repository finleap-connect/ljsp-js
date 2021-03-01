import { isEmpty } from "../generic/is-empty";
import { first } from "./first";

/**
 * @param {Function} fn
 * @param {[]} rest
 */
export function mapcat(fn, ...rest) {
  function run(rest) {
    const mapped = first(rest.map((set) => set.map(fn), []));
    return mapped.reduce((acc, cur) => {
      return acc.concat(cur);
    }, []);
  }

  if (isEmpty(rest)) {
    return () => run(...rest);
  } else {
    return run(rest);
  }
}
