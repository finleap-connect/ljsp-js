import { _eq } from "./internal/_eq";
import { first } from "../list/first";
import { second } from "../list/second";

export function alike(...rest: Array<any>): boolean {
  return rest.length === 2 ? first(rest) == second(rest) : _eq(rest, looseNotEqual);
}

function looseNotEqual(left: any, right: any) {
  return left != right;
}
