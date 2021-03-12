import { isFunction } from "lodash";
import { first } from "../list";
import { spec } from "../spec";
import { _returnLast } from "./internal/_return-last";

/**
 * Obtains the first item in a set. If that item is truthy, then the body is run and the last
 * computed value or expression is returned. The first item in the list is passed as an argument
 * to any functions in the function body.
 * Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
export function whenFirst(set: Array<any>, ...rest: any) {
  spec({ func: "whenFirst", spec: { setIsArray: Array.isArray(set) } });
  const boundItem = first(set);
  if (boundItem) {
    return _returnLast(rest, boundItem);
  }
}
