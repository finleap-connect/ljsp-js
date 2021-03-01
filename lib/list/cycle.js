import { spec } from "../spec/spec";
import { first } from "./first";

/**
 * @param {[]} set
 */
export function cycle(set) {
  spec({ func: "cycle", spec: { setIsArray: Array.isArray(set) } });
  let count = 0;
  return function sequence() {
    if (count < set.length) {
      let value = set[count];
      count += 1;
      return value;
    } else {
      count = 1;
      return first(set);
    }
  };
}
