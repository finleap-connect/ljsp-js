// @ts-nocheck
import { isEmpty } from "lodash";
import { cons } from "./cons";

export function flattenChildTree(tree) {
  return tree
    .map((node) => {
      return isEmpty(node.children) ? node : cons(node, flattenChildTree(node.children)).flat();
    })
    .flat();
}
