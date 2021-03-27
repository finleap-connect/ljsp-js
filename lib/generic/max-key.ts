// @ts-nocheck
import { condp } from "../conditional/condp";
import { eq } from "./eq";
import { count } from "../list/count";
import { first } from "../list/first";
import { reduce } from "../list/reduce";

export function maxKey(fn, ...rest) {
  // prettier-ignore
  return condp(eq, count(rest),
    1, () => first(rest),
    2, () => {
      const [x, y] = rest;
      return fn(x) > fn(y) ? x : y;
    },
    () => {
      const [x, y] = rest;
      return reduce((x, y) => maxKey(fn, x, y), maxKey(fn, x, y), rest)
    }
  );
}
