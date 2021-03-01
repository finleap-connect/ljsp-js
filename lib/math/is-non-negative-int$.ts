export function isNonNegativeInt$(number: number): boolean {
  return Number.isInteger(number) && number >= 0;
}
