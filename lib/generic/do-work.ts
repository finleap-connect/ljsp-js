import { spec } from "../spec/spec";
import { isFunctionSet } from "./is-function-set";

type FnType = (args?: Array<any>) => any;

export function doWork(...rest: Array<FnType>): any {
  spec({ func: "doWork", spec: { typeIsFunction: isFunctionSet(rest) } });
  if (rest.length === 0) {
    return undefined;
  }
  return rest.reduce((acc, cur) => {
    return cur();
  });
}
