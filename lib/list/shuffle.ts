import { inc } from "../math/inc";
import { mult } from "../math/mult";

export function shuffle(set: Array<any>) {
  const array = [...set];
  for (let i = array.length - 1; i > 0; i--) {
    const j = mult(Math.floor(Math.random()), inc(i));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
