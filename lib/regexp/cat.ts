/**
 * Takes key+pred pairs, returns a regex function that matches (all) values
 * in sequence, returning a map containing the keys of each matched regex
 * and its corresponding value.
 * @param keyPredForms
 * @returns {function(*): *}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'keyPredForms' implicitly has an 'any' t... Remove this comment to see the full error message
export function cat(keyPredForms) {
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'values' implicitly has an 'any' type.
  return function (values) {
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'acc' implicitly has an 'any' type.
    return values.reduce((acc, cur) => {
      acc.push(
        Object.entries(keyPredForms).reduce((acc, [key, val]) => {
          // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
          acc[key] = cur.match(val);
          return acc;
        }, {})
      );
      return acc;
    }, []);
  };
}
