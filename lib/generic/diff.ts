import { iff } from "../conditional/iff";
import { spec } from "../spec/spec";
import { eq } from "./eq";
import { objectLike$ } from "./object-like$";
import { TAnyObject } from "../types/t-any-object";

/**
 * Recursively compares a and b, returning a tuple of
 * [things-only-in-a things-only-in-b things-in-both].
 * Comparison rules:
 * * For equal a and b, return [nil nil a].
 * * Maps are subdiffed where keys match and values differ.
 * * Sets are never subdiffed.
 * * All sequential things are treated as associative collections
 * by their indexes, with results returned as vectors.
 * * Everything else (including strings!) is treated as
 * an atom and compared for equality.
 * @param a
 * @param b
 */
export function diff(a: TAnyObject, b: TAnyObject) {
  spec({ func: "diff", spec: { aIsObject: objectLike$(a), bIsObject: objectLike$(b) } });
  return iff(
    objectLike$(a),
    () => (Array.isArray(a) ? getArrayDiff(a, b) : getObjectDiff(a, b)),
    () => (eq(a, b) ? [null, null, a] : [a, b, null])
  );
}

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'a' implicitly has an 'any' type.
function getArrayDiff(a, b) {
  const len = Math.max(a.length, b.length);
  const delta_a = [];
  const delta_b = [];
  const same = [];

  for (let x = 0; x < len; x++) {
    if (eq(a[x], b[x])) {
      same.push(a[x]);
    } else {
      if (a[x]) {
        delta_a.push(a[x]);
      }
      if (b[x]) {
        delta_b.push(b[x]);
      }
    }
  }

  return [delta_a, delta_b, same];
}

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'a' implicitly has an 'any' type.
function getObjectDiff(a, b) {
  const keys = Array.from(new Set(Object.keys(a).concat(Object.keys(b))));
  const delta_a = {};
  const delta_b = {};
  const same = {};

  for (let x = 0; x < keys.length; x++) {
    const key = keys[x];
    if (eq(a[key], b[key])) {
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      same[key] = a[key];
    } else {
      if (a[key]) {
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        delta_a[key] = a[key];
      }
      if (b[key]) {
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        delta_b[key] = b[key];
      }
    }
  }

  return [delta_a, delta_b, same];
}
