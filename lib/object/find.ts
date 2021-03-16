// @ts-nocheck
import { spec } from "../spec";
import { iff } from "../conditional/iff";
import { string$ } from "../generic/string$";
import { or } from "../conditional/or";
import { toStringComp } from "../generic/internal/toStringComp";
import { eq } from "../generic/eq";
import { objectTypes } from "../enums/object-types";
import { not } from "../generic/not";

export function find(set: object | Array<any>, key: string | number | symbol) {
  spec({
    func: "find",
    spec: {
      arrayHasCorrectKey: iff(Array.isArray(set), Number.isInteger(key), true),
      objectHasCorrectKey: iff(
        not(Array.isArray(set)),
        () => or(string$(key), eq(toStringComp(key), objectTypes.Symbol)),
        true
      )
    }
  });
  return set[key] && [key, set[key]];
}
