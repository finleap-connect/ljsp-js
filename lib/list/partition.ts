import { eq } from "../generic/eq";
import { take } from "./take";
import { count } from "./count";
import { cons } from "./cons";
import { concat } from "./concat";
import { empty$ } from "../generic";

export function partition(n: number, step: number | any[], pad?: any[], coll?: any[]): any {
  const argLength = arguments.length;

  switch (argLength) {
    case 2:
      // @ts-ignore
      return noOverlap(n, step);
    case 3:
      // @ts-ignore
      return withStep(n, step, pad);
    case 4:
      // @ts-ignore
      return withPad(n, step, pad, coll);
  }
}

function noOverlap(n: number, coll: any[]) {
  return partition(n, n, coll);
}

function withStep(n: number, step: number, coll: any[]) {
  if (empty$(coll)) {
    return null;
  } else {
    const part = coll.slice(0, n);
    if (eq(n, count(part))) {
      const nextPart = partition(n, step, coll.slice(step));
      return nextPart ? cons(part, nextPart) : [part];
    } else {
      return null;
    }
  }
}

function withPad(n: number, step: number, pad: any[], coll: any[]) {
  if (empty$(coll)) {
    return null;
  } else {
    const part = coll.slice(0, n);
    if (eq(n, count(part))) {
      const nextPart = partition(n, step, pad, coll.slice(step));
      return nextPart ? cons(part, nextPart) : [part];
    } else {
      // @ts-ignore
      return [take(n, concat(part, pad))];
    }
  }
}
