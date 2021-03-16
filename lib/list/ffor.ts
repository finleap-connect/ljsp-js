/**
 * List comprehension. Takes an Array of one or more
 * Arrays (`set`), and yields an Array of evaluations
 * of the Cartesian product of the Arrays in `set`.
 */
export function ffor(set: Array<any>, fn: Function): Array<any> {
  return set.reduce((acc, cur) => {
    return acc.flatMap((outer: any) => {
      return cur.map((inner: any) => {
        return fn(outer, inner);
      });
    });
  });
}
