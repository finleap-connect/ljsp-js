import { eq } from "../../generic/eq";
import { not } from "../../generic/not";
import { first } from "../../list/first";

export function _compare(values: Array<number | string>, comparator: Function) {
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
