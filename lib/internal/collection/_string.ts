// @ts-nocheck
import { TCollection } from "../../types/t-collection";
import { inc } from "../../math/inc";
import { _Collection } from "./_meta-collection";
import { ICollection } from "./i-collection";

export class _String extends _Collection implements ICollection {
  get count() {
    return this.set.length;
  }
  get(index: number) {
    return this.set[index];
  }
  append(item: string) {
    this.set += item;
  }
  prepend(item: any) {
    this.set = item + this.set;
  }
  appendAll(coll: TCollection) {
    this.set += coll;
  }
  get empty() {
    return "";
  }
  clear() {
    this.set = "";
  }
  contains$(item: any) {
    return this.set.includes(item);
  }
  remove(item: any) {
    this.set = this.set.replace(item, "");
  }
  removeIdx(index: any) {
    this.set = this.set.slice(0, index) + this.set.slice(inc(index));
  }
  slice(base: number, end?: number) {
    return this.set.slice(base, end);
  }
}
