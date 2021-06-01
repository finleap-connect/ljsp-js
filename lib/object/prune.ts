import { reduceKv } from "../list/reduce-kv";
import { void$ } from "../generic/void$";
import { not } from "../generic/not";

export function prune(object: object) {
  return reduceKv(
    (acc: object, key: string, value: any) => {
      if (not(void$(value))) {
        // @ts-ignore
        acc[key] = value;
      }
      return acc;
    },
    {},
    object
  );
}
