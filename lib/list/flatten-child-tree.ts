import { flatten, isEmpty } from "lodash";
import { cons } from "./cons";

/**
 * @param {[{}]} tree
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'tree' implicitly has an 'any' type.
export function flattenChildTree(tree) {
  return flatten(
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'node' implicitly has an 'any' type.
    tree.map((node) => {
      return isEmpty(node.children) ? node : flatten(cons(node, flattenChildTree(node.children)));
    })
  );
}
