import { pos$ } from "../math/pos$";
import { spec } from "../spec/spec";

/**
 * @param {[]} set
 * @param {number} section
 * @param {number} sectionSize
 * @returns {[]}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function getSectionFromSet(set, section, sectionSize) {
  spec({
    func: "getPage",
    spec: {
      data: Array.isArray(set),
      section: pos$(section),
      sectionSize: pos$(sectionSize),
      validSection: getSectionIndex(section, sectionSize) <= set.length
    }
  });
  const start = getSectionIndex(section, sectionSize);
  const end = start + sectionSize;
  return set.slice(start, end);
}

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'section' implicitly has an 'any' type.
function getSectionIndex(section, sectionSize) {
  return (section - 1) * sectionSize;
}
