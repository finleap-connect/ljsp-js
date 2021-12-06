import { TCollection } from "../../types/t-collection";
import { _Collection } from "./_meta-collection";
import { ICollection } from "./i-collection";
export declare class _Object extends _Collection implements ICollection {
  constructor(set: any);
  get count(): any;
  get(index: number): [string, any];
  append(item: any): void;
  prepend(item: any): void;
  appendAll(coll: TCollection): void;
  get empty(): {};
  clear(): void;
  contains$(item: any): boolean;
  remove(item: any): void;
  removeIdx(index: any): void;
  slice(
    base: number,
    end?: number
  ): {
    [k: string]: any;
  };
}
