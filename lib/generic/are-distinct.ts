export function areDistinct(...rest: Array<any>) {
  const map: Record<string | number, any> = {};
  return rest.every((arg) => {
    return map.hasOwnProperty(arg) ? false : ((map[arg] = arg), true);
  });
}
