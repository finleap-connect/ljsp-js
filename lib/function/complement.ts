import { isFunction } from "lodash";
import { spec } from "../spec/spec";

type FnType = (args?: any) => boolean;

export function complement(fn: FnType): FnType {
  spec({ func: "complement", spec: { fnIsFunction: isFunction(fn) } });
  return function (...rest) {
    return !fn(...rest);
  };
}
