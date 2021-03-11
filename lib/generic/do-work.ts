import { spec } from "../spec/spec";
import { functionSet$ } from "./function-set$";

type FnType = (args?: Array<any>) => any;

export function doWork(...rest: Array<FnType>): any {
  spec({ func: "doWork", spec: { typeIsFunction: functionSet$(rest) } });
  if (rest.length === 0) {
    return undefined;
  }
  return rest.reduce((acc, cur) => {
    return cur();
  });
}
