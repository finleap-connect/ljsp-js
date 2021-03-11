import { eq, not } from "../../generic";
import { first } from "../../list";

export function _compareNums(values: Array<number>, comparator: Function) {
  if (eq(values.length, 1)) {
    return true;
  }

  let comparison = first(values);

  for (let x = 1; x < values.length; x++) {
    const result = comparator(comparison, values[x]);
    if (not(result)) {
      return false;
    }
    comparison = values[x];
  }

  return true;
}
