export function repeatedly(fn: Function, n: number): any {
  let acc = [];
  for (let x = 0; x < n; x++) {
    acc.push(fn());
  }
  return acc;
}
