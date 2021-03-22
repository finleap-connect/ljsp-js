/**
 * All native objects in JavaScript contain an internal [[Class]] property.
 * This property contains a string value that represents the _specification defined classification_
 * of an Object. Calling `Object.prototype.toString.call` is the only way to
 * access the [[Class]] property of an object. As such, this isn't really a formal
 * Type, per se. As above, it is the Object's `specification defined classification`.
 * However, this accurately serves, for most instances (except, perhaps, those
 * that are vendor dependent), to return an item's "type". Works on primitives.
 */
export function _getType(value: any) {
  const rawType = Object.prototype.toString.call(value);
  const matches = rawType.match(/\[object\s(.*?)]/);
  // @ts-ignore
  return matches[1].toLowerCase();
}
