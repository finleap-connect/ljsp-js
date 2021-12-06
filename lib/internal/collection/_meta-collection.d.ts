import { TCollection } from "../../types/t-collection";
export declare class _Collection {
  set: TCollection;
  constructor(set: TCollection);
  get source(): TCollection;
  get empty$(): boolean;
}
