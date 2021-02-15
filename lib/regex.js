import { isObject } from "lodash";
import { spec } from "./spec";

/**
 * Takes key+pred pairs, returns a regex function that matches (all) values
 * in sequence, returning a map containing the keys of each matched regex
 * and its corresponding value.
 * @param keyPredForms
 * @returns {function(*): *}
 */
export function cat(keyPredForms) {
  spec({ func: "cat", spec: { keyPredFormsIsObject: isObject(keyPredForms) } });
  return function (values) {
    return values.reduce((acc, cur) => {
      acc.push(
        Object.entries(keyPredForms).reduce((acc, [key, val]) => {
          acc[key] = cur.match(val);
          return acc;
        }, {})
      );
      return acc;
    }, []);
  };
}
