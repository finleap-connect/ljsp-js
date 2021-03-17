import { second } from "../list/second";

export function _getType(value: any) {
  return second(Object.prototype.toString.call(value).match(/\[object\s(.*?)\]/)).toLowerCase();
}
