import { object$ } from "../generic/object$";
import { _getType } from "../internal/_get-type";

export function instance$(cls: Function, value: any) {
  if (object$(value)) {
    return value instanceof cls;
  } else {
    // @ts-ignore
    const type = _getType(new cls());
    return typeof value === type;
  }
}
