// @ts-nocheck
import { TCollection } from "../../types/t-collection";
import { array$ } from "../../generic/array$";
import { eq } from "../../generic/eq";
import { not } from "../../generic/not";
import { _Collection } from "./_meta-collection";
import { ICollection } from "./i-collection";

export class _Map extends _Collection implements ICollection {
  get count() {
    return this.set.size;
  }
  get(index: number | string) {
    return getMapItem(this.set, index);
  }
  append(item: any) {
    this.set.set(...item);
  }
  prepend(item: any) {
    this.set = new Map([...item, ...this.set]);
  }
  appendAll(coll: TCollection) {
    this.set = new Map([...this.set, ...coll]);
  }
  get empty() {
    return new Map();
  }
  clear() {
    this.set = new Map();
  }
  contains$(item: any) {
    return this.set.has(item);
  }
  remove(item: any) {
    this.set.delete(array$(item) ? item[0] : item);
  }
  removeIdx(index: number) {
    const item = getMapItem(this.set, index);
    this.set.delete(item[0]);
  }
  slice(base: number, end?: number) {
    return new Map(Array.from(this.set).slice(base, end));
  }
  indexOf(item: any) {
    return getIndex(this.set, item);
  }
  lastIndexOf(item: any) {
    return getIndex(this.set, item, true);
  }
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

function getIndex(set: Map, item: any, getFromLast = false) {
  let result = -1;
  let x = 0;
  set.forEach((value, _) => {
    if (eq(item, value)) {
      result = x;
      if (not(getFromLast)) return result;
    }
    x++;
  });
  return result;
}
