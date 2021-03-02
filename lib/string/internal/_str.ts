import { cond, ELSE } from "../../conditional/cond";
import { isEmpty } from "../../generic/is-empty";
import { void$ } from "../../generic/void$";
import { first } from "../../list/first";

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'delimiter' implicitly has an 'any' type... Remove this comment to see the full error message
export function _str(delimiter, ...rest) {
  const args = first(rest);
  // prettier-ignore
  return cond(
    isEmpty(args), "",
    args.length === 1, () => {
      const val = first(args);
      return void$(val) ? "" : val.toString();
    },
    ELSE, () => {
      // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'arg' implicitly has an 'any' type.
      const result = args.map((arg) => (void$(arg) ? "" : arg.toString()));
      return result.join(delimiter);
    }
  );
}
