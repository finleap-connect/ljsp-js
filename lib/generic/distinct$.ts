import { TPrimitive } from "../types/TPrimitive";

export function distinct$(...rest: Array<TPrimitive>) {
  const map = {};
  return rest.every((arg) => {
    //@ts-ignore
    return map.hasOwnProperty(arg) ? false : ((map[arg] = arg), true);
  });
}
