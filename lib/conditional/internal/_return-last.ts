import { isFunction } from "lodash";

export function _returnLast(body: Array<any>, arg?: any) {
  return body.reduce((acc: any, cur: any) => {
    return isFunction(cur) ? cur(arg) : cur;
  }, undefined);
}
