/**
 * Takes key+pred pairs, returns a regex function that matches (all) values
 * in sequence, returning a map containing the keys of each matched regex
 * and its corresponding value.
 * @param keyPredForms
 * @returns {function(*): *}
 */
export declare function cat(keyPredForms: any): (values: any) => any;
