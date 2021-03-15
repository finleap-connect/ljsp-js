import { first } from "../list";
import { iff } from "../conditional";
import { identity } from "./identity";
import { eq } from "../generic";
import { apply } from "./apply";

type Function = (...args: any) => any;
type ResolverFn = (...args: any) => string;

export function memoize(fn: Function, cacheKey: ResolverFn = identity): any {
  let cache = new Map();

  const memoized = function (...args: any) {
    const key = iff(
      eq(args.length, 1),
      () => first(args),
      () => apply(cacheKey, args)
    );
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = apply(fn, args);
      cache.set(key, result);
      return result;
    }
  };

  memoized.getCache = () => cache;

  return memoized;
}
