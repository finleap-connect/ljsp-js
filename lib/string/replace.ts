// @ts-nocheck
import { regExp$ } from "../generic/reg-exp$";
import { array$ } from "../generic/array$";
import { second } from "../list/second";
import { first } from "../list/first";
import { str } from "./str";

export function replace(s: string, match: RegExp | string, replacement: string | string[] | Function) {
  const isRegMatch = regExp$(match);
  match = new RegExp(
    isRegMatch ? match.source : match,
    isRegMatch ? str(match.flags, match.flags.includes("g") ? "" : "g") : "g"
  );
  if (array$(replacement)) {
    const matches = s.matchAll(match) ?? [];

    for (const match of matches) {
      let matchSet = first(replacement).reduce((acc, cur) => (acc += match[cur]), "");
      s = s.replace(new RegExp(first(match), "g"), str(matchSet, second(replacement)));
    }
    return s;
  } else {
    return s.replace(match, replacement);
  }
}
