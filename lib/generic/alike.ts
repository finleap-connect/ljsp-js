import { _eq } from "./internal/_eq";

export function alike(...rest: any): boolean {
  return _eq(rest, looseNotEqual);
}

function looseNotEqual(left: any, right: any) {
  return left != right;
}
