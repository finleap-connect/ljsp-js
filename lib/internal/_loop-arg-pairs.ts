export function _loopArgPairs(set: any[], cb: Function) {
  let i = 0;
  while (i < set.length) {
    const result = cb(set[i], set[i + 1]);
    if (result) return result[0];
    i = i + 2;
  }
}
