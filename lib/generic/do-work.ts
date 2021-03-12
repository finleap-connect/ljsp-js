import { _returnLast } from "../conditional/internal/_return-last";

export function doWork(...rest: Array<any>): any {
  return _returnLast(rest);
}
