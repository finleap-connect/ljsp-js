export function isPositiveInt$(number: number): boolean {
  return Number.isInteger(number) && number > 0;
}
