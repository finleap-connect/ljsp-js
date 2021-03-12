type TypeFn = (arg?: any) => boolean;

export function typedSet$(set: Array<any>, fn: TypeFn): boolean {
  return set.every((item) => fn(item));
}
