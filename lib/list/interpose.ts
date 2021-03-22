import { reduced$ } from "./reduced$";
import { void$ } from "../generic/void$";
import { notEmpty$ } from "../generic/not-empty$";

export function interpose(sep: any, set?: any[]) {
  if (void$(set)) {
    return function (step: Function) {
      let started = false;
      return function (result: any[], input: any) {
        if (started) {
          let sepr = step(result, sep);
          return reduced$(sepr) ? sepr : step(sepr, input);
        } else {
          started = true;
          return step(result, input);
        }
      };
    };
  } else {
    // @ts-ignore
    return set.reduce((acc: any[], cur) => {
      return notEmpty$(acc) ? acc.concat([sep, cur]) : [cur];
    }, []);
  }
}
