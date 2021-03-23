// @ts-nocheck
import { array$ } from "../../generic/array$";
import { TCollection } from "../../types/t-collection";
import { _Collection } from "./_meta-collection";
import { ICollection } from "./i-collection";

export class _Object extends _Collection implements ICollection {
  get count() {
    return Object.keys(this.set).length;
  }
  get(index: number) {
    return Object.entries(this.set)[index];
  }
  append(item: any) {
    this.set = Object.assign(this.set, array$(item) ? { [item[0]]: item[1] } : item);
  }
  prepend(item: any) {
    this.set = Object.assign(array$(item) ? { [item[0]]: item[1] } : item, this.set);
  }
  appendAll(coll: TCollection) {
    this.set = Object.assign(this.set, coll);
  }
  get empty() {
    return {};
  }
  clear() {
    this.set = {};
  }
  contains$(item: any) {
    if (array$(item)) {
      const [key, val] = item;
      const test = Object.entries(this.set).find(([k, v]) => k === key && v === val);
      return Boolean(test);
    } else {
      return item in this.set;
    }
  }
  remove(item: any) {
    delete this.set[array$(item) ? item[0] : item];
  }
  removeIdx(index: any) {
    const key = Object.keys(this.set)[index];
    delete this.set[key];
  }
  slice(base: number, end?: number) {
    return Object.fromEntries(Object.entries(this.set).slice(base, end));
  }
}
