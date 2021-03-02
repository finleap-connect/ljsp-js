import { isFunction } from "lodash";
import { first } from "../first";

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'init' implicitly has an 'any' type.
export function _reduceVals(init, set) {
  let count = 0;
  const coll = set ? set : init;
  let acc;
  // If there's an init, the acc's base value is init
  if (set) {
    acc = init;
  } else {
    // There is no init, acc's base value if the first elem of set
    // If this is an iterator, call it, otherwise get the first item
    acc = isFunction(coll) ? coll() : first(coll);
    count = 1;
  }
  return { count, coll, acc };
}
