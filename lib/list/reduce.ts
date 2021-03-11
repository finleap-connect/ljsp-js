import { isFunction } from "lodash";
import { and } from "../conditional/and";
import { iff } from "../conditional/iff";
import { eq } from "../generic/eq";
import { object$ } from "../generic/object$";
import { void$ } from "../generic/void$";
import { lt$ } from "../math/lt$";
import { spec } from "../spec/spec";
import { first } from "./first";
import { nth } from "./nth";
import { reduced$ } from "./reduced$";

/**
 * `f` should be a function of 2 arguments. If val is not supplied,
 * returns the result of applying `f` to the first 2 items in coll, then
 * applying `f` to that result and the 3rd item, etc. If coll contains no
 * items, `f` must accept no arguments as well, and reduce returns the
 * result of calling `f` with no arguments.  If coll has only 1 item, it
 * is returned and `f` is not called. If val is supplied, returns the
 * result of applying `f` to val and the first item in coll, then
 * applying `f` to that result and the 2nd item, etc. If coll contains no
 * items, returns val and `f` is not called.
 * @param fn
 * @param val
 * @param set
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'fn' implicitly has an 'any' type.
export function reduce(fn, val, set) {
  spec({
    func: "reduce",
    spec: {
      fnIsFunction: isFunction(fn),
      setIsArray: iff(void$(set), Array.isArray(val), Array.isArray(set))
    }
  });

  if (void$(set)) {
    set = val;
    val = first(set);
  }

  const length = iff(void$(set), 0, set.length);

  // If coll has only 1 item, it is returned and `f` is not called
  if (eq(length, 1)) {
    return first(set);
  }

  // If coll contains no items and val is present, returns val and `f` is not called.
  if (and(eq(length, 0), !void$(val))) {
    return val;
  }

  let index = -1;

  while (lt$(++index, length)) {
    if (and(object$(val), reduced$(val))) {
      return val.item;
    }
    val = fn(val, nth(set, index));
  }
  return val;
}
