import { functionSet$ } from "../generic/function-set$";
import { spec } from "../spec/spec";
import { _returnLast } from "./internal/_return-last";

/**
 * @param condition
 * @param rest
 */
export function whenNot(condition: any, ...rest: Array<any>) {
  spec({ func: "whenNot", spec: { typeIsFunction: functionSet$(rest) } });
  if (!condition) {
    return _returnLast(rest);
  }
}
