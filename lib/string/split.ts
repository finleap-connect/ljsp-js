/**
 * Splits string on a regular expression or string.  Optional argument limit is
 * the maximum number of splits. Not lazy. Returns vector of the splits.
 * @param item
 * @param separator
 */
export function split(item: string, separator = "") {
  // Because TypeScript is incredibly stupid...
  // TODO Split implementation is incomplete
  return (item + "").split(separator);
}
