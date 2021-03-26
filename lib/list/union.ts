export function union(...rest: any[]) {
  return Array.from(new Set(rest.flat()));
}
