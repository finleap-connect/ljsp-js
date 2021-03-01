/**
 * @param {*} item
 * @returns {boolean}
 */
export function void$(item) {
  return item == null || typeof item === "undefined";
}
