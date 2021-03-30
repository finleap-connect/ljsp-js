// @ts-nocheck
import { TCollection } from "../types/t-collection";
import { ICollection, ICollectionMap } from "./collection/i-collection";
import { _Array } from "./collection/_array";
import { _String } from "./collection/_string";
import { _Object } from "./collection/_object";
import { _Set } from "./collection/_set";
import { _Map } from "./collection/_map";
import { _Collection } from "./collection/_meta-collection";
import { _getType } from "./_get-type";
import { cloneDeep } from "../generic/clone-deep";
import { not } from "../generic/not";
import { BaseTypes } from "../enums/base-types";

export function Collection(coll: TCollection, clone = true): ICollection {
  if (coll instanceof _Collection) {
    return coll;
  }

  const type = _getType(coll);
  let set = not(clone) || typeof coll === BaseTypes.String ? coll : cloneDeep(coll);

  return new CollectionMap[type](set);
}

const CollectionMap: ICollectionMap = {
  array: _Array,
  string: _String,
  object: _Object,
  set: _Set,
  map: _Map
};
