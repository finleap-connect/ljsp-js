export function _eq(args: any, comparator: Function): boolean {
  if (args.length === 1) {
    return true;
  }
  let left = args[0];
  for (let i = 1; i < args.length; i++) {
    let right = args[i];
    if (comparator(left, right)) {
      return false;
    }
    left = right;
  }
  return true;
}
