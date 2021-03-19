// @ts-nocheck
import { TCollection } from "../types/t-collection";
import { spec } from "../spec";
import { collection$ } from "../generic/collection$";
import { BaseTypes } from "../enums/base-types";
import { eq } from "../generic/eq";
import { string$ } from "../generic/string$";
import { orEq } from "../generic/or-eq";
import { assoc } from "../list/assoc";
import { cloneDeep, get } from "lodash";
import { notEq } from "../generic/not-eq";
import { _getType } from "./_get-type";
import { number$ } from "../generic/number$";
import { iff } from "../conditional";
import { first } from "../list";

export function Collection(coll: TCollection, clone = true) {
  spec({ func: "Collection", spec: { isCollectionable: collection$(coll) } });

  const type = _getType(coll);

  let set = clone && string$(coll) ? coll : cloneDeep(coll);

  return {
    get count() {
      if (orEq(type, BaseTypes.Array, BaseTypes.String)) {
        return set.length;
      } else if (orEq(type, BaseTypes.Set, BaseTypes.Map)) {
        return set.size;
      } else {
        return Object.keys(set).length;
      }
    },
    get(index) {
      if (orEq(type, BaseTypes.Array, BaseTypes.String)) {
        return set[index];
      } else if (eq(type, BaseTypes.Map)) {
        return set.get(index);
      } else if (eq(type, BaseTypes.Set)) {
        return Array.from(set)[index];
      } else {
        // Either get an entry in the object by index, order not guaranteed
        // or a specific item by path
        return number$(index) ? Object.entries(set)[index] : get(set, index);
      }
    },
    add(item, index) {
      if (eq(type, BaseTypes.Array)) {
        set.push(item);
      } else if (eq(type, BaseTypes.Set)) {
        set.add(item);
      } else if (eq(type, BaseTypes.Map)) {
        set.set(index, item);
      } else if (eq(type, BaseTypes.Object)) {
        set[index] = item;
      } else {
        set += item;
      }
    },
    addAll(coll) {
      if (eq(type, BaseTypes.Array)) {
        set = set.concat(coll);
      } else if (eq(type, BaseTypes.Set)) {
        set = new Set([...set, ...coll]);
      } else if (eq(type, BaseTypes.Map)) {
        set = new Map([...set, ...coll]);
      } else if (eq(type, BaseTypes.Object)) {
        set = assoc(set, coll);
      } else {
        set += coll;
      }
    },
    get empty() {
      return eq(this.count, 0);
    },
    clear() {
      if (eq(type, BaseTypes.Array)) {
        set = [];
      } else if (eq(type, BaseTypes.Set)) {
        set = new Set();
      } else if (eq(type, BaseTypes.Map)) {
        set = new Map();
      } else if (eq(type, BaseTypes.Object)) {
        set = {};
      } else {
        set = "";
      }
    },
    contains(item) {
      if (orEq(type, BaseTypes.Array, BaseTypes.String)) {
        return set.includes(item);
      } else if (orEq(type, BaseTypes.Set, BaseTypes.Map)) {
        return set.has(item);
      } else {
        return item in set;
      }
    },
    remove(item) {
      if (eq(type, BaseTypes.Array)) {
        set = set.filter((val) => notEq(val, item));
      } else if (orEq(type, BaseTypes.Set, BaseTypes.Map)) {
        set.delete(item);
      } else if (eq(type, BaseTypes.Object)) {
        iff(
          Array.isArray(item),
          // a kv-pair array is being sent in
          () => delete set[first(item)],
          // a simple property name is being sent in
          () => delete set[item]
        );
      } else {
        set = set.replace(item, "");
      }
    },
    get source() {
      return set;
    }
  };
}
