// castResult :: (String, List) -> Object
export function castEntriesArrayToObject(result) {
  return Array.isArray(result)
    ? result
    : result.reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
}
