import { empty$ } from "../generic/empty$";
import { not } from "../generic/not";

export function disj(set: Array<any>, ...rest: Array<any>) {
  if (empty$(rest)) {
    return set;
  }
  const indices = rest.flat();

  return set.reduce((acc, cur, index) => {
    if (not(indices.includes(index + 1))) {
      acc.push(cur);
    }
    return acc;
  }, []);
}
