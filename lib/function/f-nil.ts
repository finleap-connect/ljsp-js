import { isFunction } from "lodash";
import { notEq } from "../generic/not-eq";
import { extendArray } from "../list/extend-array";
import { fillVoid } from "../list/fill-void";
import { spec } from "../spec/spec";

type FnType = (args?: Array<any>) => any;

export function fNil(fn: FnType, ...template: Array<any>): FnType {
  spec({ func: "fNil", spec: { fnIsFunction: isFunction(fn) } });
  return function (...source: Array<any>) {
    if (notEq(source.length, template.length)) {
      extendArray(source, template.length);
    }
    return fn.apply(null, fillVoid(source, template));
  };
}
