// @ts-nocheck
import { cons } from "./cons";
import { empty$ } from "../generic/empty$";

export function flattenChildTree(tree) {
  return tree
    .map((node) => {
      return empty$(node.children) ? node : cons(node, flattenChildTree(node.children)).flat();
    })
    .flat();
}
