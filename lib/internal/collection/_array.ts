// @ts-nocheck
import { notEq } from "../../generic/not-eq";
import { TCollection } from "../../types/t-collection";
import { _Collection } from "./_meta-collection";
import { ICollection } from "./i-collection";

export class _Array extends _Collection implements ICollection {
  slice(base: number, end?: number) {
    return this.set.slice(base, end);
  }
  get empty() {
    return [];
  }
  remove(item: any) {
    this.set = this.set.filter((val) => notEq(val, item));
  }
  removeIdx(index: any) {
    this.set.splice(index, 1);
  }
  contains$(item: any) {
    return this.set.includes(item);
  }
  clear() {
    this.set = [];
  }
  appendAll(coll: TCollection) {
    this.set = this.set.concat(coll);
  }
  append(item: any) {
    this.set.push(item);
  }
  prepend(item: any) {
    this.set.unshift(item);
  }
  get(index: number) {
    return this.set[index];
  }
  get count() {
    return this.set.length;
  }
  indexOf(item: any) {
    return this.set.indexOf(item);
  }
  lastIndexOf(item: any) {
    return this.set.lastIndexOf(item);
  }
}
