import { spec } from "../spec/spec";
import { isFunctionSet } from "./is-function-set";

/**
 * @param {Function} rest
 * @returns {*}
 */
export function doWork(...rest) {
  spec({ func: "doWork", spec: { typeIsFunction: isFunctionSet(rest) } });
  if (rest.length === 0) {
    return undefined;
  }
  return rest.reduce((acc, cur) => {
    return cur();
  });
}
