export function listInsert(source: any[], insert: any, locator: Function, isBefore: boolean) {
  // @ts-ignore
  const index = source.findIndex(locator);
  const boundary = isBefore ? index - 1 : index;
  return [
    ...source.slice(0, boundary),
    ...(Array.isArray(insert) ? insert : [insert]),
    ...source.slice(boundary, source.length)
  ];
}
