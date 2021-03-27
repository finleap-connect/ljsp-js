//@ts-nocheck
export function complement(fn) {
  return function (...rest) {
    return !fn(...rest);
  };
}
