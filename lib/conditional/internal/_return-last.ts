import { function$ } from "../../generic/function$";

export function _returnLast(body: Array<any>, arg?: any) {
  return body.reduce((acc: any, cur: any) => {
    return function$(cur) ? cur(arg) : cur;
  }, undefined);
}
