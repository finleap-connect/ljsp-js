// @ts-nocheck
import { flatten, isEmpty } from "lodash";
import { cons } from "./cons";

/**
 * @param {[{}]} tree
 * @returns {*}
 */
export function flattenChildTree(tree) {
  return flatten(
    tree.map((node) => {
      return isEmpty(node.children) ? node : flatten(cons(node, flattenChildTree(node.children)));
    })
  );
}
