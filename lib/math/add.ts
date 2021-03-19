export function add(...rest: Array<number>) {
  if (rest.length === 0) {
    return 0;
  }
  return rest.reduce((acc, cur) => {
    return acc + cur;
  });
}
