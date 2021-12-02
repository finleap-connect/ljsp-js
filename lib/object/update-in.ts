// @ts-ignore
import { get } from "../list/get";
import { cloneDeep } from "../generic/clone-deep";

/**
 * @param {{}} obj
 * @param {string[]} keys
 * @param {Function} fn
 * @param {*} rest
 * @returns {*}
 */
export function updateIn(obj: Object, keys: any[], fn: Function, ...rest: any) {
  const propertyPath = keys.join(".");
  const updateValue = get(obj, propertyPath);
  const result = fn(updateValue, ...rest);

  const updatedObject = cloneDeep(obj);

  function updateProps(obj: Object, keys: string[]) {
    const next = keys[1];
    const cur = keys[0];
    if (!next) {
      // @ts-ignore
      obj[cur] = result;
    } else {
      // @ts-ignore
      updateProps(obj[cur], keys.slice(1, keys.length));
    }
  }

  updateProps(updatedObject, keys);

  return updatedObject;
}
