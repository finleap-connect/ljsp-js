// castResult :: (String, List) -> Object
/**
 * @param result
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'result' implicitly has an 'any' type.
export function castEntriesArrayToObject(result) {
  return Array.isArray(result)
    ? result
    : // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'acc' implicitly has an 'any' type.
      result.reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
}
