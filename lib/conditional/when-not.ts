import { _returnLast } from "./internal/_return-last";

/**
 * @param condition
 * @param rest
 */
export function whenNot(condition: any, ...rest: Array<any>) {
  if (!condition) {
    return _returnLast(rest);
  }
}
