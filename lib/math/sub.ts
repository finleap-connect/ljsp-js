export function sub(...rest: Array<number>): number {
  if (rest.length === 1) {
    return -rest[0];
  }
  return rest.reduce((acc, cur) => {
    return acc - cur;
  });
}
