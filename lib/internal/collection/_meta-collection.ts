import { eq } from "../../generic/eq";
import { TCollection } from "../../types/t-collection";

export class _Collection {
  set: TCollection;
  constructor(set: TCollection) {
    this.set = set;
  }
  get source() {
    return this.set;
  }
  get empty$() {
    // @ts-ignore
    return eq(this.count, 0);
  }
}
