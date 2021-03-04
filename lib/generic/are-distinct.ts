export function areDistinct(...rest: Array<any>) {
  const map = {};
  return rest.every((arg) => {
    //@ts-ignore
    return map.hasOwnProperty(arg) ? false : ((map[arg] = arg), true);
  });
}
