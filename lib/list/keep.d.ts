/**
 * `keep` can be used to return a non-nullish result of fn(set).
 * If `set` is not passed, returns a transducer function `fn` that
 * takes `set` as an argument.
 * @param {Function} fn
 * @param {*[]} set
 * @return {*[]|(function(*=): *)}
 */
export declare function keep(fn: any, set: any): any;
