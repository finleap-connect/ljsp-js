import { _eq } from "./internal/_eq";

export function eq(...rest: Array<any>) {
  return _eq(rest, simpleNotEqual);
}

function simpleNotEqual(left: any, right: any) {
  return left !== right;
}
