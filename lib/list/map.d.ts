export declare function map(
  fn: Function,
  ...args: Array<any>
): any[] | ((stepFunction: Function) => (...args: any[]) => any);
