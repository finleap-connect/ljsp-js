import { intersection } from "./intersection";
import { first } from "./first";
import { void$ } from "../generic/void$";
import { ffor } from "./ffor";
import { assoc } from "./assoc";
import { count } from "./count";
import { second } from "./second";
import { and } from "../conditional/and";
import { keys } from "../object";

/**
 * When passed 2 rels, returns the rel corresponding to the natural
 * join. When passed an additional keymap, joins on the corresponding
 * keys.
 */
export function natJoin(xrel: Array<any>, yrel: Array<any>, keyMap?: string[]) {
  const sizeOrderedSet = count(xrel) >= count(yrel) ? [xrel, yrel] : [yrel, xrel];
  const base = first(sizeOrderedSet);
  const foreign = second(sizeOrderedSet);

  // Build an index of items in the matched set based on the corresponding key
  // Use a Map, so the key can be any value
  let foreignKey: string, joinKey: string;
  if (keyMap) {
    const [leftKey, rightKey] = keyMap;
    const test = first(base);
    foreignKey = leftKey in test ? rightKey : leftKey;
    joinKey = leftKey in test ? leftKey : rightKey;
  } else {
    const xkeys = keys(first(xrel));
    const ykeys = keys(first(yrel));
    foreignKey = first(intersection(xkeys, ykeys));
    joinKey = foreignKey;
  }

  // If there is no key match, and no keyMap provided return the Cartesian product
  if (and(void$(foreignKey), void$(keyMap))) {
    return ffor([xrel, yrel], (x: any, y: any) => [x, y].flat());
  }
  const index = foreign.reduce((acc: any, cur: any) => {
    return acc.set(cur[foreignKey], cur);
  }, new Map());

  return base.map((row: any) => {
    return assoc(index.get(row[joinKey]), row);
  });
}
