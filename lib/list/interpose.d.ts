/**
 * Returns a lazy seq of the elements of coll separated by sep.
 * Returns a stateful transducer when no collection is provided.
 */
export declare function interpose(sep: any, set?: any[]): any[] | ((step: Function) => (result: any[], input: any) => any);
