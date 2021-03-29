import { TAnyObject } from "../types/t-any-object";

export function hasOwnProp(obj: TAnyObject, prop: PropertyKey) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
