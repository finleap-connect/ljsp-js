import { cloneDeep, isEqual, uniq } from "lodash";
import { spec } from "../spec/spec";
import { first } from "./first";

/**
 * @param {*} rest
 * @returns {boolean}
 */
// @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'rest' implicitly has an 'any[]' ty... Remove this comment to see the full error message
export function distinct$(...rest) {
  spec({ func: "distinct$", spec: { minArgLen: rest.length > 0 } });
  const isSingleArg = rest.length === 1;
  const isSingleArrayComp = isSingleArg && Array.isArray(first(rest));

  if (isSingleArg && !isSingleArrayComp) return true;

  const source = isSingleArrayComp ? first(rest) : rest;
  const copy = uniq(cloneDeep(source));
  return isEqual(source, copy);
}
