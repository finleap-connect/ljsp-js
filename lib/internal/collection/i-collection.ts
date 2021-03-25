import { TCollection } from "../../types/t-collection";

export interface ICollectionMap {
  array: ICollection;
  string: ICollection;
  object: ICollection;
  set: ICollection;
  map: ICollection;
}

export interface ICollection {
  set: TCollection;
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
  get: (index: number) => any;
  count: number;
  empty: TCollection;
  indexOf: (item: any) => number;
  lastIndexOf: (item: any) => number;
}
