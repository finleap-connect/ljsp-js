import { spec } from "../spec";

/**
 * @param set
 * @param index
 */
export function nth(set: Array<any>, index: number) {
  spec({
    func: "nth",
    spec: { setIsArray: Array.isArray(set), indexIsNonNegativeInt: index >= 0 }
  });
  return set[index];
}
