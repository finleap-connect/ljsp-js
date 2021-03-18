export function orEq(...rest: Array<any>) {
  const [first, ...other] = rest;
  for (let x = 0; x < other.length; x++) {
    if (first === other[x]) {
      return true;
    }
  }
  return false;
}
