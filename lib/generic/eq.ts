import { _eq } from "./internal/_eq";
import { first } from "../list/first";
import { second } from "../list/second";

export function eq(...rest: Array<any>) {
  return rest.length === 2 ? first(rest) === second(rest) : _eq(rest, simpleNotEqual);
}

function simpleNotEqual(left: any, right: any) {
  return left !== right;
}
