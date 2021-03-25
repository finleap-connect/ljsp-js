export function rightDiff(left: any[], right: any[]) {
  return right.filter((x) => !left.includes(x));
}
