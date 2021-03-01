import { isString } from "lodash";
import { spec } from "../spec/spec";

/**
 * @param str
 * @returns {boolean}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'str' implicitly has an 'any' type.
export function blank$(str) {
  const isNull = str === undefined || str === null;
  spec({ func: "blank$", spec: { strIsString: isString(str) || isNull } });
  return isNull || str.trim() === "";
}
