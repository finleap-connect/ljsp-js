// @ts-nocheck
import { TCollection } from "../types/t-collection";
import { BaseTypes } from "../enums/base-types";
import { eq } from "../generic/eq";
import { string$ } from "../generic/string$";
import { orEq } from "../generic/or-eq";
import { cloneDeep, get } from "lodash";
import { notEq } from "../generic/not-eq";
import { _getType } from "./_get-type";
import { number$ } from "../generic/number$";
import { iff } from "../conditional/iff";
import { array$ } from "../generic";
import { inc } from "../math";

export function Collection(coll: TCollection, clone = true): ICollection {
  if (coll instanceof Collection) {
    return coll;
  }

  // prettier-ignore
  const type = _getType(coll);
  let set = clone && string$(coll) ? coll : cloneDeep(coll);

  return {
    __proto__: Collection.prototype,
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
        return getMapItem(set, index);
      } else if (eq(type, BaseTypes.Set)) {
        return Array.from(set)[index];
      } else {
        // Either get an entry in the object by index, order not guaranteed
        // or a specific item by path
        return number$(index) ? Object.entries(set)[index] : get(set, index);
      }
    },
    append(item) {
      if (eq(type, BaseTypes.Array)) {
        set.push(item);
      } else if (eq(type, BaseTypes.Set)) {
        set.add(item);
      } else if (eq(type, BaseTypes.Map)) {
        set.set(...item);
      } else if (eq(type, BaseTypes.Object)) {
        set = Object.assign(set, item);
      } else {
        set += item;
      }
    },
    prepend(item, index) {
      if (eq(type, BaseTypes.Array)) {
        set.unshift(item);
      } else if (eq(type, BaseTypes.Set)) {
        set = new Set([...item, ...set]);
      } else if (eq(type, BaseTypes.Map)) {
        set = new Map([...item, ...set]);
      } else if (eq(type, BaseTypes.Object)) {
        set = Object.assign(item, set);
      } else {
        set = item + set;
      }
    },
    appendAll(coll) {
      if (eq(type, BaseTypes.Array)) {
        set = set.concat(coll);
      } else if (eq(type, BaseTypes.Set)) {
        set = new Set([...set, ...coll]);
      } else if (eq(type, BaseTypes.Map)) {
        set = new Map([...set, ...coll]);
      } else if (eq(type, BaseTypes.Object)) {
        set = Object.assign(set, coll);
      } else {
        set += coll;
      }
    },
    get empty$() {
      return eq(this.count, 0);
    },
    get empty() {
      if (eq(type, BaseTypes.Array)) {
        return [];
      } else if (eq(type, BaseTypes.Set)) {
        return new Set();
      } else if (eq(type, BaseTypes.Map)) {
        return new Map();
      } else if (eq(type, BaseTypes.Object)) {
        return {};
      } else {
        return "";
      }
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
    contains$(item) {
      if (orEq(type, BaseTypes.Array, BaseTypes.String)) {
        return set.includes(item);
      } else if (orEq(type, BaseTypes.Set, BaseTypes.Map)) {
        return set.has(item);
      } else {
        if (array$(item)) {
          const [key, val] = item;
          const test = Object.entries(set).find(([k, v]) => k === key && v === val);
          return Boolean(test);
        } else {
          return item in set;
        }
      }
    },
    remove(item) {
      if (eq(type, BaseTypes.Array)) {
        set = set.filter((val) => notEq(val, item));
      } else if (eq(type, BaseTypes.Set)) {
        set.delete(item);
      } else if (eq(type, BaseTypes.Map)) {
        set.delete(array$(item) ? item[0] : item);
      } else if (eq(type, BaseTypes.Object)) {
        delete set[array$(item) ? item[0] : item];
      } else {
        set = set.replace(item, "");
      }
    },
    removeIdx(index) {
      if (eq(type, BaseTypes.Array)) {
        set.splice(index, 1);
      } else if (eq(type, BaseTypes.Set)) {
        set.delete(index);
      } else if (eq(type, BaseTypes.Map)) {
        const item = getMapItem(set, index);
        set.delete(item[0]);
      } else if (eq(type, BaseTypes.Object)) {
        const key = Object.keys(set)[index];
        delete set[key];
      } else {
        set = set.slice(0, index) + set.slice(inc(index));
      }
    },
    slice(base: number, end?: number) {
      if (orEq(type, BaseTypes.Array, BaseTypes.String)) {
        return set.slice(base, end);
      } else if (eq(type, BaseTypes.Set)) {
        return new Set(Array.from(set).slice(base, end));
      } else if (eq(type, BaseTypes.Map)) {
        return new Map(Array.from(set).slice(base, end));
      } else {
        return Object.fromEntries(Object.entries(set).slice(base, end));
      }
    },
    get source() {
      return set;
    }
  };
}

function getMapItem(set: Map, index: number) {
  let result = undefined;
  let x = 0;
  set.forEach((value, key) => {
    if (eq(x, index)) {
      result = [key, value];
    }
    x++;
  });
  return result;
}

interface ICollection {
  slice: (base: number, end?: number) => any;
  source: TCollection;
  remove: (item: any) => void;
  removeIdx: (item: any) => void;
  contains$: (item: any) => boolean;
  clear: () => void;
  empty$: boolean;
  appendAll: (coll: TCollection) => void;
  append: (item: any) => void;
  prepend: (item: any) => void;
  get: (index: number | string) => any;
  count: number;
  empty: TCollection;
  __proto__: Object;
}
