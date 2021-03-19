/**
 * @param {number} count
 * @param {sequence} sequence
 * @returns {[]|Function}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'count' implicitly has an 'any' type.
export function takeS(count, sequence) {
  const limit = count;
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'sequence' implicitly has an 'any' type.
  function run(sequence) {
    const result = [];
    for (let i = 0; i < limit; i++) {
      const item = sequence();
      if (item) {
        result.push(item);
      } else {
        return result;
      }
    }
    return result;
  }
  if (!sequence) {
    return run;
  } else {
    return run(sequence);
  }
}
