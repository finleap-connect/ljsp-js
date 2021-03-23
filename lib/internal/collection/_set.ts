// @ts-nocheck
import { TCollection } from "../../types/t-collection";
import { _Collection } from "./_meta-collection";
import { ICollection } from "./i-collection";

export class _Set extends _Collection implements ICollection {
  get count() {
    return this.set.size;
  }
  get(index: number) {
    return Array.from(this.set)[index];
  }
  append(item: any) {
    this.set.add(item);
  }
  prepend(item: any) {
    this.set = new Set([...item, ...this.set]);
  }
  appendAll(coll: TCollection) {
    this.set = new Set([...this.set, ...coll]);
  }
  get empty() {
    return new Set();
  }
  clear() {
    this.set = new Set();
  }
  contains$(item: any) {
    return this.set.has(item);
  }
  remove(item: any) {
    this.set.delete(item);
  }
  removeIdx(item: any) {
    this.set.delete(item);
  }
  slice(base: number, end?: number) {
    return new Set(Array.from(this.set).slice(base, end));
  }
}
