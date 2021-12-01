declare type Function = (...args: any) => any;
declare type ResolverFn = (...args: any) => string;
export declare function memoize(fn: Function, cacheKey?: ResolverFn): any;
export {};
