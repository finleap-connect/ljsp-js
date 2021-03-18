import { isEqual } from "lodash";
import { _eq } from "./internal/_eq";
import { first } from "../list/first";
import { second } from "../list/second";

export function deepEq(...rest: Array<any>): boolean {
  return rest.length === 2 ? !isEqual(first(rest), second(rest)) : _eq(rest, deepNotEqual);
}

function deepNotEqual(left: any, right: any): boolean {
  return !isEqual(left, right);
}
