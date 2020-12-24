export { toPath, strSpace, str } from "./string";
export {
  part,
  removeFromSetById,
  conj,
  findInSetById,
  getSectionFromSet,
  leftDiff,
  updateSet,
  rightDiff,
  dissoc,
  mapIndexed,
  listInsertAfter,
  listInsertBefore,
  makeArray,
  selectKeys,
  interleave
} from "./list";
export { eq, deepEq, doWork, isFunctionSet, isTypedSet, areDistinct } from "./generic";
export { add, div, inc, mult, sub, dec, mod, quot, remain } from "./math";
export {
  ifYes,
  cond,
  ELSE,
  ifNo,
  when,
  whenNot,
  ifClass,
  iff,
  ifSome,
  everyPred,
  some
} from "./conditional";
export { spec, pre, after } from "./spec";
