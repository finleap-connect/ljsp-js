export function dotimes(times: number, fn: Function) {
  for (let x = 0; x < times; x++) {
    fn(x);
  }
}
