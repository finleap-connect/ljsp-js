/**
 * Returns either the value or an empty Array
 * @param {boolean} pred
 * @param {*} value
 * @returns {*|*[]}
 */
export function ifArray(pred: boolean, value: any) {
  return pred ? value : [];
}
