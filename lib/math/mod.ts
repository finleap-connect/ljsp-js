export function mod(dividend: number, divisor: number): number {
  let mod = dividend % divisor;
  if (mod < 0) {
    mod = divisor < 0 ? mod - divisor : mod + divisor;
  }
  return mod;
}
