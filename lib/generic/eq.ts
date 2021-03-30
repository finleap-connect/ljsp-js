import { _eq } from "./internal/_eq";

export function eq(...rest: Array<any>) {
  const [first, second] = rest;
  return rest.length === 2 ? first === second : _eq(rest, simpleNotEqual);
}

function simpleNotEqual(left: any, right: any) {
  return left !== right;
}
