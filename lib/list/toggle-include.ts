import { cloneDeep } from "../generic/clone-deep";
import { not } from "../generic/not";

export function toggleInclude(set: any[], ...rest: any[]) {
  const newSet = cloneDeep(set);
  for (let x = 0; x < rest.length; x++) {
    const cur = rest[x];
    if (not(set.includes(cur))) {
      newSet.push(cur);
    } else {
      newSet.splice(newSet.indexOf(cur), 1);
    }
  }
  return newSet;
}
