import { isPositiveInt$ } from "../math/is-positive-int$";
import { spec } from "../spec/spec";

/**
 * @param {[]} set
 * @param {number} section
 * @param {number} sectionSize
 * @returns {[]}
 */
export function getSectionFromSet(set, section, sectionSize) {
  spec({
    func: "getPage",
    spec: {
      data: Array.isArray(set),
      section: isPositiveInt$(section),
      sectionSize: isPositiveInt$(sectionSize),
      validSection: getSectionIndex(section, sectionSize) <= set.length
    }
  });
  const start = getSectionIndex(section, sectionSize);
  const end = start + sectionSize;
  return set.slice(start, end);
}

function getSectionIndex(section, sectionSize) {
  return (section - 1) * sectionSize;
}
