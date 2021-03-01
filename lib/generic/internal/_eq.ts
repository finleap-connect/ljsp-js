type ComparatorFn<T> = (x: T, y: T) => boolean;

export function _eq<T>(args: Array<T>, comparator: ComparatorFn<T>): boolean {
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
