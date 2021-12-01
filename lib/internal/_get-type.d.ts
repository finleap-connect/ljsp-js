/**
 * All native objects in JavaScript contain an internal [[Class]] property.
 * This property contains a string value that represents the _specification defined classification_
 * of an Object. Calling `Object.prototype.toString.call` is the only way to
 * access the [[Class]] property of an object. As such, this isn't really a formal
 * Type, per se. As above, it is the Object's `specification defined classification`.
 * However, this accurately serves, for most instances (except, perhaps, those
 * that are vendor dependent), to return an item's "type". Works on primitives.
 *
 * NOTE: According to the ECMAScript spec -
 * Historically, this function was occasionally used to access the String value of the [[Class]]
 * internal slot that was used in **previous editions** of this specification as a nominal type tag
 * for various built-in objects. The above definition of toString preserves compatibility for
 * legacy code that uses toString as a test for those specific kinds of built-in objects. It does
 * not provide a reliable type testing mechanism for other kinds of built-in or program defined objects.
 * In addition, programs can use @@toStringTag in ways that will invalidate the reliability of
 * such legacy type tests.
 */
export declare function _getType(value: any): string;
