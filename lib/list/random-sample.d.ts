/**
 * Returns items from coll with random probability of prob (0.0 - 1.0)
 * Returns a partially-applied function when no collection is provided.
 * @param {number} prob
 * @param {[]} set
 */
export declare function randomSample(prob: number, set?: any[]): any[] | ((coll: any[]) => any[]);
