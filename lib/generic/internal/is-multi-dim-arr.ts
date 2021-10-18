export function isMultiDimArr(arr: any) {
  return arr.every((item: any) => Array.isArray(item));
}
