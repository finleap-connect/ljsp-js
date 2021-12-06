/**
 * Returns a negative number, zero, or a positive number
 * when x is logically 'less than', 'equal to', or 'greater than'
 * y. Works with number, string, and boolean values---as well as Arrays
 * of those values. Compares numbers and Arrays in a type-independent
 * manner; however the types compared must always match.
 *
 * When comparing strings, a delta in a string returns the distance between
 * the first two letters that don't match. See examples below for deta
 * @param left
 * @param right
 */
export declare function compare(left: any, right: any): number;
