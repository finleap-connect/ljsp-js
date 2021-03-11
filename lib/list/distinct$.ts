import { Primitive } from "../types/primitive";

export function distinct$(...rest: Array<Primitive>) {
  const map = {};
  return rest.every((arg) => {
    //@ts-ignore
    return map.hasOwnProperty(arg) ? false : ((map[arg] = arg), true);
  });
}
