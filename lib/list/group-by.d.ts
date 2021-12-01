/**
 * Returns a map of the elements of coll keyed by the result of
 * f on each element. The value at each key will be a vector of the
 * corresponding elements, in the order they appeared in coll.
 */
export declare function groupBy(fn: Function | string, coll: Array<any>): any;
