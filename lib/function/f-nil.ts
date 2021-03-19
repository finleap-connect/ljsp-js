import { notEq } from "../generic/not-eq";
import { extendArray } from "../list/extend-array";
import { fillVoid } from "../list/fill-void";

type FnType = (args?: Array<any>) => any;

export function fNil(fn: FnType, ...template: Array<any>): FnType {
  return function (...source: Array<any>) {
    if (notEq(source.length, template.length)) {
      extendArray(source, template.length);
    }
    return fn.apply(null, fillVoid(source, template));
  };
}
