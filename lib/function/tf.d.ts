/**
 * Used to flatten nested function calls. `tf` allows value transformations to be
 * expressed as “pipelines” of values, similar to Unix pipes.
 */
export declare function tf(val: any, ...fns: Function[]): any;
