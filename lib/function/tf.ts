/**
 * Used to flatten nested function calls. `tf` allows value transformations to be
 * expressed as “pipelines” of values, similar to Unix pipes.
 */
export function tf(val: any, ...fns: Function[]) {
  return fns.reduce((acc, fn) => {
    return fn(acc);
  }, val);
}
