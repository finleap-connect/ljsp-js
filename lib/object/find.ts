// @ts-nocheck

export function find(set: object | Array<any>, key: string | number | symbol) {
  return set[key] && [key, set[key]];
}
