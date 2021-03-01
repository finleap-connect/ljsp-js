import { flatten, isEmpty } from "lodash";
import { spec } from "../spec/spec";
import { cons } from "./cons";

/**
 * @param {[{}]} tree
 * @returns {*}
 */
export function flattenChildTree(tree) {
  spec({ func: "flattenChildTree", spec: { setIsArray: Array.isArray(tree) } });
  return flatten(
    tree.map((node) => {
      return isEmpty(node.children) ? node : flatten(cons(node, flattenChildTree(node.children)));
    })
  );
}
