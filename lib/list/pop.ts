import { TCollection } from "../types/TCollection";
import { Collection } from "../internal/collection";
import { dec } from "../math/dec";

export function pop(coll: TCollection) {
  const _coll = Collection(coll);
  _coll.remove(_coll.get(dec(_coll.count)));
  return _coll.source;
}
