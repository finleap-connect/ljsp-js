export function notEq(...rest: Array<any>) {
  if (rest.length === 1) {
    return true;
  }
  let left = rest[0];
  for (let i = 1; i < rest.length; i++) {
    let right = rest[i];
    if (left === right) {
      return false;
    }
  }
  return true;
}
