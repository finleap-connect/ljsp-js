import { cloneDeep } from "lodash";

/**
 * @param {{}} first
 * @param {{}[]}rest
 * @returns {*}
 */
export function merge(first, ...rest) {
  const target = cloneDeep(first);

  return rest.reduce((acc, cur) => {
    const source = cloneDeep(cur);
    acc = Object.assign(target, source);
    return acc;
  }, target);
}
