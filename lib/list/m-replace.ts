import { void$ } from "../generic/void$";
import { find } from "../object/find";
import { vals } from "../object/vals";
import { second } from "./second";
import { map } from "./map";
import { not } from "../generic/not";
import { apply } from "../function/apply";

export function mReplace(smap: any[], coll?: any[]) {
  const isTransducer = void$(coll);
  const getter = isTransducer ? vals : second;
  return apply(map, [
    function (item: any) {
      const colItem = find(smap, item);
      return colItem ? getter(colItem) : item;
    },
    ...(not(isTransducer) ? [coll] : [])
  ]);
}
