import { get as _get } from "lodash";
import { cond } from "../conditional/cond";
import { object$ } from "../generic/object$";
import { arrayLike$ } from "../generic/array-like$";

export function get(set: Array<any> | object | string, key: string | number, notFound?: any) {
  // prettier-ignore
  return cond(
    // @ts-ignore
    () => arrayLike$(set), () => set[key] ?? notFound,
    () => object$(set), () => _get(set, key, notFound),
  );
}
