export function apply(fn: Function, ...rest: Array<any>) {
  const args = rest.flat();
  return fn(...args);
}
