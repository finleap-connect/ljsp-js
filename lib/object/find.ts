// @ts-nocheck
import { spec } from "../spec";
import { iff } from "../conditional/iff";
import { string$ } from "../generic/string$";
import { or } from "../conditional/or";
import { eq } from "../generic/eq";
import { not } from "../generic/not";
import { _getType } from "../internal/_get-type";
import { BaseTypes } from "../enums/base-types";

export function find(set: object | Array<any>, key: string | number | symbol) {
  spec({
    func: "find",
    spec: {
      arrayHasCorrectKey: iff(Array.isArray(set), Number.isInteger(key), true),
      objectHasCorrectKey: iff(
        not(Array.isArray(set)),
        () => or(string$(key), eq(_getType(key), BaseTypes.Symbol)),
        true
      )
    }
  });
  return set[key] && [key, set[key]];
}
