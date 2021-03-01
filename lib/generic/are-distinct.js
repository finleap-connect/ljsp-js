/**
 * @param rest
 * @returns {boolean}
 */
export function areDistinct(...rest) {
  const map = {};
  return rest.every((arg) => {
    // eslint-disable-next-line
    return map.hasOwnProperty(arg) ? false : ((map[arg] = arg), true);
  });
}
