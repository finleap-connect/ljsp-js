type FnType = (args?: any) => boolean;

export function complement(fn: FnType): FnType {
  return function (...rest) {
    return !fn(...rest);
  };
}
