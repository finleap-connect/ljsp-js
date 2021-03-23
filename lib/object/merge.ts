import { cloneDeep } from "../generic/clone-deep";

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'first' implicitly has an 'any' type.
export function merge(first, ...rest) {
  const target = cloneDeep(first);

  return rest.reduce((acc, cur) => {
    const source = cloneDeep(cur);
    acc = Object.assign(target, source);
    return acc;
  }, target);
}
