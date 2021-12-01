// @ts-nocheck
import { iff } from "../conditional/iff";
import { notEmpty$ } from "../generic/not-empty$";
import { subs } from "./subs";
import { regExp$ } from "../generic/reg-exp$";

/**
 * Splits string on a regular expression or string.  Optional argument limit is
 * the maximum number of splits. Not lazy. Returns vector of the splits.
 */
export function split(item: string, separator: string | RegExp = "", limit?: number) {
  separator = new RegExp(regExp$(separator) ? separator.source : separator, "g");
  return iff(
    limit,
    () => {
      const matchSet = item.match(separator);
      if (notEmpty$(matchSet)) {
        let result = [];
        for (let x = 0; x < limit - 1; x++) {
          const end = item.indexOf(matchSet[x]) + 1;
          result.push(subs(item, 0, end));
          item = subs(item, end);
        }
        return [...result, item];
      }
    },
    () => item.split(separator)
  );
}
