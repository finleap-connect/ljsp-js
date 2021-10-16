import { and } from "../conditional/and";
import { count } from "./count";
import { every$ } from "./every$";
import { contains$ } from "./contains$";
import { spec } from "../spec";

export function superset$(set1: Array<any>, set2: Array<any>) {
  spec(superset$, { setsAreArrays: and(Array.isArray(set1), Array.isArray(set2)) });
  function _contains(item: any) {
    return contains$(set1, item);
  }

  return and(count(set1) >= count(set2), every$(_contains, set2));
}
