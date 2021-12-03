import { TCollection } from "../../types/t-collection";
import { _Collection } from "./_meta-collection";
import { ICollection } from "./i-collection";
export declare class _Array extends _Collection implements ICollection {
  slice(base: number, end?: number): any;
  get empty(): never[];
  remove(item: any): void;
  removeIdx(index: any): void;
  contains$(item: any): any;
  clear(): void;
  appendAll(coll: TCollection): void;
  append(item: any): void;
  prepend(item: any): void;
  get(index: number): any;
  get count(): any;
  indexOf(item: any): any;
  lastIndexOf(item: any): any;
}
