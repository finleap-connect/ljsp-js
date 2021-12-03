/**
 * @param {*} item
 * @returns {boolean}
 */
export function void$(item?: any) {
  return item == null || typeof item === "undefined";
}
