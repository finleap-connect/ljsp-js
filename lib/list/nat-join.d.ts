/**
 * When passed 2 rels, returns the rel corresponding to the natural
 * join. When passed an additional keymap, joins on the corresponding
 * keys.
 */
export declare function natJoin(xrel: Array<any>, yrel: Array<any>, keyMap?: string[]): any[];
