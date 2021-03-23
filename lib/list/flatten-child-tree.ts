// @ts-nocheck
import { flatten } from "lodash";
import { cons } from "./cons";
import { empty$ } from "../generic/empty$";

/**
 * @param {[{}]} tree
 * @returns {*}
 */
export function flattenChildTree(tree) {
  return flatten(
    tree.map((node) => {
      return empty$(node.children) ? node : flatten(cons(node, flattenChildTree(node.children)));
    })
  );
}
