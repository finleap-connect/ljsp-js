import { identity } from "../function/identity";

export function makeArray(item: any, transform = identity) {
  return Array.isArray(item) ? item.map(transform) : [transform(item)];
}
